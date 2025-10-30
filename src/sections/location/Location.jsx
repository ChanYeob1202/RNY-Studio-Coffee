import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";




export default function Location() {

    const informations = [
        { name: "Address", detail: "3829 W 6th St, Los Angeles, CA 90020", icon: <MdLocationOn /> },
        { 
            name: "Hours",   
            detail: [
            "Mon-Fri: 7am - 10pm",
            "Sat: 8am - 10pm",
            "Sun: 8am - 7pm"
            ], 
            icon: <IoTime /> 
        },
        { name: "Contact", detail: "(213) 908-5141", icon: <MdOutlinePhone />}
    ]



  return (
    <div className = "w-full flex flex-col justify-center items-center bg-gray-100">
        <div className = "flex flex-col justify-center items-center mt-20 mb-10 gap-4">
            <h1 className = "text-2xl md:text-xl sm:text-lg">Visit Us</h1>
            <p className = "text-gray-600 text-center px-4 max-w-3xl">We're located in the heart of Korea town. Stop by for a cup of coffee and stay for the atmosphere</p>
        </div>

        <div className = "w-full px-4">
            <div className = "grid grid-cols-1 md:grid-cols-3 mx-auto items-stretch justify-center max-w-6xl px-4 gap-4">
                {informations.map((info, index) => (
                    <div key = {index} className = "h-full rounded-3xl py-6 flex flex-col items-center text-center gap-4 bg-white">
                        <div className = "bg-gray-800 p-2 rounded-full text-white sm:text-xl md:text-2xl lg:text-3xl">
                            {info.icon}
                        </div>
                        <div>{info.name}</div>
                        <div className="text-gray-600 text-sm md:text-base">
                            {Array.isArray(info.detail) ? (
                                info.detail.map((line, i) => <div key={i}>{line}</div>)
                            ) : (
                                info.detail
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className = "flex justify-center mt-10">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.219567833916!2d-118.30631969999997!3d34.063885299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b97348612e85%3A0xd91400aefaf5b6ef!2sRNY Coffee Studio!5e0!3m2!1sen!2sus!4v1761447499199!5m2!1sen!2sus" 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full max-w-4xl h-64 md:h-96 lg:h-[450px] rounded-lg border-0 mb-10"
                />
            </div>
        </div>


    </div>
  )
}
