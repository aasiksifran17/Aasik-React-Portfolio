import PropTypes from "prop-types";

const FormInput = ({
  type = "text",
  id,
  name,
  label,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="w-full mb-5">
      <label htmlFor={id} className=" text-main-heading-color font-semibold">
        {label}
      </label>
      <div>
        <input
          type={type}
          id={id}
          name={name}
          className="w-full p-3 rounded-md outline-none text-primary-blue mt-2 bg-secondary-font-color placeholder-primary-blue"
          placeholder={placeholder}
          autoComplete="off"
          {...register}
        />
        {errors && (
          <small className="text-red-500 block mt-1.5">{errors.message}</small>
        )}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  name: PropTypes.string,
  errors: PropTypes.object,
};

export default FormInput;
