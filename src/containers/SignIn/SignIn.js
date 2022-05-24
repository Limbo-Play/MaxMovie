import Button from "../../components/Buttons/Button";
import "./signIn.scss";
import { login } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/valiadtionSchema";

export default function SignIn() {
  const loginError = useSelector((store) => store.authReducer.error);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const onError = (error) => console.log(error);

  function handleInput({ email, password }) {
    dispatch(
      login({
        login: email,
        password,
      })
    );
  }

  return (
    <>
      <div className="centerPositionColumn">
        <h3>Welcome back</h3>
        <form
          onSubmit={handleSubmit(handleInput, onError)}
          className="centerPositionColumn"
        >
          <input
            className="handleInput"
            placeholder={"Email"}
            type="email"
            {...register("email")}
          />
          <p className="inputError">{errors.email?.message}</p>
          <input
            className="handleInput"
            placeholder={"Password"}
            type="password"
            {...register("password")}
          />
          <p className="inputError">{errors.password?.message}</p>
          <p className="inputError">{loginError}</p>
          <Link to="/recover" className="forgotPassPosition">
            Forgot password
          </Link>
          <p className="singInQuestion">
            Not registered yet?{" "}
            <Link to="/registration" className="signUpButton">
              Sign up
            </Link>
          </p>
          <Button disabled={false} value={"Log in"} />
        </form>
      </div>
    </>
  );
}
