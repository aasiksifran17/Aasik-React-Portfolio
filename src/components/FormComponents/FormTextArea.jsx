import PropTypes from "prop-types";

const FormTextArea = ({ name, placeholder, register, errors }) => {
  return (
    <div>
      <label htmlFor={name} className="text-main-heading-color font-semibold">
        Message
      </label>
      <div>
        <textarea
          name={name}
          id={name}
          rows={5}
          className="w-full p-3 rounded-md outline-none text-primary-blue capitalize mt-2 bg-secondary-font-color placeholder-primary-blue"
          placeholder={placeholder}
          autoComplete="off"
          {...register}
        />
        {errors && (
          <small className="text-red-500 block mt-1">{errors.message}</small>
        )}
      </div>
    </div>
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default FormTextArea;
