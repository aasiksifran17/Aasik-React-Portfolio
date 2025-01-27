import TaskCard from "./TaskCard";
import { useNavigate } from "react-router-dom";
import jsonData from "../data/taskList.json";
import Swal from "sweetalert2";

const TheProjectSection = () => {
  const { tasks, academic, personal } = jsonData[0];
  // console.log(personal);

  const navigate = useNavigate();

  const navigateTaskPage = (e) => {
    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "px-5 py-2 bg-primary-blue text-white rounded-md mx-3 mb-3 sm:mb-0 w-full sm:w-[200px]",
        cancelButton:
          "px-5 py-2 bg-green-700 text-white rounded-md mx-3 mb-3 sm:mb-0 w-full sm:w-[200px]",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Choose category!",
        text: "Dear viewer! Please choose category of the projects / tasks to explore!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Internship Tasks",
        cancelButtonText: "Academic Projects",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const path = "/tasks";
          navigate(path);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          const academicProjectPath = "/academic-projects";
          navigate(academicProjectPath);
        }
      });
  };

  return (
    <div className=" bg-primary-blue px-5 md:px-20 py-20" id="works">
      <h4
        className="text-3xl text-center md:text-left font-semibold text-main-heading-color mb-10"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        Explore My Works
      </h4>

      {/* Card */}
      <div className="sm:flex items-center justify-center sm:gap-16 flex-wrap">
        {/* City-Taxi */}
        <TaskCard
          imgSource={personal[0].imgLink}
          title={personal[0].title}
          liveUrl={""}
          githubUrl={personal[0].github}
          techStacks={personal[0].techStacks}
        />

        {/* Aasik Portfolio */}
        <TaskCard
          imgSource={academic[0].imgLink}
          title={academic[0].title}
          liveUrl={"https://sayatmeaasik17.netlify.app/"}
          githubUrl={academic[0].github}
          techStacks={academic[0].techStacks}
        />

        {/* Aasik-React-Portfolio */}
        <TaskCard
          imgSource={academic[1].imgLink}
          title={academic[1].title}
          liveUrl={academic[1].live}
          githubUrl={academic[1].github}
          techStacks={academic[1].techStacks}
        />

        {/*  Github */}
        <TaskCard
          imgSource={academic[2].imgLink}
          title={academic[2].title}
          liveUrl={academic[2].live}
          githubUrl={academic[2].github}
          techStacks={academic[2].techStacks}
        />
      </div>

      <button
        className=" border border-aqua-color text-aqua-color px-5 py-2 rounded-md flex items-center gap-2 mx-auto mt-10 hover:bg-aqua-color hover:text-primary-blue hover:transition 500 hover:font-semibold"
        onClick={navigateTaskPage}
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></path>
            </g>
          </svg>
        </div>
        Explore more...
      </button>
    </div>
  );
};

export default TheProjectSection;
