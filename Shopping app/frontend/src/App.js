import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Header from './Components/HeaderComponent/headerComponent';
import Home from './Components/HomeComponent/home';
import itemDescription from './Components/ItemDescriptionComponent/itemDescription';
import ItemBuy from './Components/ItemBuyComponent/itemBuy';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/itemDescription" component={itemDescription}/>
            <Route exact path="/itemBuy" component={ItemBuy}/>
        </Router>
      </div>
    );
  }
 
}

export default App;
