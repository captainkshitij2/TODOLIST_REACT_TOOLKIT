// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );


import ReactDOM from 'react-dom'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import todoSlice from './Redux/todoSlice'

const store = configureStore({reducer:{todoSlice}})
ReactDOM.render
(<Provider store={store}> <App/></Provider>,document.getElementById('root'));
