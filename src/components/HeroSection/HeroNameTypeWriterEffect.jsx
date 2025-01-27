import { TypewriterEffectSmooth } from "../ui/type-writer-effect";
const TypewriterEffectSmoothDemo = () => {
  // const words = [
  //   {
  //     text: "Mohamed",
  //     className: "text-3xl sm:text-4xl",
  //   },
  //   {
  //     text: "Aasik",
  //     className: "text-3xl sm:text-4xl",
  //   },
  // ];
  return (
    <div className=" text-main-heading-color">
      <TypewriterEffectSmooth
        color="text-main-heading-color"
        words={[
          { text: "Mohamed", className: "text-3xl sm:text-4xl" },
          { text: "Aasik", className: "text-3xl sm:text-4xl" },
        ]}
      />
    </div>
  );
};

export default TypewriterEffectSmoothDemo;
