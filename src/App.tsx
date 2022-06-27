import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom"
import Information from "./Information/Information";
import Header from "./Header/Header";
import Footer from "./footer/footer";
import Home from './Home/home'
import Portfolio from "./Portfolio/portfolio";
import Services from "./Services/Services";
import About from "./About/about";
import './App.css'

const App: FC = () => {
    return (
        <div className="App">
            <Information/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
