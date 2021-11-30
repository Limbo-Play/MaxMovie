import React from "react";
import { Link } from "react-router-dom";
import "./mainPage.scss"

function MainPageFooter() {
    return (
        <div className="centerPositionColumn">
            <span className="privacySpan"> By continuing, you are indicating that you accept our <br/>
            Terms of Service and Privacy Policy.</span>
        <span className="singInQuestion"> Already have an account?<Link to="/login" className="singInLink">Sing in</Link> </span>
        </div>
    )
}


export default MainPageFooter