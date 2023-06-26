'use client'
import { FC, useState, FormEvent } from 'react'

interface EmailFormProps {
  buttonText: string;
  list: "waitlist" | "newsletter";
}

const EmailForm: FC<EmailFormProps> = ({ buttonText, list }) => {
  const [email, setEmail] = useState<string>('')
  const [status, setStatus] = useState<string>('') // Add this

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
        list
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // handle result

    // Check if the submission was successful or not
    if (res.status === 200) {
      setStatus('success')
    } else {
      setStatus('error')
    }

    // Clear the email input field
    setEmail('');
  }

  const handleCloseBanner = () => {
    setStatus('');
  }

  return (
    <div className="form-container">
      {status === 'success' && 
        <div className="bg-blue text-white p-2 rounded-md mb-2 flex justify-between items-center">
          <div className="flex-grow flex justify-center">
            <span>Thank you! Look forward to an email from us.</span>
          </div>
          <span onClick={handleCloseBanner} className="cursor-pointer ml-2 text-lg font-bold">X</span>
        </div>
      }
      {status === 'error' && 
        <div className="bg-coral text-white text-center p-2 rounded-md mb-2 mt-4 flex justify-between items-center">
          <div className="flex-grow flex justify-center">
            <span>Invalid Email</span>
          </div>
          <span onClick={handleCloseBanner} className="cursor-pointer ml-2 text-lg font-bold">X</span>
        </div>
      }
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border border-primary-bg text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-72"
        />
        <button
          type="submit"
          className="px-3 ml-0 sm:ml-3 mt-3 sm:mt-0 py-2 bg-primary-bg text-white font-medium rounded-md w-full sm:w-auto"
        >
          {buttonText}
        </button>
      </form>
    </div>
  )
}

export default EmailForm;
