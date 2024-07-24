import React from "react";
import Greeting from './Greeting'

const Hello = (props) => {
    return (
        <div>
            안녕 {props.name} 색깔: {props.color}
            <Greeting subject='리액트' />
            
        </div>
    );
};

export default Hello;