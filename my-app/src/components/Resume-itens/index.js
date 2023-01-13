import React from "react";
import "./style.css";

const ResumeItens = ({title, Icon, value}) => {
    return (
        <div className="Container">
            <div className="Header">
                <div className="Header-Title">
                    <p>{title} <Icon /></p> 
                </div>
            </div>
                <div className="Total">
                    <span>{value}</span>
                </div>
            
        </div>
    )
};

export default ResumeItens;
