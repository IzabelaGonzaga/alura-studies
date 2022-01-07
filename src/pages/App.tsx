import React from 'react';
import Formulario from '../components/Formulario'
import Lista from '../components/Lista'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
