import React from 'react';
import ReactDOM from 'react-dom';
import ProductItem from './components/ProductItem/ProductItem';
import Title from './components/Title/Title';
import List from './components/List/List';
import data from './products.json';
import mock from './mock.js';

const productsList = data.map((item, index) => ({ ...item, ...mock[index] }));

const ratingComponent = ({ isFilled }) => {
  return (
    <span className={'rating-icon' + (isFilled ? ' rating-icon--filled' : '')}>
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.00004 10.5133L11.12 12.9999L10.0267 8.31325L13.6667 5.15992L8.87337 4.75325L7.00004 0.333252L5.12671 4.75325L0.333374 5.15992L3.97337 8.31325L2.88004 12.9999L7.00004 10.5133Z" />
      </svg>
    </span>
  );
};

function App() {
  return (
    <div>
      <Title content="Список товаров" />
      <List>
        {productsList.map(item => {
          return (
            <ProductItem
              key={item.id}
              isInStock={item.isInStock}
              img={item.img}
              title={item.name}
              price={item.price}
              subPriceContent={item.subPriceContent}
              maxRating={item.maxRating}
              rating={item.rating}
              ratingComponent={ratingComponent}
            ></ProductItem>
          );
        })}
      </List>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
