import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';

const PRODUCTS_AMOUNT = 3;
const productsList = data.slice(0, PRODUCTS_AMOUNT);

function App() {
  return (
    <div>
      <h1>Список товаров</h1>
      <ul>
        {productsList.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
