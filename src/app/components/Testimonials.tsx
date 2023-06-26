// pages/testimonials.js

import Image from 'next/image'
import React from 'react'

const testimonials = [
  {
    name: 'Lawrence Fauntleroy',
    occupation: 'Director of Alumni(Lehman College)',
    comment: 'This is a great platform! incorporating alumni is the icing on the cake!',
    image: '/lawrence.jpeg'  // replace with actual image paths
  },
  {
    name: 'Yolanda Rodriguez',
    occupation: 'Associate Director of Career Services(CUNY Journalism)',
    comment: 'A lot of students can benefit practicing interview questions.',
    image: '/yolanda.jpg'
  },
  {
    name: 'Jessica Perez',
    occupation: 'Director of Career & Professional Development(CUNY Laguardia)',
    comment: 'Would love to see how we could use this at Laguardia.',
    image: '/avatar.jpg'
  },
  {
    name: 'Rokiatou Kaba',
    occupation: 'Student',
    comment: 'I would definitely use this platform if my school had it.',
    image: '/rokiatou.jpeg'
  },
  {
    name: 'Jacob Smith',
    occupation: 'Student',
    comment: 'really looking forward to practicing, I really need the extra help.',
    image: '/avatar.jpg'
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

