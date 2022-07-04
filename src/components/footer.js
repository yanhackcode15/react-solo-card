import React from "react"
import facebookIcon from "../images/Facebook-Icon.png"
import GithubIcon from "../images/Github-Icon.png"
import InstagramIcon from "../images/Instagram-Icon.png"
import twitterIcon from "../images/Twitter-Icon.png"

export default function Footer () {
    return (
        <footer className="footer">
            <ul className="footer-icons">
                <li><img src={twitterIcon}/></li>
                <li><img src={facebookIcon}/></li>
                <li><img src={InstagramIcon}/></li>
                <li><img src={GithubIcon}/></li>
            </ul>
        </footer>
    )
}
