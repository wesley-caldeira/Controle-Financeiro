import React from "react";
import ResumeItens from "../Resume-itens";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";
import "./style.css";

const Resume = () =>{
    return (
        <main>
            <ResumeItens title="Entradas" Icon={ FaRegArrowAltCircleUp } value="1000" />
            <ResumeItens title="Saídas" Icon={ FaRegArrowAltCircleDown } value="1000" />
            <ResumeItens title="Total" Icon={ FaDollarSign } value="1000" />
        </main>
    )
};

export default Resume;
