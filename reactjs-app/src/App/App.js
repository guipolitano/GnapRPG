import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HorizontalMenu from '../Components/Menu/HorizontalMenu';
import Routes from '../App/Routes';

function App() {
  return (
    <Router>
        <HorizontalMenu/>
        <Routes/>
    </Router>
  );
}

export default App;
