
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import "./styles.scss";

export default function TypeSection({ title, haveNext, isActive, canTurnOff, toggleButton }) {


  

  return (
    <>
      <div className="typeSection">
        <span>{title}</span>
        <div>
          <ToggleBtn disabled={isActive && !canTurnOff} toggleButton={toggleButton} isActive={isActive} />
        </div>
      </div>
      {haveNext && <hr />}
    </>
  );
}
