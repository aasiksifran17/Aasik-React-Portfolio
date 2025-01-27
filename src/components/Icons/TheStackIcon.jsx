import PropTypes from "prop-types";

const TheStackIcon = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center mb-5">
      {/* Stack Icon */}
      {icon}

      {/* Name: MongoDB */}
      <span className=" mt-1.5">{name}</span>
    </div>
  );
};

TheStackIcon.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
};

export default TheStackIcon;
