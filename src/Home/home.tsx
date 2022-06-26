import React, {FC} from 'react'
import HomeOne from '../IMG/imgHome.jpg'
import {GiFamilyHouse} from 'react-icons/gi'
import {MdComputer} from 'react-icons/md'
import {AiOutlineMobile} from 'react-icons/ai'
import {GiTrophyCup} from 'react-icons/gi'
import {FaMoneyBillWave} from 'react-icons/fa'
import {MdTimer} from 'react-icons/md'
import WhatIMG from '../IMG/ImgWhat.jpg'
import './Home.css'
import Portfolio from "../Portfolio/portfolio";

const Home: FC = () => {
    return (
        <div className="HomPage">
            <div className="home">
                <div className="welcome">
                    <p className="welcomeText">Welcome to Ofninfo Solution</p>
                    <p className="scale">
                        Ofninfo Solution scale your business
                        digitally through best software product
                        development, user experience, drives
                        traffic, and connect with the customer
                    </p>
                    <button className="btnGet">
                        Get Started
                    </button>
                </div>
                <div className="right">
                    <img src={HomeOne}
                    />
                </div>
                <div>
                </div>
            </div>
            <div className="Developer">
                <div>
                    <div className="mobilApp">
                        <AiOutlineMobile className="mobileIcon"/>
                    </div>
                    <p className="mobilAppText">Mobile App Development</p>
                </div>
               <div>
                   <div className="WebDeveloper">
                    <MdComputer className="WebDeveloperIcon"/>
                   </div>
                   <p className="WebDeveloperText">Web Development</p>
               </div>
                <div>
                    <div className="UIUXDesign">
                        <GiFamilyHouse className="UIUXDesignIcon"/>
                    </div>
                    <p className="UIUXDesignText">UI/UX Design</p>
                </div>

            </div>

            <div className="success">
                <div className="whatImg">
                    <img src={WhatIMG} alt="WhatIMG"/>
                </div>
                <div className="successText">
                    <p className="successStory">
                        We have Lot's of
                        Success Stories
                    </p>
                    <p className="completedIcon">
                        <GiTrophyCup className="IconCup"/>
                        <p className="completed">
                            Completed
                            <span className="hudred">
                                100%
                            </span>
                        </p>

                    </p>
                    <p className="completedIcon">
                        <FaMoneyBillWave className="IconCup"/>
                        <p className="completed">
                            On Budget
                            <span className="hudred">
                                100%
                            </span>
                        </p>

                    </p>
                    <p className="completedIcon">
                        <MdTimer className="IconCup"/>
                        <p className="completed">
                            On Time
                            <span className="hudred">
                                100%
                            </span>
                        </p>

                    </p>
                </div>
            </div>
            <div>
                <Portfolio/>
            </div>
            <div className="effective">

            </div>
        </div>
    )
}
export default Home