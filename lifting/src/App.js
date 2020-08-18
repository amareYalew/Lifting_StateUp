import React from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './Order';
import ProductInfo from './ProductInfo';
import Address from './Address'
import Summery from './Summery';
import Customer from './Customer'



function App() {
  return (
    <div className="App">
      <Order />
      <ProductInfo />
     <Address/>
      <Summery />
    </div>
  );
}

export default App;
