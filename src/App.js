import "./App.scss";
import { awsConfig } from "./awsConfig";
import Amplify from "@aws-amplify/core";
import LoginSignIn from "./routes/LoginSignIn";

function App() {
  Amplify.configure(awsConfig);

  return <div className="mainBackground"><LoginSignIn /></div>
}

export default App;
