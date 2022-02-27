import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';



//====<Reducer>=========================================================================
  // Create one feedback reducer to hold all the action types for the app
  const feedbackReducer = (state = [], action) => { // Make state an object to be able to hold the different action.payloads
    // Feeling action
    if (action.type === 'FEELING'){
      state = {...state, feeling: action.payload} // Spread state and set the `components` property equal to it's action.payload
    }
    // Understanding action
      if (action.type === 'UNDERSTANDING'){
        state = {...state, understanding: action.payload} // Spread state and set the `components` property equal to it's action.payload
      }
    // Support action
    if (action.type === 'SUPPORT'){
      state = {...state, support: action.payload} // Spread state and set the `components` property equal to it's action.payload
    }
    // Comments action
    if (action.type === 'COMMENTS'){
      state = {...state, comments: action.payload} // Spread state and set the `components` property equal to it's action.payload
    }
    return state; // Return the state object, able to useSelector to render the specific properties on the Review component
  };


//====<Store>=========================================================================
const storeInstance = createStore(

    combineReducers({
        feedbackReducer,
    }),
    // Tell redux that we want to use our new logger
    applyMiddleware(
      logger 
    )
  );


//====<Provider lets redux and react talk to each other>=============================
ReactDOM.render(
    <Provider store={storeInstance}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);



registerServiceWorker();
