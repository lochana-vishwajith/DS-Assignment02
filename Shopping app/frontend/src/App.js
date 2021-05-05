import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Header from './Components/HeaderComponent/headerComponent';
import Home from './Components/HomeComponent/home';
import itemDescription from './Components/ItemDescriptionComponent/itemDescription';
import ItemBuy from './Components/ItemBuyComponent/itemBuy';
import Login from './Components/loginComponent/login';
import Register from './Components/RegisterComponent/register';

class App extends Component {
  
  render(){

    return (

      <div className="App">
        <Router>
          
            <Header/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/itemDescription/:id" component={itemDescription}/>
              <Route exact path="/itemBuy" component={ItemBuy}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
          
        </Router>
      </div>
    );
  }
 
} 

export default App;
