// pages/testimonials.js

import Image from 'next/image'
import React from 'react'

const testimonials = [
  {
    name: 'John Doe',
    occupation: 'Software Engineer',
    comment: 'This is a great service! It has helped me land my dream job.',
    image: '/student.png'  // replace with actual image paths
  },
  {
    name: 'Jane Doe',
    occupation: 'Product Manager',
    comment: 'I love using this app! It has improved my interview skills tremendously.',
    image: '/student.png'
  },
  {
    name: 'Alex Smith',
    occupation: 'UX Designer',
    comment: 'This service is a game changer! I highly recommend it.',
    image: '/student.png'
  },
  {
    name: 'Alice Johnson',
    occupation: 'Data Analyst',
    comment: 'The interview practice sets are incredibly useful. They have boosted my confidence.',
    image: '/student.png'
  },
  {
    name: 'Charlie Brown',
    occupation: 'DevOps Engineer',
    comment: 'A must-use for anyone looking to improve their interview skills. I have received so many job offers thanks to this service.',
    image: '/student.png'
  }
]

export default function Testimonials() {
    return (
      <div className="bg-gray-100  px-4 ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6  lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block text-black">What people are saying </span>
          </h2>
          <div className="text-black mt-4 flex flex-col sm:flex-row justify-between lg:space-x-4">  {/* Add this */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mt-4 w-full max-w-sm mx-auto sm:max-w-none sm:w-full sm:mx-0">
                <div className="border border-blue border-solid bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="px-4 py-5 sm:px-6">
                    <p className="text-lg leading-6 font-medium text-gray-900">{testimonial.comment}</p>
                  </div>
                  <div className=" px-4 py-2 sm:px-6">
                    <Image className="h-10 w-10 rounded-full" src={testimonial.image} alt={testimonial.name} width={200} height={200} />
                    <p className="text-sm leading-5 font-medium text-indigo-600">{testimonial.name}</p>
                    <p className="text-sm leading-5 font-bold text-black">{testimonial.occupation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

