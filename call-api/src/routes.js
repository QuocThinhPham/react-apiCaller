import React from 'react';
import HomePage from "./pages/HomePage";
import ProductPage from './pages/ProductPage';
import ProductActionPage from './pages/ProductActionPage';

const routes = [
  {
    path : '/',
    exact : true,
    main : () => <HomePage />
  },
  {
    path : '/product',
    exact : true,
    main : () => <ProductPage />
  },
  {
    path : '/product/add',
    exact : false,
    main : ({history}) => <ProductActionPage history={history} />
  },
  {
    path : '/product/:id',
    exact : false,
    main : ({match, history}) => <ProductActionPage match={match} history={history} />
  }
];

export default routes;