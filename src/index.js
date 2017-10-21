import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import Home2 from './Home2';


const reducer = (state , action) =>{
  switch (action.type) {
    case "ADD":
      state+=action.payload;
      break;
    case "SUB":
      state-=action.payload;
      break;
    default:

  }
  return state;
}
const store = createStore(reducer,15000);
store.subscribe(()=>{
  console.log("Update Store",store.getState());
})
store.dispatch({
  type:"ADD",
  payload:500
});
store.dispatch({
  type:"SUB",
  payload:500
});

store.subscribe(() => {console.log("store change : " + store.getState()); });



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
