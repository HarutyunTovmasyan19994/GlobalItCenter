import React,{FC} from 'react'
import {AiOutlineMobile} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {HiDesktopComputer} from 'react-icons/hi'
import {BsFileText} from 'react-icons/bs'
import {FiTarget} from 'react-icons/fi'
import {GrBrush} from 'react-icons/gr'
import './Services.css'

const Services:FC = () => {
    return(
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
                      </div>
                      <div className="APPm">
                          <div className="UI">
                              <FaLaptopCode className="ai"/>
                          </div>
                      </div>
                      <div className="APPm">
                          <div className="UI">
                              <HiDesktopComputer className="ai"/>
                          </div>
                      </div>
                  </div>
                  <div className="APPweb">
                      <div className="APPm">
                          <div className="UI">
                               <BsFileText className="ai"/>
                          </div>
                      </div>
                      <div className="APPm">
                          <div className="UI">
                               <FiTarget className="ai"/>
                          </div>
                      </div>
                      <div className="APPm">
                          <div className="UI">
                               <GrBrush className="ai"/>
                          </div>
                      </div>
                  </div>

              </div>
            </div>
        </div>
    )
}

export default Services