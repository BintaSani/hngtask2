import React from 'react';

//import Top from './components/top10/top10';
import HomePage from './pages/homepage';
import Directory from './components/directory/directory';
import { Route,Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/movie/*' Component={Directory}/>
      </Routes>
      
     
    </div>
  );
}


export default App;
