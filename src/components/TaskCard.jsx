import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TaskCard = ({ imgSource, title, liveUrl, githubUrl, techStacks }) => {
  return (
    <div
      className="w-full sm:w-[400px] h-[510px] sm:h-[490px] border rounded-md shado mb-5 bg-[#222f44] border-gray-700"
      data-aos="fade-right"
      data-aos-duration="2500"
    >
      <div className="w-full h-64">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={imgSource}
          alt={`${title}'s Screenshot`}
        />
      </div>
      <div className="p-5">
        <h5 className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
          {title}
        </h5>

        <div className="mb-5">
          <span className="text-white">Tech Stacks: </span>
          <span className=" text-gray-400">{techStacks}</span>
        </div>

        <div>
          {liveUrl == "" ? (
            <Link
              to={githubUrl}
              target="_blank"
              className=" flex w-full justify-center items-center gap-2 pl-3 pr-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
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
              GitHub Repo
            </Link>
          ) : (
            <div className="sm:flex items-center gap-5">
              <Link
                to={githubUrl}
                target="_blank"
                className=" flex w-full justify-center items-center gap-2 pl-3 pr-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
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
                GitHub Repo
              </Link>
              <Link
                to={liveUrl}
                target="_blank"
                className=" flex w-full justify-center items-center gap-2 pl-3 pr-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
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
                Watch Live
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  imgSource: PropTypes.string,
  title: PropTypes.string,
  liveUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  techStacks: PropTypes.array,
};

export default TaskCard;
