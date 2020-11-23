import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux'
import {selectionReducer} from './store/reducers/startReducer';
import {gameSelectionReducer} from './store/reducers/gameReducer';



const rootReducer = combineReducers({
  game:  gameSelectionReducer, 
  start: selectionReducer,
})

const store = createStore(rootReducer);
console.log(store.getState())

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

