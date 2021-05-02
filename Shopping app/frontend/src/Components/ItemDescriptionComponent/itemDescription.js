import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import TextField from '../TextViewComponent/textViewComponent';
import Rolex from '../../Images/Rolex.jpeg';
import Button from '../ButtonComponent/button';

export default class itemDescription extends Component {

    state={
        id : '',
        title : '',
        description : '',
        price: ''

    }

    componentDidMount(){
        const{id} = this.props.match.params;
        this.setState({
            id: id,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="itemNameDiv">
                    
                    <div className="itemNameSub">
                        <div className="itemNameSub1">
                            <img src={Rolex} className="itemImage"/>
                        </div>
                        <div className="itemNameSub2">
                            <br/>
                            <TextField
                                id={"itemName"}
                                label = {"Rolex Luxury Men's Stainless steel Wrist Watch Boys Fashion Watch New 2020 Men's Chain Watch"}
                                className = {"itemName"}
                            />
                            <br/>
                            <div className="itemDescriptionField">
                                <TextField
                                    id={"itemDes"}
                                    label = {"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                                    className = {"itemDes"}
                                />
                            </div>                            
                            <div className="buttonDiv">
                                <div className="buttonDivSub1">
                                    <Link to="/itemBuy"><Button
                                        id={"buyNowBtn"}
                                        value ={"Buy Now"}
                                        classname={"btn btn-outline-danger"}
                                        type = {"button"}
                                    /></Link>
                                </div>
                                <div className="buttonDivSub2">
                                    <Link><Button
                                        id={"addCartBtn"}
                                        value ={"Add To Cart"}
                                        classname={"btn btn-outline-warning"}
                                        type = {"button"}
                                    /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="itemDesDiv">

                </div>         
            </div>
        )
    }
}
