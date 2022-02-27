import React from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
//=============<IMPORT COMPONENTS>====================================}
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
//=============<IMPORT COMPONENTS>====================================}



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
          {/*======<SUPPORT ROUTE>==============*/}
        <Route exact path='/Support'>
          <Support />
        </Route> 
          {/*======<COMMENTS ROUTE>==============*/}
        <Route exact path='/Comments'>
          <Comments />
        </Route>
          {/*======<REVIEW ROUTE>==============*/}
        <Route exact path='/Review'>
          <Review />
        </Route>
        {/*======<THANK YOU ROUTE>==============*/}
        <Route exact path='/ThankYou'>
          <ThankYou />
        </Route>
    {/*----------------------<END ROUTES>----------------------------*/}
      </Router>
    </div>
  );
}

export default App;
