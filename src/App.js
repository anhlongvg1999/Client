import React, { useEffect, useState } from 'react';
import { Navbar, Products, Footer, SomeMoreShoes, HomePage, ProductDetail } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  const [cart, setCart] = useState({});
  const handleAddToCart = async (product, quantity) => {
    setCart()
  };
  return (
    <>
    {/* <Navbar/>
    <ProductDetail />
    <SomeMoreShoes />
        <Footer /> */}
      <Router>
        <Navbar totalItems={cart.total_items} />
         <Switch>
         <Route exact path="/chi-tiet-san-pham/:productId" component={ProductDetail}>
          </Route>
          <Route exact path="/" component={HomePage}>
          </Route>
          <Route exact path="/tat-ca-san-pham"  component={Products}>
          </Route>
          
        </Switch> 
        <SomeMoreShoes />
        <Footer />
      </Router>
    </>
  )
}

export default App
