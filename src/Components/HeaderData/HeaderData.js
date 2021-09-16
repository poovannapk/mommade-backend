import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from '@material-ui/icons/Category';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartIcon from '@material-ui/icons/PieChart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailIcon from '@material-ui/icons/Email';
import ShopIcon from '@material-ui/icons/Shop';
import StoreIcon from '@material-ui/icons/Store';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const HeaderData = [
    {
        title:'Home',
        icon:<HomeIcon />,
        path: '/home'
    },
    {
        title:'Category',
        icon:<CategoryIcon />,
        path: '/category'
    },
    {
        title:'Food Menu',
        icon:<FastfoodIcon />,
        path: '/foodmenu'
    },
    {
        title:'User',
        icon:<AccountCircleIcon />,
        path: '/Users'
    },
    {
        title:'Orders',
        icon:<ShopIcon />,
        path: '/orders'
    },
    {
        title:'Customers',
        icon: <DashboardIcon />,
        path: '/customers'
    },
    {
        title:'Analytics',
        icon:<PieChartIcon />,
        path: '/analytics'
    },
    {
        title:'Location',
        icon:<LocationOnIcon />,
        path: '/location'
    },
    {
        title:'MailBox',
        icon:<EmailIcon />,
        path: '/email'
    },
    {
        title:'Coupons',
        icon:<LocalOfferIcon />,
        path: '/coupons'
    }
]