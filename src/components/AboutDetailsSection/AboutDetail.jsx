import React from "react";
import { Link } from "react-router-dom";

const AboutDetail = () => {
  return (
    <div className="px-5 md:px-20 py-20 bg-secondary-font-color" id="about">
      {/* About Heading */}
      <h4
        className="text-3xl text-center md:text-left font-semibold text-primary-blue mb-5"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        About
      </h4>

      <div>
        <p
          className=" text-justify text-sm sm:text-lg text-[#222f44]"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          A Dedicated and Creative Web Designer and Developer with 06 months of
          Experience in Conceptualing, Designing, and Implementing visually
          applealing and User-friendly websites. Proficient in{" "}
          <Link
            to={
              "https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,Web%20Consortium%20(W3C)%20recommendation."
            }
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            HTML,
          </Link>{" "}
          <Link
            to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            CSS,
          </Link>{" "}
          <Link
            to={
              "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
            }
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            JavaScript
          </Link>{" "}
          and{" "}
          <Link
            to={
              "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
            }
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            Responsive Designs
          </Link>
          . Learn in{" "}
          <Link
            to={"https://www.coursera.org/articles/mern-stack"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            MERN
          </Link>{" "}
          stack such as{" "}
          <Link
            to={"https://www.mongodb.com/"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            MongoDB
          </Link>
          ,{" "}
          <Link
            to={
              "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"
            }
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            Express.js,
          </Link>{" "}
          <Link
            to={"https://react.dev/"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            React.js,
          </Link>{" "}
          <Link
            to={"https://www.w3schools.com/nodejs/nodejs_intro.asp"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            Node.js
          </Link>{" "}
          and Other stacks such as{" "}
          <Link
            to={"https://nextjs.org/"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            Next.js,
          </Link>
          <Link
            to={"https://vuejs.org/"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            {" "}
            Vue.js{" "}
          </Link>{" "}
          and{" "}
          <Link
            to={"https://laravel.com/"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            Laravel
          </Link>{" "}
          <Link
            to={"https://www.php.net/manual/en/intro-whatis.php"}
            target="_blank"
            className=" text-primary-blue hover:underline font-semibold"
          >
            (PHP)
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutDetail;
