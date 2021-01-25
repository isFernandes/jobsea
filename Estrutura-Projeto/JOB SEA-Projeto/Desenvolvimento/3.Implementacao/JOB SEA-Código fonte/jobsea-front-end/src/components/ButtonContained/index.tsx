import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export { }

interface ButtonProps {
    text: string,
    routeParams?: any,
    type?: any,
}

/**
 * 
 * @param param0 Botao preenchido
 */
const ButtonContained: React.FC<ButtonProps> = ({ text, routeParams, type }) => {
    return (
        <button id="buttonContained" type={type}>
            <Link style={{ color: '#3c7380' }} className="linking-button" to={routeParams}>
                {text}
            </Link>
        </button>
    )
}

export default ButtonContained;