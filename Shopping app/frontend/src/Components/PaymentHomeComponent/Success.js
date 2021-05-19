import React, { Component } from "react";
import axios from "axios";
import {Link, Redirect} from "react-router-dom"

export default class Success extends Component {
    constructor(props){
        super(props);

    }


    state = {
        cardNo: "",
        cvc:"",
        date:"",
        redirect: false,
        take:"",
        mobileNumber:"",
        amount:"",
        pin:""

    };

componentDidMount() {

      let a = this.props.match.params.method;
        this.setState({take:a})
    }

    onChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value,
        });

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.take == "card"){
        const card = {
            cardNo: this.state.cardNo,
            amount: this.state.amount,
            cvc:this.state.cvc,
            date:this.state.date
        };

        axios.post(`http://localhost:5000/Payments/credit`, card).then((res) => {
            let x = res.data;
            x = x.toString();
            if(x == "Successfully Payed"){
                alert("Payment Success");
                this.setState({redirect:true})
            }else{ alert(res.data)}


        });}else {

            const mobile = {
                mobileNumber: this.state.mobileNumber,
                pin: this.state.pin,
                amount: this.state.amount
            }
            axios.post(`http://localhost:5000/Payments/mobile`,mobile).then((res)=>{
                let x = res.data;
                x = x.toString();
                if((x == "Your Payment is Successfully done through your service provider")){
                    alert("Payment Success");
                    this.setState({redirect:true});
                }else{
                    alert(res.data);
                }
            })

        }

    };


    render() {
//cardNo,amount,cvc,date
        const {redirect}= this.state;
        if (redirect) {
            return <Redirect to='/Payed'/>;
        }
        if(this.state.take === "card"){
        const { cardNo,amount,cvc,date} = this.state;
        return (
            <div className="container">
                <h2 className="mt-2">Enter Card details</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Card No</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cardNo"
                            value={cardNo}
                            placeholder="Enter Card Number"
                            onChange={this.onChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Amount</label>
                        <input
                            type="text"
                            className="form-control"
                            name="amount"
                            value={amount}
                            placeholder="Enter Amount "
                            onChange={this.onChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">CVV NO</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cvc"
                            value={cvc}
                            placeholder="Enter CVV Number "
                            onChange={this.onChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Expire Date</label>
                        <input
                            type="text"
                            className="form-control"
                            name="date"
                            value={date}
                            placeholder="Enter Expire date of Your Credit Card "
                            onChange={this.onChange}
                        ></input>
                    </div>
                    <button type="submit" className="btn btn-primary">
                       PAY
                    </button>
                </form>
            </div>
        );
    }else{
            const { mobileNumber,pin,amount} = this.state;
            return (
                <div className="container">
                    <h2 className="mt-2">Enter Card details</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Mobile No</label>
                            <input
                                type="number"
                                className="form-control"
                                name="mobileNumber"
                                value={mobileNumber}
                                placeholder="Enter Mobile Number"
                                onChange={this.onChange}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">PIN</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pin"
                                value={pin}
                                placeholder="Enter OTG Recieved "
                                onChange={this.onChange}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Amount</label>
                            <input
                                type="text"
                                className="form-control"
                                name="amount"
                                value={amount}
                                placeholder="Enter AMount to be pay "
                                onChange={this.onChange}
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            PAY
                        </button>
                    </form>
                </div>
            );
        }
    }

}
