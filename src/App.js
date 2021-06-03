import React, { useEffect, useState } from 'react';
import { Navbar, Products, Footer, SomeMoreShoes, HomePage, ProductDetail, Cart } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { showSuccessMessageIcon, showErrorMessage } from './actions/notification';

const App = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {

    const getDataCart = localStorage.getItem('cart');
    if (getDataCart) {
      setCart(JSON.parse(getDataCart))
    }
  }, [])
  const handleAddToCart = async (product, quantity,size_id) => {
    let dataCart = cart;
    if (dataCart.length == 0) {
      setCart([...cart, {
        product: product,
        quantity: quantity,
        size_id : size_id
      }])
      dataCart.push({ product: product, quantity: quantity ,size_id:size_id})
    } else {
      let check = 0;
      let dataCartMap = cart.map(it => {
        if (it.product.id == product.id && it.size_id == size_id) {
          it.quantity++;
          check = 1;
          return it;
        }
        return it;
      })
      if (check == 0) {
        setCart([...cart, {
          product: product,
          quantity: quantity,
          size_id : size_id
        }])
        dataCart.push({ product: product, quantity: quantity , size_id:size_id })
      }
      else {
        setCart(dataCartMap)
        dataCart = dataCartMap;
      }
    }
    localStorage.setItem('cart', JSON.stringify(dataCart))
    showSuccessMessageIcon("Thêm thành công !")

  };
  const handleRemoveFromCart = (productid) => {
    console.log('111111111111111111111a')
    let dataCart = cart;
    dataCart.forEach((item, index)=>{
      if(item.product.id ==productid)
      {
        dataCart.splice(index,1)
      }
    })
    console.log(dataCart)
    localStorage.setItem('cart', JSON.stringify(dataCart))
    setCart(dataCart)
    console.log('ttttttttttttttttttt',cart)
    
  }
 
  return (
    <>
      {/* <Navbar/>
    <Cart />
    <SomeMoreShoes />
        <Footer /> */}
      <Router>
        <Navbar totalItems={cart.length} />
        <Switch>
          <Route exact path="/chi-tiet-san-pham/:productId">
            <ProductDetail onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/" component={HomePage}>
          </Route>
          <Route exact path="/tat-ca-san-pham" >
            <Products onAddToCart={handleAddToCart} />
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
          <Route exact path="/nike" >
            <Products productmanufacturerId={2} />
          </Route>
          <Route exact path="/cart" >
            <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
          </Route>
        </Switch>
        <SomeMoreShoes />
        <Footer />
      </Router>
    </>
  )
}

export default App
