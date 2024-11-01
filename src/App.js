
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Analytics from './Analytics';
// import VisitCounter from './Component/visitCounter';



import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

export default class App extends Component {
  render() {

    return (
      <div>
        <Navbar />
        <Analytics />
        {/* <VisitCounter /> */}
        <News pageSize={9} page={1} />
      </div>
    )
  }
}

