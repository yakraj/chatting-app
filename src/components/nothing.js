import React from "react";
import "./loader.css";

export const Empty = ({ width }) => {
  return (
    <div>
      <img  style={{ width: width ? width : "5em",marginTop: '5em' }} src ={require('./../assects/empty.svg').default} alt ='empty box' /> 
      <h3 style ={{textAlign: 'center'}} >Nothing found</h3>
    </div>
  );
};
