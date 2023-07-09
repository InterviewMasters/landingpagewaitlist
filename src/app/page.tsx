import EmailForm from '../app/components/EmailForm'
import Image from 'next/image'
import Testimonials from './components/Testimonials'
import { useCallback } from 'react';





export default function Home() {

  return (
    <main className='overflow-x-hidden'>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <h1 className="text-3xl lg:text-7xl mt-8 text-blue font-extrabold text-center">InterviewMaster</h1>
        <h3 className="text-2xl text-black font-medium text-center mt-4  max-w-xl lg:max-w-3xl xl:max-w-xl">Building student interview skills with the help of <span className='font-extrabold text-coral'>AI & College Alumni</span></h3>
        <EmailForm buttonText="Join Waitlist" list="waitlist" />
        <h2 className="text-2xl text-black font-bold text-center mt-8">What is <span className='text-blue'>InterviewMaster</span>?</h2>
        <h3 className="text-xl text-black font-medium text-center mt-2 max-w-md lg:max-w-xl xl:max-w-2xl">InterviewMaster is a groundbreaking tool that harnesses the power of <span className='font-extrabold text-coral'>AI</span> and the experience of <span className='font-extrabold text-coral'>alumni</span> to prepare students for job interviews and creating a new way for colleges to engage and keep <span className='font-extrabold text-coral'>connections</span> with their alumni.</h3>
        <div className="flex justify-center items-center w-screen h-52 bg-primary-bg mt-8">
          <p className="text-center text-white text-xl font-bold lg:text-4xl max-w-md lg:max-w-lg xl:max-w-5xl">At InterviewMaster, were not just improving interview skills; were shaping future professionals.</p>
        </div>
        <h2 className='text-black font-extrabold text-2xl lg:text-3xl mt-8 mb-8'>Join our waitlist today and experience:</h2>
      <div className='flex flex-col lg:flex-row gap-4 items-center lg:text-xl'>
    <div className="order-last text-left">
      <Image  src='/student.png' alt={'smiling student vector'} width={350} height={200} />
    </div>
    <div className='max-w-md lg:max-w-xl xl:max-w-2xl order-first lg:order-first'>
      <h2 className='text-xl font-semibold text-blue lg:max-w-md  lg:text-3xl mb-6'>Refined Interview Skills: Elevate Your Success</h2>
      <p className='text-black lg:max-w-xl'>
      Our cutting-edge platform uses the power of <span className='font-extrabold text-coral'>AI</span> to offer personalized guidance that elevates students resume and refines their responses. This is not a one-size-fits-all solution; our platform adapts to students, providing tailored strategies that emphasize students unique strengths and experiences.</p>
    </div>
  </div>

  <div className='flex flex-col lg:flex-row gap-4 items-center lg:text-xl mt-4'>
    <div className="order-last lg:order-first text-left">
      <Image src='/mockInterview.png' alt={'smiling student vector'} width={400} height={200} />
    </div>
    <div className='max-w-md lg:max-w-xl xl:max-w-2xl order-first lg:order-last'>
      <h2 className='text-xl lg:ml-40 font-semibold text-blue lg:text-3xl mb-4'>Real World Simulation</h2>
      <p className='text-black lg:ml-40'>
      Through our engaging and interactive mock interviews, students can connect with successful <span className='font-extrabold text-coral'>Alumni</span> from their respective fields, gaining insights, guidance, and firsthand experience from those who have carved successful paths in the professional world.
</p>
    </div>
  </div>

  <div className='flex flex-col lg:flex-row gap-4 items-center lg:text-xl mt-4'>
    <div className="order-last text-left">
      <Image src='/alumniNetwork.png' alt={'smiling student vector'} width={400} height={200} />
    </div>
    <div className='max-w-md lg:max-w-xl xl:max-w-2xl order-first lg:order-first'>
      <h2 className='text-xl font-semibold text-blue lg:text-3xl mb-4'>Networking opportunities</h2>
      <p className='text-black lg:mr-40 '>
      At InterviewMaster, we believe in the power of <span className='font-extrabold text-coral'>connections</span>, in the strength of networks, and in the inspiring potential of those who have walked the path of success. We have created a unique platform that offers colleges a revolutionary way to stay engaged with their alumni, while also providing a valuable networking opportunity for their students.      </p>
    </div>
  </div>
<Testimonials/>
<div className="flex flex-col items-center justify-center text-black mb-8">
        <h2 className="text-2xl font-medium mb-2">Seeking educational innovation? As a faculty member, experience our exclusive demo today!</h2>
        <p className="text-gray-600 mb-4">Click below for demo</p>
        <a href="https://calendly.com/alhouseny/30min" target="_blank" rel="noopener noreferrer" className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
          Schedule demo
        </a>
    </div>
    <div className="flex flex-col items-center justify-center text-black">
        <h2 className="text-2xl font-medium mb-2">Student-driven change starts with you. Bring InterviewMaster to your school today!</h2>
        <p className="text-gray-600 mb-4">Click below to recommend us!</p>
        <a href="https://forms.gle/k7KhBCxYxQMHs8f88" target="_blank" rel="noopener noreferrer" className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
          I want this!
        </a>
    </div>
    <div className="flex flex-col items-center justify-center text-black mt-8">
        <h2 className="text-md font-medium mb-2">Sign up for our news letter to stay up to date and know when we officially launch!</h2>
        <EmailForm buttonText="Sign up" list="newsletter" />
    </div>
  <footer className='flex justify-center py-8 text-black'>@ 2023 all rights reserved.</footer>
</div>
 </main>
  )
}
