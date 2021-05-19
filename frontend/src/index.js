import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App.js';
import "bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/bootstrap.min.css";
// ReactDOM.render(
//   // <React.StrictMode>
//       <div className="d-flex justify-content-center"> hi </div>
//   // </React.StrictMode>
//   , 
//   document.getElementById('root')
// );
const rootDiv = document.getElementById("root");
render(<App/> , rootDiv);