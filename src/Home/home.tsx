import React, {FC} from 'react'
import HomeOne from '../IMG/imgHome.jpg'
import {GiFamilyHouse} from 'react-icons/gi'
import {MdComputer} from 'react-icons/md'
import {AiOutlineMobile} from 'react-icons/ai'
import {GiTrophyCup} from 'react-icons/gi'
import {FaMoneyBillWave} from 'react-icons/fa'
import {MdTimer} from 'react-icons/md'
import WhatIMG from '../IMG/ImgWhat.jpg'
import WhatPeople from '../IMG/imgWhat2.png'
import Portfolio from "../Portfolio/portfolio";
import ImgMan from '../IMG/imgMan.png'
import ImgWoman from "../IMG/imgGirl.png"
import ImgHappy from "../IMG/imgHappy.png"
import ImgAbout from "../IMG/imgAbout.jpg"
import WebDeveloper from '../IMG/imgWebdeveloper.png'
import Mobile from '../IMG/imgMobile.png'
import Desktop from '../IMG/imgDesctop.png'
import './Home.css'

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
                    <img src={HomeOne} alt="HomeOne"/>
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
                <div>
                    <img src={WhatPeople} alt="WhatPeople" className="WhatPeople"/>
                </div>
                <div>
                    <p className='GetSolid'>
                        Get Solid & Effective<br/>
                        Solutions
                    </p>
                    <p className="passionate">
                        We are passionate about finding effective<br/>
                        software solutions as per you and your customer<br/>
                        requirements to perform across all devices
                    </p>
                    <div className="customer">
                        <div>
                            <div className="satisFaction">
                                <p>
                                    98%
                                </p>
                            </div>
                            <p className="customerText">Customer satisfaction</p>
                        </div>
                        <div>
                            <div className="work">
                                <p>
                                    95%
                                </p>
                            </div>
                            <p className="customerText">work Efficiency</p>
                        </div>
                        <div>
                            <div className="Transparency">
                                <p>100%</p>
                            </div>
                            <p className="customerText"> Transparency</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ClientReviews">
                <div className="ReviewsClient">
                    <p className="ReviewsClientText">
                        Client reviews
                        <div className="crazy"></div>
                    </p>
                    <p className="proud">
                        We are very proud of the service we provide and stand by every product<br/>
                        we carry. Read our testimonials from our happy customers.

                    </p>
                </div>
                <div className="peoples">
                    <div className="States">
                        <span>Tom Davis</span><br/>
                        San Francisco, California
                        <p className="ajay">
                            Ajay is a great developer; very
                            experienced and able to get the job done
                            quickly! I am hiring him again for my next
                            project.
                        </p>
                        <div className="imgPeopleMan">
                            <img src={ImgMan} alt="Man"/>
                        </div>
                    </div>

                    <div className="States">
                        <span>Tom Davis</span><br/>
                        San Francisco, California
                        <p className="ajay">
                            Ajay is a great developer; very
                            experienced and able to get the job done
                            quickly! I am hiring him again for my next
                            project.
                        </p>
                        <div className="imgPeopleWoman">
                            <img src={ImgWoman} alt="Woman"/>
                        </div>
                    </div>
                    <div className="States">
                        <span>Tom Davis</span><br/>
                        San Francisco, California
                        <p className="ajay">
                            Ajay is a great developer; very
                            experienced and able to get the job done
                            quickly! I am hiring him again for my next
                            project.
                        </p>
                        <div className="imgPeopleHappy">
                            <img src={ImgHappy} alt="Happy"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="WeCreate">
                <div className="imgAbout">
                    <img src={ImgAbout} alt="About"/>
                </div>
                <div className="create">
                        <p className="weCreate">
                            We create unique<br/>
                            experiences
                        </p>
                    <p className="weStart">
                        We started as a small, subdue, called hath give fourth. Them
                        one over saying. So the god, greater. You. Us air Moved divide
                        midst us fifth sea.We help individuals, startups and established
                        companies to build best Modern websites, enterprise web
                        application, native mobile apps, custom marketplace and e-
                        Commerce platform through agile full cycle, and full stack
                        software product development operations.
                    </p>
                </div>
            </div>

            <div className="application">
                <div className="applicationText">
                    <p>
                        Our Work
                    </p>
                    <div className="crazy"></div>
                </div>

                <div className="applicationWeb">
                    <div className="applicationMWD">
                        <div className="img">
                            <img src={Mobile} alt="Mobile"/>
                        </div>

                            <p className="mobilApplicationText">
                                Mobile Application
                            </p>
                            <p className="various">
                                We Work with various mobile application
                                platforms that include Hybrid(Flutter ,
                                React-Native, IONIC), Native App
                                Development.
                            </p>
                        </div>

                    <div className="applicationMWD">
                        <div className="img">
                            <img src={WebDeveloper} alt="WebDeveloper"/>
                        </div>
                        <p className="mobilApplicationText">
                            Website Development
                        </p>
                        <p className="various">
                            We provide professional Web Design &
                            Development and Website Maintenance
                            Services to Our Clients Worldwide.
                        </p>
                    </div>
                    <div className="applicationMWD">
                        <div className="img">
                            <img src={Desktop} alt="Desktop"/>
                        </div>
                        <p className="mobilApplicationText">
                            Desktop Application
                        </p>
                        <p className="various">
                            We Work with various mobile application
                            platforms that include Hybrid(Flutter ,
                            React-Native, IONIC), Native App
                            Development.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home