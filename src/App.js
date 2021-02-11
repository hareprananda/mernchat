import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { io } from 'socket.io-client';
import dotenv from "dotenv";
import CryptoJS from "crypto-js";

dotenv.config();
function App() {
  
  useEffect(()=> {
    const socket = io(process.env.REACT_APP_NODESERVER);

    // setInterval(() => {
      
    //   socket.emit("sendMessage",({pesan : encrypted}),(response) => {
    //     console.log(response)
    //   })
    // },10000)

    var kuncey =CryptoJS.AES.encrypt("INI adalah pesan","KEY CRYPTO").toString();
    var str ="ini adalah pesan";
    var encrypted =CryptoJS.AES.encrypt(JSON.stringify({str}),kuncey).toString();


  
    var decrypted = CryptoJS.AES.decrypt(encrypted,kuncey).toString(CryptoJS.enc.Utf8)

    console.log(decrypted)
   
    
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
