import React from 'react'
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import Footer from './components/Footer';

function App(props) {
 
  return (
    <div>
      <Header />
      <Task />
      <Footer />
    </div>
  );
}

export default App;