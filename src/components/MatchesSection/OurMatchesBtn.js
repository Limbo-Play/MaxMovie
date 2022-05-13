import matchesBtn from "../../assets/matchesBtn.png"
import MyLikesBtn from "../Buttons/MyLikesBtn"
import "./styles.scss"

export default function () {
    return (
        <div className="matchesBtns">
            <div className="ourMatchesBtn"><img src={matchesBtn} />Our matches</div>
            <MyLikesBtn/>
        </div>
    )
}