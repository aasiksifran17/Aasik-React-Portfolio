import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TheTaskInfoCard = ({
  description,
  githubUrl,
  imgUrl,
  liveUrl,
  techStacks,
  title,
  type,
  projectType,
}) => {
  return (
    <div
      className="z-0 relative w-full md:max-w-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      data-aos="zoom-out-up"
      data-aos-duration="1000"
    >
      <div className="z-0 relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src={imgUrl}
          className=" w-full h-[300px] object-cover"
          alt={`${title}'s Screenshot`}
        />
      </div>

      <div className="p-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-Sen text-xl antialiased font-extrabold leading-snug tracking-normal text-primary-blue">
            {title}
          </h5>
        </div>

        {/* Description */}
        <p className="block font-Sen text-base antialiased font-light leading-relaxed text-gray-700">
          {description}
        </p>

        {/* Tech Stacks */}
        <div className="mt-3">
          <div className="mb-2">
            <strong className="text-primary-blue">
              Category:{" "}
              <span className="text-[#3a4659]">
                {type == "F"
                  ? "Frontend."
                  : type == "B"
                  ? "Backend."
                  : type == "F&B"
                  ? "Frontend and Backend."
                  : "Sorry! Invalid Criteria."}
              </span>
            </strong>
          </div>
          <div className="mb-2 text-primary-blue">
            <strong>
              Project Purpose:{" "}
              <span className="text-[#3a4659]">
                {projectType == "cdn"
                  ? "For 06 months Internship at CyberDude Networks."
                  : "For Academic."}
              </span>{" "}
            </strong>
          </div>
          <div>
            <strong className=" text-primary-blue">
              Tech Stacks: <span className="text-[#3a4659]">{techStacks}</span>
            </strong>
          </div>
        </div>
      </div>

      {/* Buttons */}
      {/* // * If liveUrl, githubUrl have values then only both buttons will show. 
      // * Otherwise GitHub button only need to show */}
      <div className="p-6">
        {liveUrl == "" ? (
          <Link
            to={githubUrl}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full select-none rounded-lg bg-gray-900 hover:bg-gray-800 py-3.5 pl-3 px-7 text-center align-middle font-Sen text-sm text-white"
            type="button"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </div>
            GitHub
          </Link>
        ) : (
          <div className="flex items-center gap-5">
            <Link
              to={liveUrl}
              target="_blank"
              className="flex items-center gap-2 justify-center w-full select-none rounded-lg bg-primary-blue hover:bg-[#222f44] py-2 pl-3 px-5 text-center align-middle font-Sen text-sm text-white"
              type="button"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.99 4.929a.75.75 0 0 1 0 1.06a8.5 8.5 0 0 0 0 12.021a.75.75 0 0 1-1.061 1.06c-3.905-3.905-3.905-10.236 0-14.141a.75.75 0 0 1 1.06 0m13.081 0c3.905 3.905 3.905 10.237 0 14.142a.75.75 0 0 1-1.06-1.06a8.5 8.5 0 0 0 0-12.022a.75.75 0 1 1 1.06-1.06M8.818 7.757a.75.75 0 0 1 0 1.06a4.5 4.5 0 0 0 0 6.365a.75.75 0 0 1-1.06 1.06a6 6 0 0 1 0-8.485a.75.75 0 0 1 1.06 0m7.425 0a6 6 0 0 1 0 8.485a.75.75 0 1 1-1.061-1.06a4.5 4.5 0 0 0 0-6.364a.75.75 0 0 1 1.06-1.06M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
                  ></path>
                </svg>
              </div>
              Live
            </Link>

            <Link
              to={githubUrl}
              target="_blank"
              className="flex items-center justify-center gap-2 w-full select-none rounded-lg bg-gray-900 hover:bg-gray-800 py-2 pl-3 px-5 text-center align-middle font-Sen text-sm text-white"
              type="button"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </div>
              GitHub
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

TheTaskInfoCard.propTypes = {
  githubUrl: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  liveUrl: PropTypes.string,
  techStacks: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
  projectType: PropTypes.string,
};

export default TheTaskInfoCard;
