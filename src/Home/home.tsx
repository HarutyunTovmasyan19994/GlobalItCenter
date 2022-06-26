import React,{FC} from 'react'
import HomeOne from '../IMG/imgHome.jpg'
import './Home.css'

const Home:FC = () => {
    return(
        <div className="home">
            <div className="welcome">
                <p>Welcome to Ofninfo Solution</p>
                <p>
                    Ofninfo  Solution  scale  your  business
                    digitally through best software product
                    development,  user  experience,  drives
                    traffic, and connect with the customer
                </p>
                <button>
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
    )
}
export default Home