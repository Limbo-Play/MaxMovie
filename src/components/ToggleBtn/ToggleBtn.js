import "./styles.scss";
import PropTypes from "prop-types";

export default function ToggleBtn({ isActive, toggleButton, disabled }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        disabled={disabled}
        onChange={toggleButton}
        defaultChecked={isActive}
      />
      <span className="slider round"></span>
    </label>
  );
}

ToggleBtn.propTypes = {
  isActive: PropTypes.bool,
  toogleButton: PropTypes.func,
};
