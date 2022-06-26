import React,{FC} from "react"
import IMG from '../IMG/img.png'
import {Link} from "react-router-dom"
import './Header.css'

const Header:FC = () =>{
    return(
        <div className="header">
            <div>
                <img src={IMG} alt="IMG"/>
            </div>
            <div className="ul">
                <ul>
                    <li className="Home">
                        <Link to="/" className="link">
                            Home
                        </Link>

                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Portfolio
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
            <div>
                <button className="letsTalk">
                    Let's talk
                </button>
            </div>

        </div>
    )
}

export  default  Header