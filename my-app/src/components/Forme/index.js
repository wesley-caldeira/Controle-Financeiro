import React, { useState } from "react";
import './style.css';

const  Form = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState("");

    const handleSave= () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if(amount < 1) {
            alert("O valor tem que ser positivo! ");
            return;
        }
    };

    return (
        <div className="container">
            <div className="InputContent">
                <label>Descrição</label>
                <input value={desc} onChange={(e) => setDesc (e.target.value)} />
            </div>
            
        </div>
    )
};

export default Form;
