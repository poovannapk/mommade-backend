import React from 'react';
import { AccountCircle, Visibility } from '@material-ui/icons';
import './WidgetLg.css'

const WidgetLg = () => {
    return (
        <div className='widgetlg'>
            <span className='widgettitle'>Last Months Users</span>
            <ul className='widgetul'>
                <li class='widgetli'>
                    <AccountCircle className='imgicon'/>
                    <div className='widgetname'>
                        <span className='widgetcsname'>My Name</span>
                        <span className='widgetcsemail'>test@gmail.com</span>
                    </div>
                    <div className='widgetname'>
                        <span className='widgetcsname'>9882364645</span>
                    </div>
                    <div className='widgetname'>
                        <button className='widgetcscolor'>Yes</button>
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
                    <div className='widgetname'>
                        <span className='widgetcsname'>9882364645</span>
                    </div>
                    <div className='widgetname'>
                        <button className='widgetcscolorinactive'>No</button>
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
                    <div className='widgetname'>
                        <span className='widgetcsname'>9882364645</span>
                    </div>
                    <div className='widgetname'>
                        <button className='widgetcscolor'>Yes</button>
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
                    <div className='widgetname'>
                        <span className='widgetcsname'>9882364645</span>
                    </div>
                    <div className='widgetname'>
                        <button className='widgetcscolor'>Yes</button>
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
                    <div className='widgetname'>
                        <span className='widgetcsname'>9882364645</span>
                    </div>
                    <div className='widgetname'>
                        <button className='widgetcscolorinactive'>No</button>
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

export default WidgetLg;