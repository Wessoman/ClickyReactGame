import React from "react";
import "./style.css";

function Nav(props){
    return <div className="navbar">
        <h5>"ID and shoot down all the Zakus, Amuro!"</h5>
        <span className="counter">Correct: {props.count}/12</span>
    </div>
}

export default Nav;