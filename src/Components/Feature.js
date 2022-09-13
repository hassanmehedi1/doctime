import React from 'react';
import docJump from "../Images/docJump.png";
import support from "../Images/support.png";
import chat from "../Images/chat.png";
import nature from "../Images/nature.png";
import clock from "../Images/clock.png";


const Feature = () => {
   return (
     <>
       <div class=" px-6 py-16 mx-auto">
         <div class="items-center lg:flex">
           <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
             <img class="w-full h-full max-w-md" src={docJump} alt="docwalk" />
           </div>

            {/* Title  */}
           <div class="w-full lg:w-1/2 lg:mb-24">
             <h1 className="text-lg title1 text-start ml-2 lg:mb-10">
               Our Hospital Features
             </h1>
             <div class="">
               <h1 class="text-2xl font-semibold lg:text-5xl text-start mb-8">
                 Make An Appointment Easy And Fast Services
               </h1>
             </div>

             {/* Cards Section Start  */}

             <div className="w-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-8 px-10 mt-6 mb-10">
               <a
                 class="relative block p-8 border border-gray-100 shadow-xl rounded-xl "
                 href="/"
               >
                 <span class="absolute right-2 top-2 rounded-full px-3 py-1.5  font-medium text-2xl heartBg">
                   {/* <FaHeartbeat />  */}
                   <img className='' src={support} alt="" />
                 </span>

                 <div class="mt-4 text-gray-500 sm:pr-8">
                   <h5 class="mt-2 font-base textSer text-start">
                     24 Hours Doctor Support
                   </h5>

                   <p class="hidden mt-2 text-justify text-sm sm:block mb-3">
                     Check your heart condition by our best cardiologist. For
                     your first check you will get 20% discount.
                   </p>
                 </div>
               </a>
               <a
                 class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                 href="/"
               >
                 <span class="absolute right-2 top-2 rounded-full px-3 py-1.5  font-medium text-2xl checkBoard">
                   {/* <FaClipboardCheck />  */}
                   <img src={chat} alt="" />
                 </span>

                 <div class="mt-4 text-gray-500 sm:pr-8">
                   <h5 class="mt-2 font-base textSer text-start">
                     Exclusive Supports
                   </h5>

                   <p class="mb-2 mt-2 text-sm sm:block text-justify">
                     Check up your body by our best doctors in the city. For
                     your first check up you will get 20% discount.
                   </p>
                 </div>
               </a>
               <a
                 class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                 href="/"
               >
                 <span class="absolute right-2 top-2 rounded-full px-3 py-1.5  font-medium text-2xl tooth">
                   {/* <FaTooth />  */}
                   <img src={nature} alt="" />
                 </span>

                 <div class="mt-4 text-gray-500 sm:pr-8">
                   <h5 class="mt-2 font-base textSer text-start">
                     Friendly Environment
                   </h5>

                   <p class="hidden mt-2 text-sm sm:block text-justify">
                     Check your tooth condition by our best dentals. For your
                     first check you will get 20% discount.
                   </p>
                 </div>
               </a>
               <a
                 class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                 href="/"
               >
                 <span class="absolute right-2 top-2 rounded-full px-3 py-1.5  font-medium text-2xl aidKit">
                   {/* <ImAidKit />  */}
                   <img src={clock} alt="" />
                 </span>

                 <div class="mt-4 text-gray-500 sm:pr-8">
                   <h5 class="mt-2 font-base textSer text-start">
                     24 Hours Nurse Support
                   </h5>

                   <p class="hidden mt-2 text-sm sm:block text-justify">
                     Check your eye condition by our best eye specialist. For
                     your first check you will get 20% discount.
                   </p>
                 </div>
               </a>
             </div>
           </div>
         </div>
       </div>
     </>
   );
};

export default Feature;