import React, {FC} from 'react'
import {AiOutlineMobile} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {HiDesktopComputer} from 'react-icons/hi'
import {BsFileText} from 'react-icons/bs'
import {FiTarget} from 'react-icons/fi'
import {GrBrush} from 'react-icons/gr'
import {AiOutlineOrderedList} from 'react-icons/ai'
import {GrSend} from 'react-icons/gr'
import ImgHTMLPhp from '../IMG/imgHTMLPHP.jpg'
import './Services.css'

const Services: FC = () => {
    return (
        <div className="SERVICES">
            <div className="SERVICESOur">
                <p className="SERVICESOText">
                    Our Services
                </p>
                <div className="crazy"></div>

                <div className="APP">
                    <div className="APPweb">
                        <div className="APPm">
                            <div className="UI">
                                <AiOutlineMobile className="ai"/>
                            </div>
                            <p className="APPmText">
                                Mobile App
                                Development
                            </p>
                            <p className="latest">
                                Ofninfo works on latest technology<br/>
                                such as Flutter and React Native.
                            </p>
                        </div>
                        <div className="APPm">
                            <div className="UI">
                                <FaLaptopCode className="ai"/>
                            </div>
                            <p className="APPmText">
                                Web
                                Development
                            </p>
                            <p className="latest">
                                digital world has growinng faster day by
                                day and semicolon is one of the them
                                to grow it
                            </p>
                        </div>
                        <div className="APPm">
                            <div className="UI">
                                <HiDesktopComputer className="ai"/>
                            </div>
                            <p className="APPmText">
                                Desktop
                                App Development
                            </p>
                            <p className="latest">
                                Build your desktop application and
                                minimize time
                            </p>
                        </div>
                    </div>
                    <div className="APPweb">
                        <div className="APPm">
                            <div className="UI">
                                <BsFileText className="ai"/>
                            </div>
                            <p className="APPmText">
                                UI/UX
                                Designing
                            </p>
                            <p className="latest">
                                Adobe XD, Sketch, Invision,Photoshop,
                                Illustrator, Figma UI/UX Makes your
                                application alive to see how it’s look
                            </p>
                        </div>
                        <div className="APPm">
                            <div className="UI">
                                <FiTarget className="ai"/>
                            </div>
                            <p className="APPmText">
                                Digital
                                Marketing
                            </p>
                            <p className="latest">
                                digital world has growinng faster day by
                                day andsemicolon is one of the them
                                to grow it
                            </p>
                        </div>
                        <div className="APPm">
                            <div className="UI">
                                <GrBrush className="ai"/>
                            </div>
                            <p className="APPmText">
                                Graphic
                                Design
                            </p>
                            <p className="latest">
                                Build your desktop application and
                                minimize time
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="HTMLPHP">
                <div className="ImgHTMLPhP">
                    <img src={ImgHTMLPhp} alt="ImgHTMLPhp"/>
                </div>
                <div className="ChooseUs">
                    <p className="ChooseUsText">
                        Why Choose Us
                    </p>
                        <p className="awesome">
                        WE ARE AWESOME
                    </p>
                    <div className="pracent">
                        <div>
                        <p className="Research">
                            Research and Analysis
                            <span className="pracentText">
                                    95%
                                </span>
                        </p>
                        <div className="pracent1">
                            <div className="preacent2">

                            </div>
                        </div>
                    </div>
                        <div>
                            <p className="Research">
                                Nagotiation and power
                                <span className="pracentText">
                                    92%
                                </span>
                            </p>
                            <div className="pracent3">
                                <div className="preacent4">

                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="Research">
                                Creative and innovative solutions
                                <span className="pracentText">
                                    80%
                                </span>
                            </p>
                            <div className="pracent5">
                                <div className="preacent6">

                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="Research">
                                Transparency and ease of work
                                <span className="pracentText">
                                    77%
                                </span>
                            </p>
                            <div className="pracent7">
                                <div className="preacent8">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="process">
                <div className="ourProcess">
                    <p className="ourProcessText">
                        Our Process
                    </p>
                    <div className="crazy"></div>
                    <p className="build">
                        We design, build and support websites and apps for clients worldwide.<br/>
                        We make your business stand out. Interested? Let's chat.
                    </p>
                </div>
                <div className="icons">
                    <div>
                        <GrBrush className="ai"/>
                    </div>
                    <div>
                        <AiOutlineOrderedList className='ai'/>
                    </div>
                    <div>
                        <FaLaptopCode className="ai"/>
                    </div>
                    <div>
                        <GrSend className='ai'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services