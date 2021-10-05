import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



let defualtState = [
		{ age : 32,	name : 'Luffy',	job : 'FE Dev'},
    { age : 27, name : 'Ahn', job : 'FE Dev'}
	]

function reducer(state = defualtState, 액션) {
  if (액션.type === '나이증가') {

    let copy = [...state];
    copy[0].age++;
    return copy

  } else if (액션.type === '나이감소') {

    let copy = [...state];
    copy[0].age--;
    return copy

  } 
  else {
    return state
  }
} 

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
