import "./styles.scss"
import starLikes from "../../assets/starLikes.png"
export default function MyLikesBtn() {
    return (
        <button className="myLikesBtn"> <img src={starLikes}/> My likes</button>
    )
}

