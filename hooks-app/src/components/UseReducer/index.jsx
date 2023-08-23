import React, { useReducer, useState } from "react";

const initialValue = { count: 0 };


function reducer(state, action) {
    switch(action.type){
        case "inc": return {...state,count:state.count+1}
        case "incByValue": return {...state,count:state.count+action.payload}
        case "dec": return {...state,count:state.count-1}
        case "reset": return {count:0}
    }

    
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h2>UseReducer</h2>
      state : {JSON.stringify(state)}
      <button onClick={ () => dispatch({type: 'inc'})}>inc</button>
      <button onClick={ () => dispatch({type: 'dec'})}>dec</button>
      <button onClick={ () => dispatch({type: 'reset'})}>reset</button>
      <button onClick={ () => dispatch({type: 'incByValue',payload:2})}>inc by 2</button>
    </>
  );
}

export default UseReducer;
