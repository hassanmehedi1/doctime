import React from "react";
import "../Styles/Experince.css";
import docWalk from "../Images/docWalking.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div></div>
      <div class=" px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2 lg:mb-24" data-aos="fade-right">
            <h1 className="text-lg title1 text-start ml-2 lg:mb-10">
              16+ Years Of Experiences
            </h1>

            {/* Title  */}
            <div class="">
              <h1 class="text-2xl font-semibold lg:text-5xl text-start mb-8">
                We Always ensure Best Medical Treatment For Your Health
              </h1>
            </div>
            <div>
              <p className="text-justify">
                <span className="">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established fact that a reader will
                  be distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like.
                </span>
              </p>
            </div>
          </div>

          {/* Image Section  */}
          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            data-aos="fade-left"
          >
            <img class="w-full h-full max-w-md" src={docWalk} alt="docwalk" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
