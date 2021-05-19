import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class home extends Component {
  state = {
    name: "",
    address: "",
    price: 0,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    const details = {
      name: this.state.name,
      address: this.state.address,
    };

    // axios.post(`http://localhost:5000/deliverDetails`, details).then((res) => {
    //   alert("Delivary details added...");
    // }).catch(error=>{
    // console.log(error);
    // });

    axios
      .get(`http://localhost:5000/locationDetails/${this.state.address}`)
      .then((res) => {
        console.log(res.data);
        // this.state.price = res.price;
        this.setState({
          price: res.data.price,
        });
        console.log(res.price);
      });
  };

  render() {
    const { name, address, price } = this.state;
    return (
      <div className="container">
        <h2 className="mt-2">Delivary information</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={address}
              placeholder="Enter Deliveray Address"
              onChange={this.onChange}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        <div className="mt-4">
          <label>Delivary Cost: {price}</label>
        </div>
      </div>
    );
  }
}
