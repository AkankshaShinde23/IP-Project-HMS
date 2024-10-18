import banner from "../../assets/hero.png"
import service from "../../assets/services.png"
import human1 from "../../assets/human1.jpg"
import human4 from "../../assets/human4.jpg"
import human6 from "../../assets/human6.jpg"
import doct1 from "../../assets/doct1.jpg"
import doct2 from "../../assets/doct2.jpg"
import doct3 from "../../assets/doct3.jpg"
import doct4 from "../../assets/doct4.jpg"
import doct5 from "../../assets/doct5.jpg"
import feedback from "../../assets/feedback.png"
import review from "../../assets/review.jpg"
import Footer from '../Shared/Footer';
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2";


function Home() {

    const [email , setEmail] = useState("");
    const handleNewsletter = async(e) =>{
        e.preventDefault(); 
        await axios.post("https://hmsmern.onrender.com/admin/new-letter", {email})
        .then(() =>{
            Swal.fire({
                title: "Success",
                icon: "success",
                confirmButtonText: "OK",
                text: "Thanks For Subscribing The Newletter!",
              });
        })
        .catch(() =>{
            Swal.fire({
                title: "Error",
                icon: "error",
                confirmButtonText: "OK",
                text: "Failed!",
              });
        })
    }

  return (
    <div className='bg-[#FEFAE0] '>
        <section>
            <div className='flex flex-col lg:flex-row h-screen w-screen justify-center items-center max-w-7xl m-auto'>
                <div className='flex flex-col justify-center'> 
                    <p className='text-3xl font-semibold text-center'>Welcome !</p> 
                    <p className='text-lg text-center'>To Undertake Specialized And holistic healthcare services of world standard and to provide them to all sections....</p>
                </div>
                <div className='w-full md:w-[80%] lg:w-[100%]'><img src={banner} alt="hero" className='h-[400px] shadow-black'/></div>
            </div>
        </section>

        <section>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <p className='font-semibold text-3xl'>Why Choose Us?</p>
                <div className='flex flex-col md:flex-row justify-center  items-center'>
                    <div className=' w-[350px] h-[300px] md:h-[350px] flex flex-col justify-evenly md:justify-between'>
                        <div>
                            <div className='flex justify-start  gap-2 items-center '>
                                <div className='bg-white w-12 rounded-full p-1'></div>
                                <p className='text-xl font-semibold'>Best Doctors</p>
                            </div>
                            <p className='text-sm'>Great doctors demonstrate professionalism through their ethical conduct, reliability, punctuality, and accountability</p>
                        </div>
                        <div>
                            <div className='flex justify-start gap-2 items-center'>
                                <div className='bg-white w-12 rounded-full p-1'></div>
                                <p className='text-xl font-semibold'>Better Research</p>
                            </div>
                            <p className='text-sm'>Quality in clinical research may be defined as compliance with requirements together with credibility and reliability of the data obtained.</p>
                        </div>
                    </div>
                    <div className=' md:ms-3 w-[350px] h-[250px] md:h-[350px]  flex flex-col  justify-evenly md:justify-between'>
                        <div>
                            <div className='flex justify-start  gap-2 items-center '>
                                <div className='bg-white w-12 rounded-full p-1'></div>
                                <p className='text-xl font-semibold'>Medical Staff</p>
                            </div>
                            <p className='text-sm'>Nurses are responsible for recognizing patients' symptoms, taking measures within their scope of practice to administer medications</p>
                        </div>
                        <div>
                            <div className='flex justify-start  gap-2 items-center '>
                                <div className='bg-white w-12 rounded-full p-1'></div>
                                <p className='text-xl font-semibold'>Best Doctors</p>
                            </div>
                            <p className='text-sm'>Great doctors demonstrate professionalism through their ethical conduct, reliability, punctuality, and accountability</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='h-full max-w-7xl flex flex-col m-auto justify-center items-center overflow-auto'>
                <p className='font-semibold text-3xl pt-16'>Meet Our Specialist</p>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3 '>
                        <div className="w-[270px] h-[300px] border border-gray-200 rounded-lg bg-[#D4A373] shadow flex justify-center">
                            <div className="flex flex-col items-center justify-center ">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={human1} alt=""/>
                                <h5 className="mb-1 text-xl font-medium text-black">Dr.Rahul Singh</h5>
                                <span className="text-sm text-black">Surgeon</span>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="/appointment" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Book Appointment</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-[270px] h-[300px] bg-[#D4A373] border border-gray-200 rounded-lg shadow flex justify-center">
                            <div className="flex flex-col items-center justify-center ">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={doct1} alt=""/>
                                <h5 className="mb-1 text-xl font-medium text-black">Dr.Ramesh Rajan</h5>
                                <span className="text-sm text-black">Surgeon</span>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="/appointment" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Book Appointment</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-[270px] h-[300px] bg-[#D4A373] border border-gray-200 rounded-lg shadow flex justify-center">
                            <div className="flex flex-col items-center justify-center ">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={doct3} alt=""/>
                                <h5 className="mb-1 text-xl font-medium text-black">Dr.Niranjan</h5>
                                <span className="text-sm text-black">Surgeon</span>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="/appointment" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='absolute lg:m-56 md:m-36 sm:m-24 m-20 overflow-hidden'>
                <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0 z-10 ">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="w-full md:w-2/3 lg:w-1/2">
                            <div className="mt-4">
                                <div className="mt-2 flex items-center">
                                    <div className="flex space-x-1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
                            <form className="flex lg:justify-center">
                                <div className="flex w-full max-w-md flex-col space-y-4">
                                </div>
                            </form>
                            <p className="mt-2 lg:text-center"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex h-full  max-w-7xl m-auto flex-col items-center justify-end '>
                <Footer/>
            </div>
        </section>
    </div>
  )
}

export default Home;
