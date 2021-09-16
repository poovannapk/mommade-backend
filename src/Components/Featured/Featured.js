import React from 'react';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div class='featuredItem'>
                <span className='featureTitle'>
                Revenue
                </span>
                <div className='featuredMoneyContainer'>
                <span className='featureMoney'>
                Rs.3,000
                </span>
                <span className='featureMoneyRate'>
                +30.4 <ArrowDropUp className='arrowup'/>
                </span>
                </div>
                <span className='featureCompare'>Growth Last Month</span>
            </div>
            <div class='featuredItem'>
                <span className='featureTitle'>
                Orders
                </span>
                <div className='featuredMoneyContainer'>
                <span className='featureMoney'>
                Rs.5,000
                </span>
                <span className='featureMoneyRate'>
                +50.4 <ArrowDropUp className='arrowup'/>
                </span>
                </div>
                <span className='featureCompare'>Orders Last Month</span>
            </div>
            <div class='featuredItem'>
                <span className='featureTitle'>
                Users
                </span>
                <div className='featuredMoneyContainer'>
                <span className='featureMoney'>
                Rs.1,000
                </span>
                <span className='featureMoneyRate'>
                -3.4 <ArrowDropDown className='arrowdown'/>
                </span>
                </div>
                <span className='featureCompare'>Users Last Month</span>
            </div>
            <div class='featuredItem'>
                <span className='featureTitle'>
                Sales
                </span>
                <div className='featuredMoneyContainer'>
                <span className='featureMoney'>
                Rs.10,000
                </span>
                <span className='featureMoneyRate'>
                +6.4 <ArrowDropUp className='arrowup'/>
                </span>
                </div>
                <span className='featureCompare'>Sales Last Month</span>
            </div>
        </div>
    );
};

export default Featured;