import CartItem from './CartItem/CartItem'
import React, { useState, useEffect } from "react";
export default function Cart({cart,onRemoveFromCart}) {
  console.log('ccccccccccccc',cart)
  // const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   const checkcart = localStorage.getItem('cart');
  //   if (checkcart ) {
  //     let dataCart = JSON.parse(checkcart)
  //     setCart(dataCart);
  //   }
  // }, [cart])
  const renderTotal = () =>{
    let total = 0;
    cart.map((cartItem, index)=>{
      total = total + cartItem.product.cost * cartItem.quantity;
    })
    console.log('total',total)
    return total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  }
  return (
    <>
      <div className="shop_inner_inf">
        <div className="privacy about">
          <h3>Chec<span>kout</span></h3>
          <div className="checkout-right">
            <h4>Your shopping cart contains: <span>{cart.length}</span></h4>
            <table className="timetable_sub">
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Product</th>
                  <th>Quality</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>

                {cart.length > 0 ? cart.map((cartItem, index) => (
                  <>
                    <CartItem cartItem={cartItem} index={index} onRemoveFromCart={onRemoveFromCart}/>
                  </>
                )) : (<></>)}
              </tbody>
            </table>
          </div>
          <div className="checkout-left">
            <div className="col-md-4 checkout-left-basket">
              <ul>
                <li>Tổng tiền <i>-</i> <span>{renderTotal()}</span></li>
              </ul>
            </div>
            <div className="col-md-8 address_form">
              <h4>Thông tin khách hàng</h4>
              <form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
                <section className="creditly-wrapper wrapper">
                  <div className="information-wrapper">
                    <div className="first-row form-group">
                      <div className="controls">
                        <label className="control-label">Full name: </label>
                        <input className="billing-address-name form-control" type="text" name="name" placeholder="Full name" />
                      </div>
                      <div className="card_number_grids">
                        <div className="card_number_grid_left">
                          <div className="controls">
                            <label className="control-label">Mobile number:</label>
                            <input className="form-control" type="text" placeholder="Mobile number" />
                          </div>
                        </div>
                        <div className="card_number_grid_right">
                          <div className="controls">
                            <label className="control-label">Landmark: </label>
                            <input className="form-control" type="text" placeholder="Landmark" />
                          </div>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="controls">
                        <label className="control-label">Town/City: </label>
                        <input className="form-control" type="text" placeholder="Town/City" />
                      </div>
                      <div className="controls">
                        <label className="control-label">Address type: </label>
                        <select className="form-control option-w3ls">
                          <option>Office</option>
                          <option>Home</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
              <div className="checkout-right-basket">
                <a href="payment.html">Make a Payment </a>
              </div>
            </div>
            <div className="clearfix"> </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </>
  )
}