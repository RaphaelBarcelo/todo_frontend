import React from 'react';
import './App.css';
import TodoPage from './Components/todoPage';

function App() {
    return (
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Template TodoMVC</title>
        <link rel="stylesheet" href="node_modules/todomvc-common/base.css"/>
        <link rel="stylesheet" href="node_modules/todomvc-app-css/index.css"/>
        <link rel="stylesheet" href="css/app.css"/>
    </head>
    <body>
    <TodoPage/>
    <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <p>Created by <a href="http://todomvc.com">you</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
    <script src="node_modules/todomvc-common/base.js"></script>
    <script src="js/app.js"></script>
    </body>
    </html>
  );
}
export default App;