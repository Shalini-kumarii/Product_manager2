import './App.css';
import React, { useEffect, useState } from 'react';

import Main from './views/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListDetails from './components/ProductListDeatils';

function App() {


  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/products/:id">
            <ProductListDetails />
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
