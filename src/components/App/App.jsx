import React from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';



function App() {

  return (
    <div className='App'>
      <Router>
          {/*======<FEELING ROUTE>==============*/}
        <Route exact path='/'>
          <Feeling />
        </Route>
          {/*======<UNDERSTANDING ROUTE>==============*/}
        <Route exact path='/Understanding'>
          <Understanding />
        </Route>

      </Router>
    </div>
  );
}

export default App;
