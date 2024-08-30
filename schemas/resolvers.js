const { User, Event } = require("../models");
const { signToken } = require("../utils/auth");
const { ApolloError } = require("apollo-server-errors");

class AuthenticationError extends ApolloError {
  constructor(message) {
    super(message, 'UNAUTHORIZED');
  }
}
const resolvers = {
  //queries (GET route equivalent)
  Query: {
    users: async () => {
      return await User.find().populate("events");             // Retrieves all users and populates their associated events.
    },
    user: async (parent, { id }) => {
      return await User.findById(id).populate("events");       // Retrieves a specific user by ID and populates their associated events.
    },
    events: async () => {
      return await Event.find().populate("user");               // Retrieves all events and populates the user associated with each event.
    },
    event: async (parent, { id }) => {
      return await Event.findById(id).populate("user");         // Retrieves a specific event by ID and populates the associated user.
    },
  },

  //mutations (POST, PUT, DELETE route equivalent)
  Mutation: {
    //create a new user
    createUser: async (parent, args) => {
      const user = await User.create(args);                       // Creates a new user using the provided arguments.

      if (!user) {
        throw new Error("Something is wrong!");
      }

      const token = signToken(user);
      return { token, user };
    },

    //validate email and password on login
    login: async (parent, { email, password }) => {
      console.log("login muttation:")
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");             // Validates the user's email and password.
      }

      const correctPw = await user.checkPassword(password);                   

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    createEvent: async (parent, args) => {
      console.log(args);
      const event = new Event(args);                              // Associates the event with a user by updating the user's events array.
      await event.save();

      const userId = event.user;
      const eventId = event._id;

      await User.updateOne({ _id: userId }, { $push: { events: eventId } });
      console.log(User)
      return event;
    },
    updateEvent: async (parent, { id, ...rest }) => {                                   // Updates an existing event by its ID with the provided data.
      return await Event.findByIdAndUpdate(id, rest, { new: true }).populate(
        "user"
      );
    },
    deleteEvent: async (parent, { id }) => {
      await Event.findByIdAndRemove(id);
      return true;
    },
  },
};

module.exports = resolvers;

/*
// lets leave this as extra functionality
updateUser: async (parent, { id, ...rest }) => {
  return await User.findByIdAndUpdate(id, rest, { new: true });
},
deleteUser: async (parent, { id }) => {
  await User.findByIdAndRemove(id);
  return true;
},
*/
