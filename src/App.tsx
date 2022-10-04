import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Todos_View/list';

function App() {
    let todos: string[] = ['Apple', 'Orange', 'Banana'];
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Table
            // @ts-ignore
            todos={todos}
            //removeCharacter={this.removeCharacter}
        />
      </header>
    </div>
  );
}

export default App;
