import React from 'react'
import boy1 from '../assets/boy1.jpg'
import { FaDownload } from 'react-icons/fa';
function Content() {

  return (

    // <section className='flex flex-col md:flex-row  px-5 py-32 bg-primary justify-center'>
    //     <h1 className=' md:w-1/2 text-white text-6xl font-content-font '>Hi,<br/>Im <span className='text-black'>S</span> Hasma Shruthi 
    //     <p className='text-2xl'>{config.subtitle}</p>
    //     </h1>
    //     <img className='md:w-1/6 'src={girl1}/>
    // </section>


    <div className='min-h-screen bg-black text-white text-center py-8'>
      <br />
      <br />
      <br />
      <img src={boy1} alt="" className='mx-auto mb-8 w-40 h-40 rounded-full object-cover border-2 border-green-300 transform transition-tranform 
    duration-300 hover:scale-110'/>
      <h1 className='text-2xl font-bold'>Hi! I'm{" "}
        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500'>Pradeep Srinivasan</span> 👋🏻 <br /><br />
        <span className='text-4xl italic'> Full-Stack Developer & Entrepreneur</span></h1>
      <p className='mt-4 text-lg text-gray-300'>I excel in building responsive web application with MERN stack and optimising business operations</p>

      <div className='mt-8 space-x-4'>
        <a href="https://drive.google.com/file/d/1PRsEXjsRwLLE-Jz-AAlYITNh3EBiOQkL/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button
            className="bg-gradient-to-r from-green-400 to-green-500 text-black inline-flex 
        items-center justify-center transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full "
          >   Resume <FaDownload className="ml-2" />
          </button>
        </a>

      </div>

    </div>
  )
}


export default Content