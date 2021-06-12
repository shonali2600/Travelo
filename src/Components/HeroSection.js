import React from 'react'
import { Button } from './Button';
// import trvl1 from '../../public/trvl1.jpeg'
import './HeroSection.css';

function HeroSection() {
 
        return (
            <div className='hero-container'>
                <img src="/trvl (5).jpg" alt="img"/>
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                    <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i className='far fa-play-circle'/></Button>
                </div>
            </div>
        )
}

export default HeroSection;
