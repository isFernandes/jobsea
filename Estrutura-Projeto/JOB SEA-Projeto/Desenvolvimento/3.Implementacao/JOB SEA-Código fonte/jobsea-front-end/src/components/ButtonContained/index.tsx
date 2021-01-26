import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export { }

interface ButtonProps {
    text: string,
    routeParams?: any,
    type?: any,
    onClick?: any,
}

/**
 * 
 * @param param0 Botao preenchido
 */
const ButtonContained: React.FC<ButtonProps> = ({ text, routeParams, type, onClick }) => {
    return (
        <button id="buttonContained" type={type} onClick={()=>{
            onClick()
        }}>
            <Link style={{ color: '#3c7380' }} className="linking-button" to={routeParams}>
                {text}
            </Link>
        </button>
    )
}

export default ButtonContained;