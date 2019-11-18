import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


function Elements(props){
  //  console.log(props);
        return (   
            <div class="row">

                    <h1 class="col-md-12">Mortagage CALCULATOR</h1>
                  
                    
                    {/* <h6 class="card-title" id="balance">Balance : {props.balance}</h6> */}
            
        
                    <div class="card-body col-md-12">
                    <label>Mortagage Amount</label> 
                        <input type="text" class="form-control col-md-6" id="amount" ></input>
                  
                    </div>
                    <div class="card-body col-md-12">
                    <label>Interest Rate</label> 
                        <input type="text" class="form-control" id="rate" ></input>
                  
                    </div>
                        <div class="card-body col-md-12">
                        <label>Years</label> 
                        <input type="text" class="form-control" id="years" ></input>
                        
                        </div>
                        <div className="col-md-12">
                        &nbsp;
                            <button type="button" class="btn btn-dark bet" onClick={props.onClickCalculate}>Calcaluate</button>&nbsp;
                            <button type="button" id="reset-game" class="btn btn-secondary reset-game" onClick={props.onClickReset}>Reset</button>
                        </div>
                      <br/>
                      <div>
                           &nbsp; &nbsp;<h6 >&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Result : {props.message}</h6>
                      </div>
                       
        </div>
    )
    }

    class Form extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                amount : 0,
                rate : 0,
                years : 0,
                RateP_months:0,
                 message:''
            };
            
            } 
    
          
            calculate(){
                this.setState({
                    amount:document.getElementById('amount').value,
                    rate:document.getElementById('rate').value,
                    years:document.getElementById('years').value
                });
               /* this.setState({
                    rate:document.getElementById('rate').value
                });
                this.setState({
                
                    years:document.getElementById('years').value
                });*/
                //console.log(this.state.rate);
                this.state.rate  = this.state.rate * 0.01;
                //step 1 & 2
                var month_rate = this.state.rate/12;
                var monthlyrate = this.state.rate/12;
                var monthlyrate = monthlyrate +1;
                //var ratepyear = this.state.rate / 12;
                //var ratepyear = ratepyear + 1;
                console.log(monthlyrate);
                console.log(month_rate);
                //step 3
                let term  = this.state.years * 12;
                console.log(term);
                //step 4
                var factor = Math.pow(monthlyrate,-term);
                console.log(factor); 

                //step 5
                var denominator = 1  - factor ;
                console.log(denominator); 
                //step 6 
                var step6 = month_rate/denominator;

                var monthly_payment = this.state.amount * step6;
                console.log(monthly_payment);
                
                var monthly_payment = monthly_payment.toFixed(2);
                // this.setState({
                //     RateP_months:(this.state.rate / 12) + 1
                // });
                //step 3
                //var years_in_month = this.state.years * 12;
                //console.log(years_in_month);

                //step 4
               // var years_of_payment_in_month = Math.pow(ratepyear, -years_in_month);
                //console.log(years_of_payment_in_month);


                //step 5
                //var years_of_payment_in_month = years_of_payment_in_month - 1;
                
                
                //step 6
              //  var years_of_payment_in_month = years_of_payment_in_month / value; 

                //step 7
               // var monthly_payment = Math.round(this.state.amount * years_of_payment_in_month); 
               // console.log(monthly_payment);
                // this.setState({ 
                //     years:this.state.years * 12
                // });
              
                  /*
                  let promise = new Promise(function(resolve, reject) {
                    

                  })
                  .then( result =>{

                  });
                  */
                //step 4
                //var rates = Math.pow(ratepyear,-180) ;
                // this.setState({
                //     RateP_months:Math.pow(this.state.RateP_months,-180)
                // });
                //this.state.interest_RateP_months =  Math.floor(this.state.rate / 12);
                
                //Math.round();
               // console.log(this.state.interest_RateP_months);
                //this.state.interest_RateP_months =  this.state.interest_RateP_months + 1;
               
                //console.log(ratepyear);
                //console.log(years_in_month);
                //console.log(rates);

                // var showOff = function (phone) {
                //     return new Promise(
                //         function (resolve, reject) {
                //             var message = 'Hey friend, I have a new ' +
                //                 phone.color + ' ' + phone.brand + ' phone';
                
                //             resolve(message);
                //         }
                //     );
                // };
            }



        //NEED TO FIX UP FRONTEND VIEW
            
            render() {
            
            return( 
                <Elements 
                onClickCalculate={() => this.calculate()}
                onClickReset={() => this.reset()}
                message={this.state.message}
                />
                

                
          
                )
            }
    
    
    } 



ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
