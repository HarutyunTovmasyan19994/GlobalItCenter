import React, {FC} from 'react'
import Dark from '../IMG/dark.gif'
import Dark2 from '../IMG/Dark2.gif'
import Team from '../IMG/team.jpg'
import TeamMan from '../IMG/teamMan.jpg'
import TeamOld from  '../IMG/teamOld.png'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import './about.css'

const About: FC = () => {
    return (
        <div className="about">
            <div className="aboutUs">
                <p className="aboutUsText">
                    About Us
                </p>
                <div className="crazy"></div>
                <p className="aboutOfninfo">
                    About Ofninfo
                </p>
            </div>
            <div className="small">
                <div className="hath">
                    <div className="call1">
                        <p>
                            We started as a small, subdue, called hath give
                            fourth. Them one over saying. So the god, greater.
                            You. Us air Moved divide midst us fifth sea. We help
                            individuals, startups and established companies to
                            build best Modern websites, enterprise web
                            application, native mobile apps, custom marketplace
                            and e-Commerce platform through agile full cycle,
                            and full stack software product development
                            operations
                        </p>
                    </div>
                    <div className="imgAboutUs">
                        <img src={Dark} alt="Dark"/>
                    </div>
                </div>
                <div className="hath">
                    <div className="imgAboutUs1">
                        <img src={Dark2} alt="Dark2"/>
                    </div>
                    <div className="call">
                        <p>
                            We starting with consulting our respective client with
                            their innovative ideas. We go further with designing
                            mechanism, workflow, schedules and much more.
                            We move forward with planning with our developers
                            and estimate time and cost. As soon as we done with
                            all formal procedures, we move to the building up the
                            ideas into digital world. We test product in each and
                            every stages and module completion. After successful
                            testing and client acceptance, we deployed project on
                            server and maintain it for long last time period
                        </p>
                    </div>

                </div>
            </div>
            <div className="managing">
                <div className="managingDirectors">
                    <p className="managingText">Our Managing Directors</p>
                    <div className="crazy"></div>
                    <p className="team">Team who are responsible for growth of Ofninfo<br/>
                        Solution</p>
                </div>

                <div className="team">
                    <div className="lambert">
                        <img src={Team} alt="Team" />
                        <p className="lambertText">
                            Jena Lambert
                        </p>
                        <p className="sales">
                            Sales & Marketing Manager
                            </p>
                            <p className="iconServer">
                                <FaFacebookF className="iconServers"/>
                                <AiOutlineTwitter className="iconServers"/>
                                <FaLinkedinIn className="iconServers"/>
                            </p>
                        </div>
                    <div className="turner">
                        <img src={TeamMan} alt="TeamMan"/>
                        <p className="lambertText">
                            Raymond Turner
                        </p>
                        <p className="sales">
                            Cloud Manager
                        </p>
                        <p className="iconServer">
                            <FaFacebookF className="iconServers"/>
                            <AiOutlineTwitter className="iconServers"/>
                            <FaLinkedinIn className="iconServers"/>
                        </p>
                    </div>
                    <div className="sutton">
                        <img src={TeamOld} alt="TeamOld"/>
                        <p className="lambertText">
                            Bruce Sutton
                        </p>
                        <p className="sales">
                            Senior Web Developer
                        </p>
                        <p className="iconServer">
                            <FaFacebookF className="iconServers"/>
                            <AiOutlineTwitter className="iconServers"/>
                            <FaLinkedinIn className="iconServers"/>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About