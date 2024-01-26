import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 6

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}

            />
            <Routes>
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" key="business" pageSize={this.pageSize} category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" key="entertainment" pageSize={this.pageSize} category="entertainment" />} />
              <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" key="general" pageSize={this.pageSize} category="general" />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" key="health" pageSize={this.pageSize} category="health" />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" key="science" pageSize={this.pageSize} category="science" />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" key="sports" pageSize={this.pageSize} category="sports" />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" key="technology" pageSize={this.pageSize} category="technology" />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
