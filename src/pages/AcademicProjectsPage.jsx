import jsonData from "../data/taskList.json";
import TheTaskInfoCard from "../components/TheTaskInfoCard";
import TheFootNote from "../components/TheFootNote";
import TheHeaderProgressBar from "../components/HeaderProgressBar/TheHeaderProgressBar";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { useNavigate } from "react-router-dom";

const TheAcademicProjectsPage = () => {
  // console.log(jsonData);
  const navigate = useNavigate();

  const navigateToTaskPage = () => {
    const path = "/tasks";
    navigate(path);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-secondary-font-color min-h-screen font-Sen">
      <div className=" px-3">
        <TheHeaderProgressBar />
      </div>

      <div className="pt-[190px]">
        <h3 className="text-center text-3xl font-semibold text-primary-blue mb-8 sm:mb-0">
          <TextGenerateEffect
            words={
              "Here is a list enumerating the majority of my academic endeavors"
            }
          />
        </h3>
        <div className="p-3 sm:p-10 sm:pb-10 flex justify-center flex-wrap gap-10">
          {jsonData[0].academic.map(
            ({
              id,
              title,
              github,
              imgLink,
              live,
              techStacks,
              type,
              description,
              projectType,
            }) => {
              // { id, title, github, imgLink, live, techStacks, type }
              // console.log(el);
              return (
                <TheTaskInfoCard
                  key={id}
                  imgUrl={imgLink}
                  title={title}
                  description={description}
                  liveUrl={live}
                  githubUrl={github}
                  techStacks={techStacks}
                  type={type}
                  projectType={projectType}
                />
              );
            }
          )}
        </div>

        <div className="sm:flex p-3 justify-center space-y-3 sm:space-y-0 sm:space-x-5 mb-10">
          <button
            type="button"
            onClick={navigateToTaskPage}
            className="w-full sm:w-[300px] bg-primary-blue px-5 py-2 rounded-md text-white hover:opacity-90 border-2 border-primary-blue transition ease-in-out duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50"
          >
            View Internship Tasks
          </button>

          <button
            type="button"
            onClick={navigateToHome}
            className="w-full sm:w-[200px] border-2 border-primary-blue px-5 py-2 rounded-md text-primary-blue hover:bg-primary-blue hover:transition 500 hover:text-white transition ease-in-out duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50"
          >
            Back to Home
          </button>
        </div>

        <TheFootNote />
      </div>
    </div>
  );
};

export default TheAcademicProjectsPage;
