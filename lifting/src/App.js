import React from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './Order';
import ProductInfo from './ProductInfo';
import Summery from './Summery'



function App() {
  return (
    <div className="App">
      <Order />
      <ProductInfo />
      <Summery />
    </div>
  );
}

export default App;
