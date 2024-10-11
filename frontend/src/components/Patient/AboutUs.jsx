import React, { useState } from 'react'
import Navbar from '../Shared/Navbar'
import banner from '../../assets/AboutUs.jpg'
import slide1 from '../../assets/slide2.jpg'
import slide2 from '../../assets/slide3.jpg'
import slide3 from '../../assets/slide4.jpg'
import slide4 from '../../assets/slide5.jpg'
import {motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
function AboutUs() {

  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  const slideImages = [slide1 , slide2 , slide3 , slide4];
  let [current , setCurrent] = useState(0);

  let prevSlide = ()=>{
    if(current==0) setCurrent(slideImages.length -1)
    else setCurrent(current-1);
  }
  let nextSlide = ()=>{
    if(current==slideImages.length -1) setCurrent(0)
    else setCurrent(current+1);
  }

  return (
    <>
    <Navbar/>
    <section  
    
    className='pt-[80px] bg-[#FEFAE0]'>    
      <motion.div
      ref={ref}
      initial={{ opacity: 0 }} 
      animate={{ opacity: inView ? 1 : 0 }} 
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
       className='h-screen w-screen '>
        <img src={banner} alt="banner" className='' style={{ marginLeft: '370px' }} />
        <div className='z-10 bottom-0 hidden lg:block lg:left-32 py-4 rounded-t-lg lg:w-[400px] text-center bg-[#FAEDCD] absolute '>
          <p className='font-semibold text-3xl'>About LifeLine</p>
        </div>
      </motion.div>
    
    
    </section>
    <section  
    
    className=' bg-[#FEFAE0] pt-5'>
    <motion.div
    ref={ref}
    initial={{ opacity: 0 }} 
    animate={{ opacity: inView ? 1 : 0 }} 
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1 }}
     className='h-screen max-w-7xl flex flex-col m-auto justify-center text-justify gap-1'>
        <p className='text-2xl font-semibold'>Background</p>
        <p className='text-lg'>LifeLine is a quaternary care hospital network offering end-to-end healthcare services, right from primary to quaternary care in India and Middle-east. LifeLine Hospital is owned and managed by M/s LifeLine Health Care Management Limited, a public limited company incorporated under the Companies Act, 1956 with an objective to provide world-class affordable healthcare services the Company commenced its operations in the year 1999. Currently, the Company is in the business of delivering quality healthcare services through a wide network of multi-specialty hospitals, which provide healthcare to its guests.

        </p>
        <p className='text-lg hidden lg:block'>In addition to this, the Blood Center is also accredited by NABH and the laboratory is NABL (National Accreditation Board for Testing and Calibration of Laboratories) accredited.
          Thus, LifeLine touches upon all aspects of wellness and healthcare, with a fine fusion of cardinal principles of holistic care and hospitality with the three-pronged approach of courtesy, compassion, and competence</p>
      </motion.div>
    </section>
    <section  
    
    
    className=' bg-[#FEFAE0] lg:pt-5'>
    <motion.div ref={ref}
        initial={{ opacity: 0 }} 
        animate={{ opacity: inView ? 1 : 0 }} 
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
         className='h-screen max-w-7xl flex flex-col m-auto justify-center text-justify gap-1'>
        </motion.div>
    </section>
    <section  
    
    
    className='bg-[#FEFAE0] '>
      <motion.div  
      ref={ref}
      initial={{ opacity: 0 }} 
      animate={{ opacity: inView ? 1 : 0 }} 
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='max-w-7xl m-auto h-full flex flex-col justify-center items-center gap-3  '>
        
       
        <div className='absolute  w-[59%] h-full flex justify-between items-center pt-5'>
          <button 
          onClick={prevSlide}
          className='bg-black rounded-full p-1 ms-1 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-10' viewBox="0 0 24 24" fill="white"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
          </button>
          <button 
          onClick={nextSlide}
          className='bg-black rounded-full p-1 me-2 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='size-10' fill="white"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
          </button>
        </div>
      </motion.div>
    </section>
    
    </>
  )
}

export default AboutUs