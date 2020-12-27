import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export { }

interface ButtonProps {
    text: string,
}

/**
 * 
 * @param param0 Botao preenchido
 */
const ButtonContained: React.FC<ButtonProps> = ({ text }) => {
    return (
        <>

            <button
                id="submit"
            >
                <Link style={{ color: '#3c7380' }} className="linking-button" to="/">
                    {text}
                </Link>
            </button>
        </>
    )
}

export default ButtonContained;