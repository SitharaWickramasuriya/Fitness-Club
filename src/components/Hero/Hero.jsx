import React from "react";
import './Hero.css';
import Header from '../Header/Header.jsx';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {

    return (
        <div className="hero">

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

{/* the best add */}
                <div className="the-best-ad">
                   
                    <span>the best fitness club</span>
                </div>

{/* hero heading */}
                    <div className="hero-text">
                        <div>
                            <span className="stroke-text">Shape</span>
                            <span> Your</span>
                        </div>

                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div>
                            <span>
                                In Here We Will Help You To Shape And Build Your Ideal Body And Live Up Your Life To Fullest
                            </span>
                        </div>
                    </div>

                    {/*figures */}
                    <div className="figures">
                        <div>
                            <span>+140</span>
                            <span>expert coaches</span>
                            </div>
                        <div>
                        <span>+978</span>
                        <span>members joined</span>  
                        </div>
                        <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                        </div>
                    </div>

                    {/* hero buttons */}
                    <div className="hero-buttons">
                        <buttons className="btn">Get Started</buttons>
                        <buttons className="btn">Learn More</buttons>
                    </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;