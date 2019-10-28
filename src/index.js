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
            
            
                    
                        <div class="card-body col-md-6">
                        <input type="text" class="form-control" id="height" ></input>
                        <select id="heightoptions">
                            <option value="m">metres</option>
                            <option value="Inches">Inches</option>
                        </select>
                        </div>
                        <div class="card-body col-md-6">
                        <input type="text" class="form-control" id="weight" ></input>
                        <select id="weightoptions">
                            <option value="kg">kg</option>
                            <option value="Ibs">Ibs</option>
                        </select>
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


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
