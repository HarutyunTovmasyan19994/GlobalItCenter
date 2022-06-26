import React, {FC} from "react";
import ImgHoha from '../IMG/imgHoha.jpg'
import ImgSofa  from "../IMG/imgSofa.jpg"
import ImgBudhhas from '../IMG/ImgBudhhas.jpg'
import ImgBuhhas from '../IMG/ImgBuhhas.png'
import ImgBould from '../IMG/imgBould.png'
import ImgFabio from '../IMG/imgFabio.jpg'
import ImgCity from '../IMG/imgCity.jpg'
import ImgBeefup from '../IMG/imgBeefup.png'
import ImgBufag from '../IMG/imgBufag.png'
import './portfolio.css'


const Portfolio: FC = () => {
    return (

        <div className="portfolio">
            <div className="portfolioTexts">
                <p className="portfolioText">
                    Portfolio
                </p>
                <p className="weDesign">
                    We design, build and support websites and apps for clients worldwide.<br/>
                    We make your business stand out.

                </p>
            </div>
            <div className="AllMobileWeb">
                <ul>
                    <li>All</li>
                    <li>Mobile Application</li>
                    <li>Web design</li>
                </ul>
            </div>
            <div className="AllMobileWebImg">
                <div className="allImg">
                    <div>
                        <img src={ImgSofa} alt="Sofa"/>
                    </div>
                    <div>
                        <img src={ImgBould} alt="Bould"/>
                    </div>
                    <div style={{marginRight:"0"}}>
                        <img src={ImgHoha} alt="Hoha"/>
                    </div>
                </div>
                <div className="allImg">
                    <div>
                        <img src={ImgBuhhas} alt="Buhhas"/>
                    </div>
                    <div>
                        <img src={ImgBudhhas} alt="Budhhas"/>
                    </div>
                    <div style={{marginRight:"0"}}>
                        <img src={ImgFabio} alt="Fabio"/>
                    </div>
                </div>
                <div className="allImg">
                    <div    >
                        <img src={ImgCity} alt="City"/>
                    </div>
                    <div>
                        <img src={ImgBeefup} alt="Beefup"/>
                    </div>
                    <div style={{marginRight:"0"}}>
                        <img src={ImgBufag} alt="Bufag"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio