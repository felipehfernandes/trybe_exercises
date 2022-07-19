import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Fazer café', 'Estudar React', 'Estudar Node'];

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    )
  }
}

export default App;
