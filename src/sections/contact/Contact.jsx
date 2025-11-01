import React, {useState} from 'react'
import { FaInstagram } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // ... your email logic
    };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-20 bg-white">
      
      {/* Simple Header */}
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      {/* Centered Form - Simpler */}
      <div className="w-full max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <input
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 py-3 px-0 focus:outline-none focus:border-gray-900 transition bg-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 py-3 px-0 focus:outline-none focus:border-gray-900 transition bg-transparent" 
              placeholder="your@email.com"
            />
          </div>

          <div>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full border-b-2 border-gray-200 py-3 px-0 focus:outline-none focus:border-gray-900 transition bg-transparent resize-none"
              rows="4"
              placeholder="Your message..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gray-900 text-white py-4 hover:bg-gray-800 transition font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Simple Instagram Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Follow us on Instagram</p>
          <a 
            href="https://instagram.com/your_handle" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition"
          >
            <FaInstagram className="text-2xl" />
            <span className="font-medium">@rny_coffeestudio</span>
          </a>
        </div>
      </div>
    </div>
  )
}