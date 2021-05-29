import React, { useEffect, useState } from 'react';
import { Navbar, Products, Footer, SomeMoreShoes, HomePage, ProductDetail,Cart } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  const [cart, setCart] = useState({});
  const handleAddToCart = async (product, quantity) => {
    setCart()
  };
  let data = { sale: 1 }
  return (
    <>
      <Navbar/>
    <Cart />
    <SomeMoreShoes />
        <Footer />
      {/* <Router>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/chi-tiet-san-pham/:productId" component={ProductDetail}>
          </Route>
          <Route exact path="/" component={HomePage}>
          </Route>
          <Route exact path="/tat-ca-san-pham" >
            <Products />
          </Route>
          <Route exact path="/giam-gia" >
            <Products isSale={1} />
          </Route>
          <Route exact path="/adidas" >
            <Products productmanufacturerId={1} />
          </Route>
          <Route exact path="/nike" >
            <Products productmanufacturerId={2} />
          </Route>
        </Switch>
        <SomeMoreShoes />
        <Footer />
      </Router> */}
    </>
  )
}

export default App
