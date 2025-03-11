import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  // Make sure to import axios
import signup from '../assets/sign up.jpg'


function CreateUser() {
    const [User_Name, setUser_Name] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(""); // State to manage password error message
    const [location, setLocation] = useState("")
    const [Hobbies, setHobbies] = useState("")
    const home = useNavigate();

    const handleUser_Name = (event) => {
        setUser_Name(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleLocation  = (event) =>{
        setLocation(event.target.value)
    }

    const handleHobbies = (event) =>{
        setHobbies(event.target.value)
    }
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

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        // Ensure password is valid before submitting
        if (passwordError) {
            alert("Please fix the password errors before submitting.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3000/createUser", {
            User_Name,
            Email,
            Password,
            location,
            Hobbies,

        })
        if (res.status===201){
            alert('successfully register')
            home("/MuseumData")
        }
        
        } catch (error) {
            console.log(error)
        }
        
        
        
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${signup})`
            }}>
            <div className="w-full max-w-md px-4">
                <div className="relative z-0 flex flex-col min-w-0 break-words bg-white/90 border-0 shadow-lg rounded-3xl">
                    <div className="p-6 mb-0 text-center bg-gradient-to-r from-yellow-500 to-orange-400 rounded-t-3xl">
                        <h5 className="text-white text-2xl font-extrabold">Join the Museum Explorer</h5>
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
                                    className="text-md focus:shadow-lg block w-3/4 mx-auto rounded-full border border-gray-300 bg-white py-3 px-4 text-gray-900 transition-all focus:border-orange-400 focus:bg-white focus:text-gray-900 focus:outline-none"
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
                                    className="text-md focus:shadow-lg block w-3/4 mx-auto rounded-full border border-gray-300 bg-white py-3 px-4 text-gray-900 transition-all focus:border-orange-400 focus:bg-white focus:text-gray-900 focus:outline-none"
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
                                    className="text-md focus:shadow-lg block w-3/4 mx-auto rounded-full border border-gray-300 bg-white py-3 px-4 text-gray-900 transition-all focus:border-orange-400 focus:bg-white focus:text-gray-900 focus:outline-none"
                                    type="password"
                                />
                                {passwordError && (
                                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                                )}
                            </div>

                            <div className='mb-4'>
                                <input type="text"
                                required
                                placeholder='location'
                                value={location}
                                onChange={handleLocation}
                                className="text-md focus:shadow-lg block w-3/4 mx-auto rounded-full border border-gray-300 bg-white py-3 px-4 text-gray-900 transition-all focus:border-orange-400 focus:bg-white focus:text-gray-900 focus:outline-none"
                                 />
                               
                            </div>

                            <div className='mb-4'>
                                <input type="text"
                                required
                                placeholder='Hobbies'
                                value={Hobbies}
                                onChange={handleHobbies}
                                className="text-md focus:shadow-lg block w-3/4 mx-auto rounded-full border border-gray-300 bg-white py-3 px-4 text-gray-900 transition-all focus:border-orange-400 focus:bg-white focus:text-gray-900 focus:outline-none"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="inline-block w-1/2 px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase transition-all bg-orange-500 border-0 rounded-full cursor-pointer hover:scale-105 hover:bg-orange-600 shadow-md active:opacity-85"
                                >
                                    Sign up
                                </button>
                            </div>
                            <p className="text-gray-700 font-medium mt-4">or</p>
                            <div>
                                <button
                                    type="button"
                                    className="inline-block w-1/2 px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase transition-all bg-gray-700 border-0 rounded-full cursor-pointer hover:scale-105 hover:bg-gray-800 shadow-md active:opacity-85"
                                    onClick={() => home("/login")}
                                >
                                    Already a user
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
