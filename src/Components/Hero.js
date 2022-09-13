import React from 'react';
import docHero from '../Images/dochero.png'
import docCircle from '../Images/circle.png'
import "../Styles/Hero.css"
import { BsCheckCircle } from "react-icons/bs";

const Hero = () => {
   return (
     <>
       <div className="lg:px-6 xl:px-0">
         <div className="mx-auto container relative z-0 px-4 xl:px-0">
           <div className="flex flex-col-reverse md:flex-row ">
             <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
               <h1 className="text-xl lg:text-3xl xl:text-6xl font-semibold text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
                 Your <span className="health">Health</span> Is Our Top
                 <span className="priority"> Priority</span>
               </h1>
               <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">
                 Do you want to control your expenses and be always aware of how
                 much money you have spent?{" "}
               </h2>
               <div className="flex justify-start">
                 <a
                   href="/"
                   className="py-3 px-4 text-white font-semibold rounded-md shadow freeCon"
                 >
                   Meet Our Specialist
                 </a>
               </div>
               <div className="flex md:justify-end mt-3">
                 <p className="py-3 px-4 text-white font-semibold rounded-md shadow regCheck flex justify-center items-center">
                   <BsCheckCircle className="mr-3 regCheck" /> Regular Checkup
                 </p>
               </div>
               <div className="flex justify-start md:gap-20 sm:gap-10 mt-4 ">
                 <div>
                   <p className="font-bold text-2xl priority">262k</p>
                   <p>Recovered Patients</p>
                 </div>
                 <div>
                   <p className="font-bold text-2xl priority">96%</p>
                   <p>Satisfaction Rate</p>
                 </div>
                 <div>
                   <p className="font-bold text-2xl priority">86+</p>
                   <p>Expert Doctors</p>
                 </div>
               </div>
             </div>
             <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center bg-[url('../Images/circle.png)] bg-fixed bg-center bg-no-repeat bg-cover zInImg">
               <img
                 className="md:absolute md:w-1/2 md:-ml-28"
                 src={docHero}
                 alt
               />
               <div>
                 <img src={docCircle} alt="" />
               </div>
             </div>
           </div>
         </div>
         <div className="flex lg:justify-end xl:justify-end lg:-mt-72 zInCard sm:justify-center">
           <div class="w-full max-w-sm px-4 py-3 rounded-md shadow-md border-2 mt-5 grid bg-white ">
             <div class="flex items-center justify-between mb-2 font-semibold">
               <span class="">Meet Our Doctors</span>
             </div>
             <div className="flex flex-col items-center justify-center">
               <div className="flex -space-x-4">
                 <img
                   alt=""
                   className="w-12 h-12 border rounded-full "
                   src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600"
                 />
                 <img
                   alt=""
                   className="w-12 h-12 border rounded-full "
                   src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg"
                 />
                 <img
                   alt=""
                   className="w-12 h-12 border rounded-full "
                   src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg"
                 />
                 <img
                   alt=""
                   className="w-12 h-12 border rounded-full "
                   src="https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?size=626&ext=jpg"
                 />
                 <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full text-4xl plusBg text-white font-semibold">
                   +
                 </span>
               </div>
             </div>
             <div class="h-12 mt-2 rounded-full bg-gradient-to-r from-blue-400 "></div>
             <div class="h-12 mt-2 rounded-full bg-gradient-to-r from-blue-200 "></div>
           </div>
         </div>
       </div>
     </>
   );
};

export default Hero;