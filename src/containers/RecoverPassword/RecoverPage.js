import MainTitle from "../../components/MainTitle/MainTitle";
import Button from "../../components/Buttons/Button";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { recoverPasswordSchema } from "../../helpers/valiadtionSchema";
import { useDispatch, useSelector } from "react-redux";
import { recoverPassword } from "../../redux/actions/recoverPasswordAction";

export default function RecoverPage() {
  const error = useSelector((store) => store.recoverReducer.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(recoverPasswordSchema) });
  const onError = (error) => console.log(error);
  const dispatch = useDispatch();

  function handleRecoverPassword({ code, newPassword }) {
    dispatch(recoverPassword({ code, newPassword }));
  }

 

  return (
    <div className="recoverPagePosition">
      <MainTitle />
      <form onSubmit={handleSubmit(handleRecoverPassword, onError)}>
        <p className="createNewPass">Create new password</p>
        <input
          placeholder="Confirmation code"
          className="handleInput"
          type="number"
          {...register("code")}
        ></input>
        <p className="inputError">{errors.code?.message}</p>
        <input
          placeholder="New password"
          className="handleInput"
          type="password"
          {...register("password")}
        ></input>
        <p className="inputError">{errors.password?.message}</p>
        <input
          placeholder="Confirm new password"
          className="handleInput"
          type="password"
          {...register("newPassword")}
        ></input>
        <p className="inputError">{errors.newPassword?.message}</p>
        <span className="inputError">{error}</span>
        <div className="resetBtnPos" >
          <Button disabled={false} value={"Reset password"} />
        </div>
      </form>
    </div>
  );
}
