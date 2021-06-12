import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="/trvl (3).jpg"
                            text="Explore the hidden waterfall
                             deep inside the Amazon Forest"
                            label="Adventure"
                            path='/services'
                        />
                        <CardItem 
                            src="/trvl (2).jpg"
                            text="Explore the hidden waterfall
                             deep inside the Amazon Forest"
                            label="Adventure"
                            path='/signup'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="/trvl (1).jpg"
                            text="Explore the hidden waterfall
                             deep inside the Amazon Forest"
                            label="Adventure"
                            path='/contact'
                        />
                        <CardItem 
                            src="/travel.jpg"
                            text="Explore the hidden waterfall
                             deep inside the Amazon Forest"
                            label="Adventure"
                            path='/signup'
                        />
                        <CardItem 
                            src="/trvl (4).jpg"
                            text="Explore the hidden waterfall
                             deep inside the Amazon Forest"
                            label="Adventure"
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
