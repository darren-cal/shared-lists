import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Navbar from './components/layout/Navbar';
import Lists from './components/lists/Lists';
import ListState from './context/lists/ListState';

const App = () => {
  useEffect(() => {
    // Initalize Materialize JS
    M.AutoInit();
  });

  return (
    <ListState>
      <Fragment>
        <Navbar />
        <div className="container">
          <Lists />
        </div>
      </Fragment>
    </ListState>
  );
}

export default App;
