import React from "react";
import "../Styles/Testimonial.css";
import boy from "../Images/Boy.png";
import left from "../Images/left.png";
import right from "../Images/right.png";
import fragment from "../Images/fragment.png";
import plus from "../Images/plus.png";

const Testimonial = () => {
  return (
    <>
      <div className="">
        <h1 className="text-xl title1 mt-52">Testimonial</h1>
        <h2 className="text-5xl font-semibold mt-4">What They Say?</h2>
      </div>

      <div className="lg:flex justify-center items-center mt-10 container mx-auto rounded-xl gap-4 mb-16">
        <div className="flex ms-auto justify-center">
          <img className="sm:mx-auto" src={left} alt="" />
        </div>
        <div class="container px-8  mx-auto border-2 rounded-lg">
          <div class="items-center lg:flex ">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-lg text-start font-semibold uppercase lg:text-xl">
                  David Jeams
                </h1>
                <h2 class="text-base text-start  font-semibold uppercase  lg:text-lg">
                  Patients
                </h2>

                <p class="mt-2 text-justify">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established fact that a reader will
                  be distracted by the readable content.
                </p>
                <img src={plus} alt="" />
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                style={{
                  backgroundImage: `url(${fragment})`,
                  backgroundRepeat: "no-repeat",
                  marginLeft: "140px",
                }}
                class="h-64 w-64"
                src={boy}
                alt="boy"
              />
            </div>
          </div>
        </div>

        <div className="flex ms-auto justify-center">
          <img src={right} alt="" />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
