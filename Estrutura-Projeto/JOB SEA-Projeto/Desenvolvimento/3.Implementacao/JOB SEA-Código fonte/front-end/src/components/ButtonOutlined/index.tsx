import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export { }


interface ButtonProps {
    text: string,
}

/**
 * 
 * @param param0 Botao vazado
 */
const ButtonOutlined: React.FC<ButtonProps> = ({ text }) => {
    return (
        <>
            <button id="remember" >
                <Link style={{ color: '#fff' }} className="linking-button" to="/">
                    {text}
                </Link>
            </button>

        </>
    )
}

export default ButtonOutlined;