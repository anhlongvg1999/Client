import React, { useEffect, useState } from 'react';
import { Navbar, Products, Footer, SomeMoreShoes, HomePage, ProductDetail } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navbar />
      <ProductDetail />
      {/* <Router>
        <Navbar />
         <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/tat-ca-san-pham">
            <Products />
          </Route>
          <Route exact path="/chi-tiet-san-pham/:productId">
            <ProductDetail />
          </Route>
        </Switch> 
        <SomeMoreShoes />
        <Footer />
      </Router> */}

      <SomeMoreShoes />
      <Footer /> 
    </>
  )
}

export default App
