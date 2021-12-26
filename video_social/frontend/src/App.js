import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

import Header from './components/header/header';
import AllVideos from './components/videos/videos';
import CategoryDetail from './components/category_detail/category_detail'
import VideoDetail from './components/video_details/video_details';
import AuthorDetail from './components/author/author';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        
          <Switch>
            <Route path="/" exact component={ AllVideos}/>
            <Route path="/category/:id"exact component={CategoryDetail}/>
            <Route path="/videos/:id"exact component={VideoDetail}/>
            <Route path = "/author/:id"exact component={AuthorDetail}/>
          </Switch>
      
      
      </Router>
    </div>
  );
}

export default App;
