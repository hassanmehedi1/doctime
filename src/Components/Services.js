import React from 'react';
import "../Styles/Services.css"
import { FaHeartbeat, FaClipboardCheck, FaTooth } from "react-icons/fa";
import { ImAidKit } from "react-icons/im";


const Services = () => {
   return (
     <>
       <div>
         <h1 className="text-center title mt-5 text-lg font-semibold">
           Our Services
         </h1>
         <h2 className="text-center textSer text-5xl font-semibold">
           Services For Your Health
         </h2>
       </div>
       <div className="w-auto lg:flex gap-16 px-10 mt-6 mb-10">
         <a
           class="relative block p-8 border border-gray-100 shadow-xl rounded-xl "
           href=""
         >
           <span class="absolute right-4 top-4 rounded-full px-3 py-1.5  font-medium text-2xl heartBg">
             <FaHeartbeat />
           </span>

           <div class="mt-4 text-gray-500 sm:pr-8">
             <h5 class="mt-2 font-base textSer text-start">Cardiology</h5>

             <p class=" mt-2 text-sm sm:block mb-3">
               Check your heart condition by our best cardiologist. For your
               first check you will get 20% discount.
             </p>
             <div className="flex justify-center mt-4 md:absolute inset-x-0 bottom-0 mb-2 sm:mb-0">
               <a
                 href="/"
                 className="py-2 px-4 fi text-white font-semibold rounded-md shadow freeCon sm:text-sm lg:text-base "
               >
                 Explore Now
               </a>
             </div>
           </div>
         </a>
         <a
           class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
           href=""
         >
           <span class="absolute right-4 top-4 rounded-full px-3 py-1.5  font-medium text-2xl checkBoard">
             <FaClipboardCheck />
           </span>

           <div class="mt-4 text-gray-500 sm:pr-8">
             <h5 class="mt-2 font-base textSer text-start">Monthly Check Up</h5>

             <p class="mb-2 mt-2 text-sm sm:block ">
               Check up your body by our best doctors in the city. For your first check up
               you will get 20% discount.
             </p>
             <div className="flex justify-center mt-2 md:absolute inset-x-0 bottom-0 mb-2 sm:mb-0">
               <a
                 href="/"
                 className="py-2 px-4 fi text-white font-semibold rounded-md shadow freeCon sm:text-sm lg:text-base"
               >
                 Explore Now
               </a>
             </div>
           </div>
         </a>
         <a
           class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
           href=""
         >
           <span class="absolute right-4 top-4 rounded-full px-3 py-1.5  font-medium text-2xl tooth">
             <FaTooth />
           </span>

           <div class="mt-4 text-gray-500 sm:pr-8">
             <h5 class="mt-2 font-base textSer text-start">Dental Care</h5>

             <p class=" mt-2 text-sm sm:block">
               Check your tooth condition by our dentals. For your first
               check you will get 20% discount.
             </p>
             <div className="flex justify-center mt-2 md:absolute inset-x-0 bottom-0 mb-2 sm:mb-0">
               <a
                 href="/"
                 className="py-2 px-4 fi text-white font-semibold rounded-md shadow freeCon sm:text-sm lg:text-base"
               >
                 Explore Now
               </a>
             </div>
           </div>
         </a>
         <a
           class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
           href=""
         >
           <span class="absolute right-4 top-4 rounded-full px-3 py-1.5  font-medium text-2xl aidKit">
             <ImAidKit />
           </span>

           <div class="mt-4 text-gray-500 sm:pr-8">
             <h5 class="mt-2 font-base textSer text-start">Opthalmology</h5>

             <p class="mt-2 text-sm sm:block">
               Check your eye condition by our best eye specialist. For your
               first check you will get 20% discount.
             </p>
             <div className="flex justify-center mt-2 md:absolute inset-x-0 bottom-0 mb-2 sm:mb-2 ">
               <a
                 href="/"
                 className="py-2 px-4 fi text-white font-semibold rounded-md shadow freeCon sm:text-sm lg:text-base"
               >
                 Explore Now
               </a>
             </div>
           </div>
         </a>
       </div>
     </>
   );
};

export default Services;