 import "./verify.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import Button from "../../components/Buttons/Button";
import {verifySubmit, reSendVerify} from "../../redux/actions/signUpActions"
import VerifyLogo from "../../assets/VerifyLogo.png";
import { useDispatch, useSelector } from "react-redux";
import InputVerifyCode from "../../components/InputComponents/InputVerifyCode"
import { useRef } from "react";
function VerifyContainer() {
  const userNameForVerify = useSelector((store) => store.signUpReducer)
  const dispatch = useDispatch();

  function handleInputVerify(e) {
    e.preventDefault();
    const inputVerify = [
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value,
      e.target[4].value,
      e.target[5].value,
    ];
    const confirmCode = inputVerify.join('')
    console.log(confirmCode)
    dispatch(verifySubmit(
      {userNameForVerify: userNameForVerify.userNameForVerify,
      confirmCode : confirmCode,}
    ));
    e.target.reset();
  }
  function resendVerifyCode() {
    dispatch(reSendVerify({userNameForVerify: userNameForVerify.userNameForVerify}));
  }

  console.log(userNameForVerify.error)

  return (
    <div className="centerPositionColumn">
      <MainTitle />
      <img src={VerifyLogo} alt="Verify" />
      <span className="verifyYourEmail">Verify your email</span>
      <span className="enterVerifyCodeSpan">
        Please enter the 6 digit code sent to
        <br />
        <p>{userNameForVerify.userNameForVerify}</p>
      </span>

      <form onSubmit={handleInputVerify} className="centerPositionColumn">
        <InputVerifyCode />
        <Button value={"Confirm"} disabled={false} />
      </form>
      <button onClick={resendVerifyCode} className="resendVerifyBtn">
        Resend code
      </button>
      <span className="invalidCodeSpan">{ userNameForVerify.error }</span>
    </div>
  );
}

export default VerifyContainer;
