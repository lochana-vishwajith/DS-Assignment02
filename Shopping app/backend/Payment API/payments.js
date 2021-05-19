//this is an npm package to validate credit card details
const validator = require('validator');

//these are dummy values for API
const credit_card =[
    {
        cardNo:"378282246310005",
        amount:parseFloat("50000"),
        cvc:"",
        expire_date:validator.toDate("2022/01/04")

    },
    {cardNo:"378282246310006",
        amount:parseFloat("80000"),
        cvc:"22232",
        expire_date:validator.toDate("2020/11/04")},

    {
        cardNo:"378282246310007",
        amount:parseFloat("60000"),
        cvc:"22222",
        expire_date:validator.toDate("2021/11/04")}
]

//function to validate a card details
function validate_Card_Info({cardNo,amount,cvc,date}) {

    console.log("hiiii");
    //change string values to numbers
    amount=parseFloat(amount);

    //track out that is the entered details are in our Dummy card details array
    let count = 0;
    let msg ="";

//make the date string into a date type
     date = validator.toDate(date);
     //check weather card is a credit card
    if(validator.isCreditCard(cardNo)) {
        console.log("credit card");
        //looping through dummy card details  Array
        (credit_card.map((key) => {
            if (key.cardNo == cardNo && key.cvc == cvc && (Date.parse(key.expire_date) == Date.parse(date))) {
                    count =1;
                //date parse is used to check out the valid expired date is expired or not
                if (Date.parse(new Date()) > Date.parse(key.expire_date)) {

                    msg = "Sorry your card is expired";
                }else{
                    //to check the amount is available at dummy details
                    if (key.amount > amount) {


                       msg = `Successfully Payed`;

                    } else {


                        msg = `Sorry Your Credit is Running Low `
                    }
                }
            }
        }))
        //if the details are not in our api
      if (count == 1) {
          return msg

        }else{
          return "Your Credit card Cannot validate from our API"
      }
    }else{
        //if the credit card number is wrong
        console.log("not an credit card")
        return "Sorry this is not an Credit card"
    }
}

//exporting the module

module.exports = validate_Card_Info;
