import React from 'react';
// import logo from './logo.svg';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>Making the google clone</h1>
       */}
      {/* home page
      serach page (search result page) */}
        <Router>
          <Switch>
            {/* <Router></Router> */}
            {/* forceRefresh={true} */}
            <Route path="/search">
               <SearchPage/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
