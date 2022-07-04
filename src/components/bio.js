
import React from "react"
import headshot from "../images/headshot.png"
import emailIcon from "../images/Email-Icon.png"
import linkedinIcon from "../images/linkedin-Icon.png"

export default function Bio () {
    return (
        <header className="bio">
                <div>
                <img src={headshot} className="headshot" />
                </div>
                <div className="center intro">
                    <h3 className="intro-name white-text">Yan Hu</h3>
                    <div className="intro-title orange-text">Slayer of Bugs</div>
                    <div className="site-link">
                    <a href="https://programming90days.godaddysites.com/"><span className="website white-text">My Website</span></a>
                    </div>
                    <div className="buttons">
                        <button className="email-button button"><img src={emailIcon}/><span className="button-text">Email</span></button>
                        <button className="linkedin-button button white-text"><img src={linkedinIcon}/><span className="button-text">LinkedIn</span></button>
                    </div>
                </div>
                
        </header>
    )
}

