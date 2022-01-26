import './App.css';
import React, { useEffect, useState } from 'react';

import Main from './views/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListDetails from './components/ProductListDeatils';
import Update from './components/Update';

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
          {/* UPDATE */}
        <Route path="/Products/update/:id">
        <Update/>
        </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
