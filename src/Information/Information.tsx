import React, {FC} from "react";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from "react-icons/gr";
import {ImGoogle3,ImWhatsapp} from "react-icons/im";
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"

import './Information.css'

const Information: FC = () => {
    return (
        <div className="information">
            <div className="info">
                <span className="informationText">
                     <BsFillTelephoneFill className='telephoneIcon '/>
                    7600003897
                </span>
                <span className="informationText">
                     <GrMail className='telephoneIcon '/>
                    info@ofniinfo.com
                </span>

            </div>
            <div>
                <span className="icon">
                <ImGoogle3/>
                </span>
                <span className="icon">
                <BsInstagram/>
                </span>
                <span className="icon">
                    <AiFillLinkedin/>
                </span>
                <span className="icon">
                    <ImWhatsapp/>
                </span>
            </div>

        </div>
    )


}
export default Information
