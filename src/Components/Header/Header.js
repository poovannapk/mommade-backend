import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "../HeaderData/HeaderData";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Header.css";

const Header = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <ul className='sidebarList'>
          {HeaderData.map((value, key) => {
            return (
              <li className='sidebarRow' key={key} onClick={() =>{window.location.pathname = value.path}}>
                {""}
                <div id='icon'>{value.icon}</div>
                <div id='title'>{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>     
      </div>
  );
};
export default Header;
