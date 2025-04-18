import SocialLinks from "../SocialLinks";
import { TypewriterEffectSmooth } from "../ui/type-writer-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
// import resume from "../../assets/docs/Aasik CV";

const HeroDetail = () => {
  return (
    <div className="bg-primary-blue px-5 md:px-20 pt-28 pb-28">
      <div className="md:flex gap-20 justify-between mt-12 md:mt-28">
        {/* Hero Details */}
        <div className="mb-10 sm:mb-5 md:mt-10">
          <TypewriterEffectSmooth
            words={[
              {
                text: "Hello, It's me",
                className: "tracking-wider text-main-heading-color text-base",
              },
            ]}
            margin={"mb-2"}
          />

          {/* Name: Mohamed Aasik */}
          <TypewriterEffectSmooth
            color="text-main-heading-color"
            words={[
              { text: "Mohamed", className: "text-3xl sm:text-4xl" },
              { text: "Aasik", className: "text-3xl sm:text-4xl" },
            ]}
            margin={"mb-3"}
            cursorColor={"bg-aqua-color"}
          />

          

          {/* And I'm a Passionate Full Stack Web Developer */}
          <div className="mb-3" data-aos="fade-right" data-aos-duration="3000">
            <span className=" text-main-heading-color text-xl sm:text-2xl font-semibold">
              And I&apos;m a{" "}
              <span className="text-aqua-color">
                Passionate Full Stack Web Developer
              </span>
            </span>
          </div>

          <div className="mb-5">
            <TextGenerateEffect
              words={`I am interested in working on challenging web-based applications
              or projects, as well as utilizing my development knowledge to
              provide solutions for clients.`}
              className={"text-secondary-font-color"}
            />
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Download Button */}
          <Link
            to={"https://flowcv.com/resume/tl9wwg36sw"}
            data-aos="fade-right"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center transition-all sm:justify-normal rounded-full sm:rounded-md items-center mt-5 text-aqua-color gap-2 sm:w-[220px] border-2 border-aqua-color px-5 py-2 hover:bg-aqua-color hover:text-primary-blue hover:font-semibold"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.13em"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32M144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3"
                ></path>
              </svg>
            </div>
            Explore Resume
          </Link>
        </div>

        {/* Hero Image */}
        <div>
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="w-[250px] h-[250px] mx-auto md:h-[300px] md:w-[300px] rounded-full border-4 border-aqua-color"
          >
            <img
              src={`${`https://github.com/aasiksifran17`}.png`}
              alt="Aasik Image / Mohamed Aasik Image"
              className=" h-full w-full object-cover rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
