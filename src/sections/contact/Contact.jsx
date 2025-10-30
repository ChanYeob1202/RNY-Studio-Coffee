import React from 'react'
import { FaInstagram } from "react-icons/fa6";

// TODO - implement send message function

export default function Contact() {
  return (
    <div className = "w-full flex flex-col mt-20">
        {/* header */}
        <div className = "flex flex-col justify-center items-center gap-4">
            <h1 className = "text-2xl md:text-xl sm:text-lg">Get In Touch</h1>
            <p className = "text-gray-600 text-center px-4 max-w-3xl">
                Have a question? We'd love to hear from you.
            </p>
        </div>

        {/* form & SNS section */}
        <div className = "grid gird-cols-1 md:grid-cols-2 gap-4 mt-24 max-w-8xl px-32">

            {/* 1. Form section */}
            <form className = "w-full py-6 flex flex-col items-center gap-6 max-w-2xl mx-auto ">

                {/* name field */}
                <div className = "flex items-center gap-4 w-full">
                    <label className = "w-24 text-right font-medium text-gray-700">Name: </label>
                    <input
                        type = "text" 
                        className = "flex-1 border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 hover:border-gray-400"
                        placeholder = "Your name"
                        />
                </div>

                {/* email field */}
                <div className = "flex items-center gap-4 w-full">
                    <label className = "w-24 text-right font-medium text-gray-700">email: </label>
                    <input 
                        type = "email"
                        className = "flex-1 border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 hover:border-gray-400" 
                        placeholder = "your@email.com"
                        />
                </div>

                {/* message field */}
                <div className = "flex items-center gap-4 w-full">
                    <label className = "w-24 text-right font-medium text-gray-700">message: </label>
                    <textarea
                        className="flex-1 border border-gray-300 bg-white rounded-lg px-4 py-3 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition duration-200 hover:border-gray-400 resize-y min-h-[150px]"
                        rows = "5"
                        placeholder = "Your message here..."
                        />
                </div>
                <button 
                    type = "submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold
                   py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800
                   transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    Send a message
                </button>

            </form>

            {/*2. SNS section */}
            <div className="w-full py-6 flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto min-h-[400px]">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
                    <p className="text-gray-600 max-w-md">
                        Follow us on Instagram to see our latest creations, 
                        behind-the-scenes moments, and connect with fellow coffee lovers.
                    </p>
                </div>
                
                <a 
                    href="https://instagram.com/your_handle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 
                                    p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform 
                                    hover:scale-105 flex flex-col items-center gap-4">
                        <FaInstagram className="text-6xl text-white" />
                        <span className="text-white font-semibold text-lg">@rny_coffeestudio</span>
                        <span className="text-white/90 text-sm">Tap to follow</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
