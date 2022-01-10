import React from "react";
import styles from './Botao.module.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao({type, onClick, children}: Props){
    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={styles.botao}
        >
            {children}
        </button>
    )
}

export default Botao;