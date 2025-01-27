import { Link } from "react-router-dom";

const TheFootNote = () => {
  return (
    <div className=" bg-primary-blue p-4 text-center">
      <div>
        <span className="text-lg text-main-heading-color ">
          Copyright© - {new Date().getFullYear()} | Designed and Developed by:{" "}
          <Link
            to={"https://github.com/aasiksifran17/Aasik-React-Portfolio.git"}
            target="_blank"
            className="font-normal hover:underline hover:font-semibold"
          >
            K. Mohamed Aasik
          </Link>{" "}
          ❤️
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default TheFootNote;
