import { useHistory } from "react-router"
import goBack from "../../assets/GoBack.png"
import "./styles.scss"
 
export default function GoBackAbouMovie() {
    const history = useHistory()
    return (
        
        <button className="btnStyle"
        onClick={history.goBack}><img
        src={goBack}
        alt={"backButton"}
        /> Back</button>
    )
}