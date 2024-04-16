// App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import WatchList from './components/WatchList';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div><Nav /></div>
        <div className="row">
          <div className="col-md-3 bg-light border-right ">
            <Sidebar />
          </div>
          <div className="col-md-9">
            
            
              <Routes>
                <Route path='/' element={<SearchBar />} />
                <Route path='/watchlist' element={<WatchList />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
