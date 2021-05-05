import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import TextInput from '../TextInputComponent/textInputComponent';
import Button from '../ButtonComponent/button';
import TextView from '../TextViewComponent/textViewComponent';
import axios from 'axios';


//import {UserContext} from '../../App';

// const {state, dispatch} = useContext(UserContext);

class login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }    

    handlerChange = (e) =>{
		this.setState({[e.target.name] : e.target.value})
	}

    handlerSubmit = async (e) => {
        e.preventDefault();

        const loginDetails = {
            email : this.state.email,
            password : this.state.password
        }

        axios.post(`http://localhost:5000/userDetails/login` , loginDetails).then(res => {
            console.log(res.status);
            if(res.status === 200){
                //dispatch({type : "USER", payload : true});
                alert("Login Successfull");
                this.props.history.push('/');
            } 
            
        })

         this.setState({
            email : '',
            password : ''
         })
    }

    render() {
        return (
            <div className = "container">
                <div className = "loginMainDiv">
                    <div className="loginsubDiv1">
                        <br/><h1 className = "loginText">Login to Explore</h1><hr/><br/><br/>
                        <TextInput 
                            type ={"email"}
                            name = {"email"}
                            textFeildName = {"Username/Email"}
                            placeholder = {"abc@gmailcom"}
                            onChange = {this.handlerChange}
                        /><br/>
                        <TextInput 
                            type ={"password"}
                            name = {"password"}
                            textFeildName = {"Password"}
                            placeholder = {"********"}
                            onChange = {this.handlerChange}
                        /><br/>
                        <Button
                            id ={"login"}
                            value = {"Login"}
                            classname = {"btn btn-secondary btn-lg"}
                            type = {"submit"}
                            onSubmit = {this.handlerSubmit}
                        />
                    </div>
                    <div className="loginsubDiv2">
                        <TextView
                            label = {"WELCOME...!!"}
                            id ={"welcomeText"}
                            className = {"welcomeText"}
                        /><br/><br/><br/>
                        <TextView
                            label = {"Are You New to Online Shopping Store?"}
                            id ={"welcomeNote"}
                            className = {"welcomeNote"}
                        />
                        <TextView
                            label = {"You Can Register Here"}
                            id ={"regText"}
                            className = {"regText"}
                        />
                        <Link to="/register"><Button
                            id ={"reg"}
                            value = {"Register"}
                            classname = {"btn btn-outline-info btn-lg"}
                            type = {"submit"}
                        /></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default login;