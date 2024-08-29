import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a60564ee-a072-49e5-8afb-e25dd322a44f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
        window.alert('Success, Form Submitted!', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container d-flex flex-column justify-content-center min-vh-100">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="title">Contact</h1>

                    <form onSubmit={handleSubmit} className="d-flex flex-column">

                        <input className="inputField glow"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input className="inputField glow"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea className="textareaField glow"
                            id="message"
                            name="message"
                            placeholder="Enter Message (400) Character Max"
                            rows="10"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="submitButton"> Let's Come together </button>

                    </form>
                </div>
            </div>
        </div>
    )
};

// Form is emailed to pplannerhelp@gmail.com
