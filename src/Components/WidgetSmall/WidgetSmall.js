import { AccountCircle, Visibility } from '@material-ui/icons';
import React from 'react';
import './WidgetSmall.css'
const WidgetSmall = () => {
    return (
        <div className='widgetsm'>
            <span className='widgettitle'>New Join Members</span>
            <ul className='widgetul'>
                <li class='widgetli'>
                    <AccountCircle className='imgicon'/>
                    <div className='widgetname'>
                        <span className='widgetcsname'>My Name</span>
                        <span className='widgetcsemail'>test@gmail.com</span>
                    </div>
                    <button className='widgetbtn'>
                        <Visibility className='visibleicon'/>
                        Display
                    </button>
                </li>
                <li class='widgetli'>
                    <AccountCircle className='imgicon'/>
                    <div className='widgetname'>
                        <span className='widgetcsname'>My Name</span>
                        <span className='widgetcsemail'>test@gmail.com</span>
                    </div>
                    <button className='widgetbtn'>
                        <Visibility className='visibleicon'/>
                        Display
                    </button>
                </li>
                <li class='widgetli'>
                    <AccountCircle className='imgicon'/>
                    <div className='widgetname'>
                        <span className='widgetcsname'>My Name</span>
                        <span className='widgetcsemail'>test@gmail.com</span>
                    </div>
                    <button className='widgetbtn'>
                        <Visibility className='visibleicon'/>
                        Display
                    </button>
                </li>
                <li class='widgetli'>
                    <AccountCircle className='imgicon'/>
                    <div className='widgetname'>
                        <span className='widgetcsname'>My Name</span>
                        <span className='widgetcsemail'>test@gmail.com</span>
                    </div>
                    <button className='widgetbtn'>
                        <Visibility className='visibleicon'/>
                        Display
                    </button>
                </li>
                <li class='widgetli'>
                    <AccountCircle className='imgicon'/>
                    <div className='widgetname'>
                        <span className='widgetcsname'>My Name</span>
                        <span className='widgetcsemail'>test@gmail.com</span>
                    </div>
                    <button className='widgetbtn'>
                        <Visibility className='visibleicon'/>
                        Display
                    </button>
                </li>
            </ul>
            <button className='viewall'>
                        View All
                    </button>
        </div>
    );
};

export default WidgetSmall;