import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import TextField from '../TextViewComponent/textViewComponent';
import Button from '../ButtonComponent/button';
import axios from 'axios';

export default class itemDescription extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            Items : ""
        };
    }    

    componentDidMount(){
        
        axios.get(`http://localhost:5000/itemDetails/${this.props.match.params.id}`)
        .then(result => {
            
            console.log(result.data.item);
            this.setState({isLoaded:true , Items : result.data.item});
            
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        
        return (<ul>
            
            <div className="container">
                
                <div className="itemNameDiv">
               
                    <div className="itemNameSub" >
                    
                        <div className="itemNameSub1">
                            {/* <img src={this.state.item.image} className="itemImage"/> */}
                        </div>
                        <div className="itemNameSub2">
                            <br/>
                            <TextField
                                id={"itemName"}
                                label = {this.state.Items.title}
                                className = {"itemName"}
                            />
                            <br/>
                            <div className="itemDescriptionField">
                                <TextField
                                    id={"itemDes"}
                                    label = {this.state.Items.description}
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
            </ul> )
        }
}
