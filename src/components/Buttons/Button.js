import PropTypes from "prop-types";

export default function Button({ disabled, value, onSubmit, onClick }) {
  return (
    <input
      className={` componentButton ${
        disabled ? "componentButtonDisabled" : ""
      }`}
      disabled={disabled}
      onSubmit={onSubmit}
      onClick={onClick}
      type="submit"
      value={value}
    />
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};
