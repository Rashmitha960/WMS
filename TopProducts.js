import React from 'react';
//import './TopProducts.css';

const TopProducts = () => (
  <div className="top-products">
    <h3>Top Products</h3>
    <ul>
      {['Laptop', 'Smartphone', 'Keyboard', 'Monitor', 'Printer'].map((item, index) => (
        <li key={index}>
          {item} <span>+{(index + 1) * 10}%</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TopProducts;
