import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { UserList } from './components/UserList/UserList';
import { WidthDisplay } from './components/WidthDisplay/WidthDisplay';
import { Img } from './components/Img/Img';
import { Show } from './components/Show/Show';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {/*<Counter />*/}
        {/*<UserList />*/}
        {/*<WidthDisplay />*/}
        {/*<Show>*/}
        {/*  <Img />*/}
        {/*</Show>*/}
      </div>
    </div>
  );
}

export default App;
