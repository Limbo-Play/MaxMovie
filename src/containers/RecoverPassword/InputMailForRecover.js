import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { inputpMailRecoverSchema } from "../../helpers/valiadtionSchema";
import MainTitle from "../../components/MainTitle/MainTitle";
import Button from "../../components/Buttons/Button";
import verifyLogo from "../../assets/VerifyLogo.png";
import "./styles.scss";
import { sendRecoverCode } from "../../redux/actions/recoverPasswordAction";
import { useDispatch } from "react-redux";

export default function InputEmailForRecover() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(inputpMailRecoverSchema) });
  const onError = (error) => console.log(error);
  const onSubmit = (data) => console.log(data.email);
  function handleSendEmail(data) {
    dispatch(sendRecoverCode(data.email));
  }
  console.log(onSubmit);
  return (
    <div className="inputEmailContainer">
      <MainTitle />

      <img src={verifyLogo} alt="logo" />
      <span> Forgot password? </span>
      <p className="textStyle">
        Enter the email adress associated
        <br />
        with your account
      </p>

      <form onSubmit={handleSubmit(handleSendEmail, onError)}>
        <input
          placeholder="Email"
          className="handleInput"
          type="email"
          {...register("email")}
        ></input>
        <p className="inputError">{errors.email?.message}</p>
        <div className="resetBtnPos">
          <Button disabled={false} value={"Reset password"} />
        </div>
      </form>
    </div>
  );
}
