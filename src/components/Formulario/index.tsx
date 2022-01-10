import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from '../Botao';
import styles from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas} : Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas((tarefasAntigas) => 
            [...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label> Adicione um novo estudo </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    value={tarefa}
                    onChange={(ev) => setTarefa(ev.target.value)}
                    placeholder="O que você quer estudar?" 
                    required
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo"> Tempo </label>
                <input 
                    type="time" 
                    step="1" 
                    name="tempo" 
                    value={tempo} 
                    onChange={(ev) => setTempo(ev.target.value)} 
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00" 
                />
            </div>
            <Botao type="submit"> 
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario;