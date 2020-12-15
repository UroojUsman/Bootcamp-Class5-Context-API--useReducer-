import React, {useReducer}from 'react';
import CounterReducer from "./CounterReducer";
const Child2=()=>
{
    let [state,dispatch]=useReducer(CounterReducer,0);
    return(
       
        <div>
            <h1>Counter by Reducer</h1>
            <h2>Counter Value={state}</h2>
            <button onClick={()=>dispatch("INCREAMENT")}>Increament</button>
        </div>
    );
}

export default Child2;