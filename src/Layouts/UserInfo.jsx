import React from "react";
import './../App.css';

const UserInfo=(props)=>
{
  return <div className="userinfo ">
    <h2>{props.details.name}</h2> 
    {props.details && props.details.age} {props.details && props.details.gender} { props.details && props.details.dob}
    </div>;
};
export default UserInfo;
    
