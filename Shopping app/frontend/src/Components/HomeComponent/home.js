import React, { Component } from 'react';
import CardView from '../CardViewComponent/cardView';

const items = [
    
    {
        id: 1,
        title : 'Rolex Watch',
        text : 'Made in England. diameter of the face : 3.5cm, weight : 178g, made with 22k gold and pure silver. Price : RS.120478.00',
        btnName : "show more"
    },
    {
        id: 2,
        title : 'Levis t-Shirt',
        text : 'Made in Sri Lanka. Sizes are available in S/M/L/XL/XXL. Pure cotton. Price : 1250.00',
        btnName : "show more"
    },
    {
        id: 3,
        title : 'Turbo Charger for evo 7',
        text : 'Made in England. rpm of the charger : 20000rpm. Price : 27500.00',
        btnName : "show more"
    },
    {
        id: 4,
        title : 'Samsumg note 9',
        text : 'Made in Thailand. Screen Size : 8.7 inches. Bluetooth/NFC/23mp camera',
        btnName : "show more"
    },
    {
        id: 5,
        title : 'Nike Shoes',
        text : 'Made in Thailand. Available sizes: 30-42. Original Lether',
        btnName : "show more"
    },
    
]
class home extends Component {
   
    render() {
        return (
            <div className="cardViewDiv">
                {items.map(item =>(
                    <div className = "cardViewSubHome" key={item.id}>
                        <CardView 
                        title = {item.title}
                        text = {item.text}
                        btnName = {item.btnName}
                        id = {item.id}
                        path ={"/itemDescription"}
                        />
                    </div>
                ))}               
            </div>
        )
    }
}
export default home;