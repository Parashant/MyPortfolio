import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Contact() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [phoneError, setPhoneError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number to be exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Please enter a valid phone number...');
      return;
    }

    setPhoneError(''); // Clear error if valid
    setIsLoading(true); // Set loading state

    const contactData = {
      name,
      phone,
      message,
    };

    try {
      const response = await axios.post('https://myportfoliobackend-1974.onrender.com/api/postmessage', contactData);
      
      if (response) {
          setUploadStatus('success'); // Set success status
        // Clear form fields
        setName('');
        setPhone('');
        setMessage('');
      } else {
        setUploadStatus('error');
      }
       // Make the success message disappear after 5 seconds
       setTimeout(() => {
        setUploadStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error submitting data:', error);
      setUploadStatus('error');

      // Make the error message disappear after 5 seconds
      setTimeout(() => {
        setUploadStatus(null);
      }, 5000);
    } finally {
      setIsLoading(false); // Reset loading state   

    }
  };


  return (

    <div class="relative flex items-top justify-center  ">
        <div class="min-w-full mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 overflow-hidden">

                    
            <div class=" lg:grid grid-cols-1 lg:grid-cols-2">
                <div class="p-6 mr-2  sm:rounded-lg">
                   <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={.8}> 
                    <h1 class="text-7xl text-cyan-400 sm:text-center lg:text-start  font-extrabold tracking-tight">
                        Get in touch
                    </h1>
                       </ScrollAnimation>
                    <p class="text-normal sm:text-center lg:text-start text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                        Fill in the form to start a conversation
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    </div>
                    <div className=' sm:grid  sm:grid-cols-2 sm:pl-10 lg:pl-0 lg:grid-cols-1 '>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40 hover:text-cyan-400">
                            +91 7480983310
                        </div>
                    </div>
                  
                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            <div className='hover:text-cyan-400'>parashantkr28062001@gmail.com</div>
                        </div>
                    </div>
                    
                </div>

<div className="text-center md:text-left sm:grid sm:justify-center lg:justify-start md:max-w-[100%]  lg:pt-0">
   <div className="mt-8 lg:ml-10 flex justify-center md:justify-start space-x-4">
   <a
        href="https://www.linkedin.com/in/parashant-kumar-056b332b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center  justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
      >
        <i className="bx bxl-linkedin bx-md"></i>
      </a>


      <a
        href="https://github.com/Parashant"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
      >
        <i className="bx bxl-github bx-md"></i>
      </a>
      <a
  href="/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 p-1 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition group"
>
  <svg
    xmlns="/"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    id="Leetcode"
    className="w-8 h-8"
  >
    <path
      d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
      className="fill-current text-[#26c6da] group-hover:text-black transition-colors"
    ></path>
    <path
      d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
      className="fill-current text-[#26c6da] group-hover:text-black transition-colors"
    ></path>
  </svg>
</a>
     

         <a
        href="https://www.youtube.com/@JOKESFUNPOINTFILMS"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
      >
        <i className="bx bxl-youtube bx-md"></i>
      </a>

      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
      >
        <i class='bx bxl-twitter bx-md'></i>
      </a>
  
          </div>
          <a
          href="https://drive.google.com/file/d/1__J2phFznb1RfwsRciFY1pwKDhVirBfW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block lg:ml-10 mt-6 lg:text-sm sm:text-2xl text-center  px-4 py-2 md:px-6 md:py-3 bg-[#0ef] text-[#081b29] font-semibold shadow-2xl rounded-full hover:shadow-[10px_5px_60px_25px_rgba(0,255,255,0.4)] transition"
        >
          Download Resume
        </a>
        </div>
 </div>


                    <form action="https://fabform.io/f/xxxxx" method="post" class="p-6 flex flex-col justify-center" onSubmit={handleSubmit} >
                        <div class="flex flex-col">
                            <label for="name" class="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" 
                            class="w-100 mt-2 py-3 px-3 sm:text-3xl lg:text-lg rounded-lg bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-cyan-400 focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/>
                        </div>
    
                        <div class="flex flex-col mt-5">
                            <label for="phone" class="hidden">Phone No.</label>
                            <input type="number" name="phone" id="phone" placeholder="Phone No. [ 10 digits ]" 
                            class="w-100 mt-2 py-3 px-3 sm:text-3xl lg:text-lg rounded-lg  bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-cyan-400 focus:outline-none"
                            value={phone}
                            onChange={(e) => {
                              const value = e.target.value;
                              // Allow only digits and limit input to 10 characters
                              if (/^\d{0,10}$/.test(value)) {
                                setPhone(value);
                                if (value.length === 10) {
                                  setPhoneError(''); // Clear error when 10 digits are entered
                                }
                              }
                            }}
                             required/>
                            {phoneError && <p className="mt-6 text-center text-red-600 sm:text-2xl lg:text-xl font-semibold">{phoneError}</p>}
                        </div>
    
                        <div class="flex flex-col mt-5 mb-10">
                            <label for="message" class="hidden">Message</label>
                            <textarea name="message" id="message" placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            class="w-100 sm:h-48 lg:h-32 mt-2 py-3 px-3 sm:text-3xl lg:text-lg rounded-lg bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-cyan-400 focus:outline-none"></textarea>
                        </div>
                        {uploadStatus === 'success' && (
                          <div className="mt-6 text-center text-green-600 sm:text-2xl lg:text-xl font-semibold">
                               Successfully send !!!
                             </div>
                             )}
                      {uploadStatus === 'error' && (
                         <div className="mt-6 text-center text-red-600 sm:text-2xl lg:text-xl font-semibold">
                              Failed to send your message...
                         </div>
                          )}
    
                        <button type='submit'
                        disabled={isLoading} 
                            class="text-black bg-cyan-400 hover:bg-cyan-700 tracking-wide rounded-lg lg:text-xl sm:text-4xl font-bold px-4 py-3 flex items-center justify-center w-full !mt-6">
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                       
                    </form>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
