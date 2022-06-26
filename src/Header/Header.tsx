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
                    <li className="Home" style={{color: "#4F6DF5"}}>
                        <Link to="/" className="link" style={{color: "#4F6DF5"}}>
                            Home
                        </Link>

                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        <Link to="services" className="link">
                            Services
                        </Link>

                    </li>
                    <li>
                        <Link to="portfolio" className="link">
                            Portfolio
                        </Link>
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