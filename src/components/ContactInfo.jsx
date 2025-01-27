import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div
      className="space-y-5 w-full"
      data-aos="zoom-in-down"
      data-aos-duration="2000"
    >
      {/* Email */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-10 text-lg">
        <strong className="text-main-heading-color">Email Address :</strong>
        <a
          href="mailto:aasikmohamed782@gmail.com"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          aasikmohamed782@gmail.com
        </a>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-20 text-lg">
        <strong className="text-main-heading-color">LinkedIn :</strong>
        <Link
          to={"https://www.linkedin.com/in/mohamed-aasik-08348425a/"}
          target="_blank"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          Mohamed Aasik
        </Link>
      </div>

      {/* GitHub */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-24 text-lg">
        <strong className="text-main-heading-color">GitHub :</strong>
        <Link
          to={"https://github.com/aasiksifran17"}
          target="_blank"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          Aasik
        </Link>
      </div>

      {/* Contact No. */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-[58px] text-lg">
        <strong className="text-main-heading-color">Contact No :</strong>
        <a
          href="tel:+94759440067"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          +94 75 944 0067
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
