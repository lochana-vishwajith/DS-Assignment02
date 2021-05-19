import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

//--------Payment API

import PaymentHeader from './Components/HeaderComponent/header';  
import PaymentHome from './Components/PaymentHomeComponent/PaymentHome';
import Success from './Components/PaymentHomeComponent/Success';
import Payed from './Components/PaymentHomeComponent/Payed'


//-------------------
import Header from "./Components/HeaderComponent/headerComponent";
import Home from "./Components/HomeComponent/home";
import itemDescription from "./Components/ItemDescriptionComponent/itemDescription";
import ItemBuy from "./Components/ItemBuyComponent/itemBuy";
import LoginCom from "./Components/loginComponent/Login";
import Register from "./Components/RegisterComponent/register";
import Cart from "./Components/CartComponent/cart";
//------------IT18014396
import DeliveryHeader from "./components/DeliveryHeaderComponent/header";
import DeliveryFooter from "./components/DeliveryFooterComponent/footer";
import DeliveryHome from "./components/DeliveryHomeComponent/home";
//----------------------

import { initialState, reducer } from "../src/Reducer/UseReducer";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/itemDescription/:id"
              component={itemDescription}
            />
            <Route exact path="/itemBuy/:id" component={ItemBuy} />
            <Route exact path="/login" component={LoginCom} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route to="/:id" component={DeliveryHome} />

            <Route exact path="/" component={PaymentHome}/>
            <Route exact path= "/Success/:method" component={Success}/>
            <Route exact path = "/Payed" component={Payed}/>
            
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
