const express = require("express");
const { ApolloServer } = require("@apollo/server");   //allowes the server to handle GraphQL queries.
const path = require("path");
const cors = require("cors");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const { expressMiddleware } = require("@apollo/server/express4");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors())
  
  app.use("/graphql", expressMiddleware(server));

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}/graphql`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
