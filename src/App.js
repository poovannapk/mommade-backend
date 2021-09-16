import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Analytics from './Pages/Analytics/Analytics';
import Coupons from './Pages/Coupons/Coupons';
import CreateCategory from './Pages/CreateCategories/CreateCategory';
import Header from './Components/Header/Header';
import StoreAddress from './Pages/StoreAddress/StoreAddress';
import Users from './Pages/Users/Users';
import FoodMenu from './Pages/FoodMenu/FoodMenu';
import Orders from './Pages/Orders/Orders';
import Customers from './Pages/Customers/Customers'
import Home from './Pages/Home/Home';
import HeaderLogo from './Components/HeaderLogo/HeaderLogo'


function App() {
  return (
    
    <div className="App">
    <Router>
    <HeaderLogo />
    <div className='sidebarContainer'>
    <Route  component={Header} />  
    <Switch>
    <Route  component={Home}/>
    <Route  path = '/category' component={CreateCategory}/>
    <Route  path='/foodmenu' component={FoodMenu}/>
    <Route  path='/orders' component={Orders} />
    <Route  component={Users} />
    <Route  path='/customers' component={Customers} />
    <Route  path='/analytics' component={Analytics} />
    <Route  path='/coupons' component={Coupons} />
    <Route  path='/address' component={StoreAddress} />
    </Switch>
    </div>
    {/* <Route component={HeaderLogin} /> */}
   
    </Router>
    </div>
  );
}

export default App;
