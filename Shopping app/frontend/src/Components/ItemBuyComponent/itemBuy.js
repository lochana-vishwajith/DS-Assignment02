import React, { Component } from 'react';

import TextInput from '../TextInputComponent/textInputComponent';
import image from '../../Images/Rolex.jpeg';
import TextView from '../TextViewComponent/textViewComponent';

class itemBuy extends Component {
    render() {
        return (
            <div>
                <div className="AddressDiv">
                    <div className="AddressSub1">
                        <h1 className="AddText">Billing Details</h1><hr className="billingHr"/><br/>
                        <TextInput
                            type = {"text"}
                            textFeildName ={"Biller's Name"}
                            placeholder = {"Enter Your Name"}
                        />
                        <TextInput
                            type = {"email"}
                            textFeildName ={"Email"}
                            placeholder = {"Enter Your email"}
                        />
                        <TextInput
                            type = {"text"}
                            textFeildName ={"Phone Number"}
                            placeholder = {"Enter Your phone number"}
                        />
                        <TextInput
                            type = {"text"}
                            textFeildName ={"Billing Address"}
                            placeholder = {"Enter Your address"}
                        />
                    </div>
                    <div className="OrderSum">
                        <h1 className="AddText">Order Summary</h1><hr className="billingHr"/><br/>
                        <div className="orderSumSub11">
                            <div className="orderSumSub11Sub1">
                                <img src= {image} className="itemImgBuy"/> 
                            </div>
                            <div className="orderSumSub11Sub2">
                            <TextView
                                label={"Rolex men's watch"}
                                id = {"itemBuyImg"}
                                className = {"itemBuyImg"}
                            />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default itemBuy;