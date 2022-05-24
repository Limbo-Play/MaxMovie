import Button from "../../components/Buttons/Button";
import "./signUpStyle.scss";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/signUpActions";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../helpers/valiadtionSchema";

export default function SignUp() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });
  const onError = (error) => console.log(error);

  function handlePressSumbit({ email, password, name }) {
    dispatch(
      signUp({
        email,
        password,
        name,
      })
    );
  }
  return (
    <div className="centerPositionColumn">
      <h3>Create an account</h3>
      <form
        onSubmit={handleSubmit(handlePressSumbit, onError)}
        className="centerPositionColumn"
      >
        <input
          className="handleInput"
          placeholder="Name"
          type="text"
          {...register("name")}
        />
        <p className="inputError">{errors.name?.message}</p>
        <input
          className="handleInput"
          placeholder="Email"
          type="email"
          {...register("email")}
        />
        <p className="inputError">{errors.email?.message}</p>
        <input
          className="handleInput"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <p className="inputError">{errors.password?.message}</p>
        <span className="signUpButton">
          <Button disabled={false} value={"Sign up"} />
        </span>
      </form>

      <div className="centerPositionColumn">
        <span className="singInQuestion">
          {" "}
          Already have an account?
          <Link to="/login" className="singInLink">
            Log in
          </Link>
        </span>
        <span className="privacySpan">
          {" "}
          By continuing, you are indicating that you accept our <br />
          Terms of Service and Privacy Policy.
        </span>
      </div>
    </div>
  );
}
