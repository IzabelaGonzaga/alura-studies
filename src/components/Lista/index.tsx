import React from "react";
import styles from './Lista.module.scss'

export default function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }];

    return(
        <aside className={styles.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((tarefa, index) => <li key={index} className={styles.item}>
                                            <h3> {tarefa.tarefa} </h3>
                                            <span> {tarefa.tempo} </span>
                                        </li>
                )} 
            </ul>
        </aside>
    )
}