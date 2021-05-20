import { Height } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
const Product = (product) =>{
  useEffect(()=>{
    console.log(product)
    console.log(product.product.name)
},[])
  return (
    <>
      <div className="col-md-4 product-men" style={{"height" : "100%", "width" : "50%"}}>
        <div className="product-shoe-info shoe">
          <div className="men-pro-item">
            <div className="men-thumb-item">
              <img
                src={product.product.image}
                alt="new"
              />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                </div>
              </div>
              {product.product.sale != 0 ? <span className="product-new-top">{product.product.sale}%</span> : null}
            </div>
            <div className="item-info-product">
              <h4>
                <a href="single.html">{product.product.name} </a>
              </h4>
              <div className="info-product-price">
                <div className="grid_meta">
                  <div className="product_price">
                    <div className="grid-price ">
                    {product.product.sale != 0 ? (
                       <>
                       <span className="money ">{(product.product.cost - (product.product.cost*product.product.sale)/100).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                       <span className="sale ">{product.product.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                       </>
                      
                    ):(
                      <span className="money ">{product.product.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                    )}
                      
                    </div>
                  </div>
                </div>
                <div className="shoe single-item hvr-outline-out">
                  <form action="#" method="post">
                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                  </form>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Product;