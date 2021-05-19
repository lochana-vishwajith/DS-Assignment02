const validator = require('validator');

//this is an temporary array which saves
const pay =[];


function validateOTP({mobileNumber,pin,amount}) {
    amount =parseFloat(amount);
    //the working pin number is 4444 since this is an dummy api
    if(mobileNumber.length == 10 && parseInt(pin) ==4444){
        //setting the object for payed users
        let obj = {
           mobileNumber,
            amount
        }
        //push the object to dummy array
        pay.push(obj);
        //This is for show the list of users payed via mobile numbers
        console.log('This is the list of Payments saved for Service providers');
        console.log(pay)
        return "Your Payment is Successfully done through your service provider";



    }else{
        return "Sorry your pin number is wrong";
    }
}
// this show the available pay list by the service provider
module.exports = validateOTP;