import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  // Make sure to import axios

function CreateUser() {
    const [User_Name, setUser_Name] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(""); // State to manage password error message
    const home = useNavigate();

    const handleUser_Name = (event) => {
        setUser_Name(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    // Password validation function
    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordPattern.test(password);
    };

    const handlePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        // Check password validity and set error message if invalid
        if (!validatePassword(newPassword)) {
            setPasswordError("Password must have at least 8 characters, including a number and a special character.");
        } else {
            setPasswordError(""); // Clear error message if password is valid
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Ensure password is valid before submitting
        if (passwordError) {
            alert("Please fix the password errors before submitting.");
            return;
        }

        home("/MuseumData");
        axios.post("http://localhost:3000/createUser", {
            User_Name,
            Email,
            Password,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center">
            <div className="w-full max-w-md px-3">
                <div className="relative z-0 flex flex-col min-w-0 break-words bg-white/80 border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-6 mb-0 text-center bg-gold-500 border-b-0 rounded-t-2xl">
                        <h5 className="text-dark text-xl font-bold">Join the Museum Explorer</h5>
                    </div>
                    <div className="flex-auto p-6">
                        <form role="form" className="text-center" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    aria-describedby="name-addon"
                                    required
                                    aria-label="Name"
                                    placeholder="Name"
                                    value={User_Name}
                                    onChange={handleUser_Name}
                                    className="text-sm focus:shadow-soft-primary-outline block w-3/4 mx-auto rounded-lg border border-gray-400 bg-gray-50 py-2 px-3 text-gray-800 transition-all focus:border-brown-300 focus:bg-white focus:text-gray-800 focus:outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    aria-describedby="email-addon"
                                    required
                                    aria-label="Email"
                                    placeholder="Email"
                                    value={Email}
                                    onChange={handleEmail}
                                    className="text-sm focus:shadow-soft-primary-outline block w-3/4 mx-auto rounded-lg border border-gray-400 bg-gray-50 py-2 px-3 text-gray-800 transition-all focus:border-brown-300 focus:bg-white focus:text-gray-800 focus:outline-none"
                                    type="email"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    aria-describedby="password-addon"
                                    required
                                    aria-label="Password"
                                    placeholder="Password"
                                    value={Password}
                                    onChange={handlePassword}
                                    className="text-sm focus:shadow-soft-primary-outline block w-3/4 mx-auto rounded-lg border border-gray-400 bg-gray-50 py-2 px-3 text-gray-800 transition-all focus:border-brown-300 focus:bg-white focus:text-gray-800 focus:outline-none"
                                    type="password"
                                />
                                {/* Display password error if any */}
                                {passwordError && (
                                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="inline-block w-1/2 px-6 py-3 mt-6 mb-2 font-bold text-center text-black uppercase align-middle transition-all bg-brown-500 border-0 rounded-lg cursor-pointer hover:scale-102 leading-pro text-xs tracking-tight-soft shadow-soft-md hover:shadow-soft-xs active:opacity-85"
                                >
                                    Sign up
                                </button>
                            </div>
                            <p>or</p>
                            <div>
                                <button
                                  type="submit"
                                  className="inline-block w-1/2 px-6 py-3 mt-6 mb-2 font-bold text-center text-black uppercase align-middle transition-all bg-brown-500 border-0 rounded-lg cursor-pointer hover:scale-102 leading-pro text-xs tracking-tight-soft shadow-soft-md hover:shadow-soft-xs active:opacity-85"
                                  onClick={() => home("/login")}>
                                    alreday a user
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
