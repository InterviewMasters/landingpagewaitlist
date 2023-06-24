'use client'

import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')

  return (
    <div className="flex flex-col sm:flex-row items-center mt-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2 border border-primary-bg text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-72"
      />
      <button
        type="button"
        className="px-3 ml-0 sm:ml-3 mt-3 sm:mt-0 py-2 bg-primary-bg text-white font-medium rounded-md w-full sm:w-auto"
      >
        Join Waitlist
      </button>
    </div>
  )
}
