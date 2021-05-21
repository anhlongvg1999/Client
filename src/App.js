import React, { useEffect, useState } from 'react';
import { Navbar, Products, Footer, SomeMoreShoes, HomePage, ProductDetail } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    {/* <Navbar/>
    <ProductDetail/>
    <SomeMoreShoes />
        <Footer /> */}
      <Router>
        <Navbar />
         <Switch>
          <Route exact path="/" component={HomePage}>
          </Route>
          <Route exact path="/tat-ca-san-pham" component={Products}>
          </Route>
          <Route exact path="/chi-tiet-san-pham/:productId" component={ProductDetail}>
          </Route>
        </Switch> 
        <SomeMoreShoes />
        <Footer />
      </Router>
    </>
  )
}

export default App
