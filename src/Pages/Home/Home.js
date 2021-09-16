import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/Featured/Featured';
import { data } from '../../Components/DummyData/DummyData';
import WidgetSmall from '../../Components/WidgetSmall/WidgetSmall'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
<Featured />
<Chart data={data} title='User Analytics' grid dataKey='Activeuser'/>
<div className='homeWidget'>
<WidgetSmall />
<WidgetLg />

</div>
        </div>
    );
};

export default Home;