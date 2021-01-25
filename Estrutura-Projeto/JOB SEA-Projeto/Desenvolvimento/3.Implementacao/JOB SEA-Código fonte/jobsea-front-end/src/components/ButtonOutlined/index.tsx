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
 * @param param0 Botao vazado
 */
const ButtonOutlined: React.FC<ButtonProps> = ({ text, routeParams, type }) => {
    return (
        <button id="buttonOutlined" type={type} >
            <Link style={{ color: '#fff' }} className="linking-button" to={routeParams}>
                {text}
            </Link>
        </button>
    )
}

export default ButtonOutlined;