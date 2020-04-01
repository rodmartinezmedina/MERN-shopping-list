import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar"
import ShoppingList from "./components/ShoppingList";
import './App.css';
import uuid from 'uuid';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <h1>Hello Clean Human. No virus detected</h1>
      <ShoppingList />
    </div>
  );
}

export default App;
