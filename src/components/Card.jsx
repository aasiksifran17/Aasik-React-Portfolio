import PropTypes from "prop-types";

const Card = ({ heading, icon }) => {
  //
  return (
    <div
      className="bg-primary-blue text-main-heading-color flex flex-col justify-center items-center p-5 rounded-md sm:w-[50%] sm:h-[200px] mb-5 hover:scale-[1.05] hover:transition 500 hover:bg-[#081426]"
      data-aos="flip-up"
      data-aos-duration="2000"
    >
      {/* Icon */}
      <div>{icon}</div>
      <h5 className="sm:text-xl text-center mt-3 sm:mt-5">{heading}</h5>
    </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.element,
};

export default Card;
