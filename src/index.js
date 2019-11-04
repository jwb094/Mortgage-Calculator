import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


function Elements(props){
    console.log(props);
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
                amount : '',
                rate : '',
                years : '',
                RateP_months:'',
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
                this.setState({
                    RateP_months:this.state.rate / 12
                });
                //this.state.interest_RateP_months =  Math.floor(this.state.rate / 12);
                
                //Math.round();
               // console.log(this.state.interest_RateP_months);
                //this.state.interest_RateP_months =  this.state.interest_RateP_months + 1;
               
                console.log(this.state.RateP_months);
                
            //     //convert to  units to metric
            //     if (hoption === 'Inches') {
            //        //this.state.height = (this.state.height * 2.54) / 100;
            //         this.setState({
            //             height:(this.state.height * 2.54) / 100
            //         });
            //     }
            //     if (woption === "Ibs") {
            //        // this.state.weight = this.state.weight / 2.2046;
            //         this.setState({
            //             weight:this.state.weight / 2.2046
            //         });
            //     }
            //     console.log(this.state.height);
            //     console.log(this.state.weight);
      
                
            //    // this.state.result = this.state.weight / (Math.pow(this.state.height,2));
            //     this.setState({
            //         result:this.state.weight / (Math.pow(this.state.height,2))
            //     });
            //     //this.state.result = Math.round(this.state.weight / Math.pow(this.state.height, 2) * 10000);
            //     console.log(this.state.result);
               
            //     if (this.state.result <= 18.5) {
            //         //this.state.message = 'Underweight';
            //         this.setState({
            //             message:'Underweight'
            //         });
            //     }  if (this.state.result >= 18.5 ) {
            //        // this.state.message = 'Normal';
            //         this.setState({
            //             message:'Normal'
            //         });
            //     }  if (this.state.result >= 25) {
            //         //this.state.message = 'Obese';
            //         this.setState({
            //             message:'Obese'
            //         });
            //     } if (this.state.result > 30) {
            //         //this.state.message = 'Overweight';
            //         this.setState({
            //             message:'Overweight'
            //         });
            //     }
             

            }

            reset(){
                document.getElementById('weight').value  = "";
                document.getElementById('height').value  = "";;
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
