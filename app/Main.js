import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';



function Main() {
  const product = [
    {
    id: 1,
    name: 'mango',
    price: 10
    },
    {
      id: 2,
      name: 'apple',
      price: 5
    }
  ]
    return (
       <div>
         <Header />
         <div>
            <ProductList product={product}/>
         </div>
       </div>
    )
}

ReactDom.render(<Main />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept;
}
