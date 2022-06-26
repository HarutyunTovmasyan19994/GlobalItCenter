import React, {FC} from 'react'
import {GrMail} from "react-icons/gr";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import Google from "../IMG/google.png"
import IN from '../IMG/IN.png'
import Whatsapp from '../IMG/Whatsapp.png'
import Instagram from '../IMG/instagram.png'
import './footer.css'

const Footer: FC = () => {
    return (
        <div className="footer">
            <div className="display">
                <div className="footerDiv">
                    <p className="ofiinfo">
                        OFNIINFO
                    </p>
                    <p className="ofiinfoSolution">
                        Ofninfo Solution scale your business
                        digitally through best software product
                        development, user experience, drives
                        traffic, and connect with the customer

                    </p>
                </div>
                <div className="footerDiv">
                    <p className="services">
                        Services
                    </p>
                    <p className="webDeveloper">
                        Web Development<br/>
                        App Development<br/>
                        UX/UI Design<br/>
                        Desktop App

                    </p>
                </div>
                <div className="footerDiv">
                    <p className="quickLinks">
                        Quick Links

                    </p>
                    <p className="webDeveloper">
                        Web Development<br/>
                        App Development<br/>
                        UX/UI Design<br/>
                        Desktop App

                    </p>
                </div>
                <div className="footerDiv">
                    <p className="contact">
                        Contact
                    </p>
                    <p className="contactUl">
                        <ul>
                            <li>
                                <GrMail className="icon"/>
                                info@ofniinfo.com
                            </li>
                            <li>
                                <BsFillTelephoneFill className="icon"/>
                                +91 7600003893
                            </li>
                            <li>
                                <IoLocationSharp className="icon"/>
                                216, Meriton Plaza Near
                            </li>
                            <li>Savaliya Circle, opp Varachha</li>
                            <li>Co-Bank Surat-395010
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="social">
                <p className="socialText">Social</p>
                <span className="icon">
                    <img src={Google} alt="Google" className="inst"/>
               </span>
                <span className="icon">
                <img src={Instagram} alt="inst" className="inst"/>
                </span>
                <span className="iconIn">
                    <img src={IN} alt="IN" className="inst"/>
                </span>
                <span className="icon">
                    <img src={Whatsapp} alt="Whatsapp" className="inst"/>
                </span>
            </div>
            <div className="copy">
            <p className="copyText">
                Copyright@2021Ofniinfo Solution
            </p>
                <p className="privacy">
                    Privacy policy
                </p>
            </div>
        </div>
    )
}
export default Footer
