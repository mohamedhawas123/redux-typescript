import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {reducers} from './reducers/index'
import App from './App'


const store = createStore(reducers, applyMiddleware(thunk))



const app = (
  <Provider store={store}>
    <App />
  </Provider>
)



ReactDOM.render(app, document.querySelector('#root'));


/*

const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>

  

}
*/