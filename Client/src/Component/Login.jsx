import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import signup from '../assets/sign up.jpg'

export default function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login',{
      email:email,
      password:password
    })
    .then(()=>{
      navigate("/MuseumData")
    })
    .catch((err)=>{
      console.log("Error in logging in")
    })
  }

  return (
    <div onSubmit={handleSubmit}
        style={{
            backgroundImage: `url(${signup})`
        }}
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
    >
        <div className="flex items-center justify-center">
            <div className="relative">
                <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-2xl animate-pulse"></div>
                <div
                    id="form-container"
                    className="bg-white p-8 sm:p-16 rounded-lg shadow-2xl w-80 sm:w-96 relative z-10 transform transition-all duration-500 ease-in-out hover:scale-105"
                >
                    <h2 id="form-title" className="text-center text-3xl font-bold mb-6 text-gray-900">
                        Login
                    </h2>
                    <form className="space-y-5">
                        <input
                            className="w-full h-12 border border-gray-300 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="Email"
                            id="email"
                            name="email"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="w-full h-12 border border-gray-300 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all mb-4"
                            type="submit"
                        >
                            Sign in
                        </button>
                        <a className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-all block text-center" href="#">
                            Forgot Password?
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

  }
  