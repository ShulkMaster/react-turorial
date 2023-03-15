import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { UserList } from './components/UserList/UserList';
import { WidthDisplay } from './components/WidthDisplay/WidthDisplay';
import { Img } from './components/Img/Img';
import { Show } from './components/Show/Show';
import { Clock } from './components/Clock/Clock';

type AppProps = {
  name: string;
  id?: number;
};

function App(props: AppProps) {
  const [id, setId] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{props.name}</h2>
        <p>
          Edit <code>src/App.tsx</code> {props.id}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn  with tsx
        </a>
      </header>
      <div>
        <Counter onCountChange={setId} />
        <UserList id={id} />
        {/*<WidthDisplay />*/}
        {/*<Show>*/}
        {/*  <Clock clean={false} />*/}
        {/*</Show>*/}
      </div>
    </div>
  );
}

export default App;
