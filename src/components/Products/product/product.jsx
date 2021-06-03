import { Height } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product, 1);
  return (
    <>
      <div className="col-md-4 product-men" style={{ "height": "100%", "width": "50%" }}>
        <div className="product-shoe-info shoe">
          <div className="men-pro-item">
            <div className="men-thumb-item">
              <img
                src={product.image}
                alt="new"
              />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <Link to={`/chi-tiet-san-pham/${product.id}`} className="link-product-add-cart">Quick View</Link>
                </div>
              </div>
              {product.sale != 0 ? <span className="product-new-top">{product.sale}%</span> : null}
            </div>
            <div className="item-info-product">
              <h4>
                <Link to={`/chi-tiet-san-pham/${product.id}`}>{product.name}</Link>
              </h4>
              <div className="info-product-price">
                <div className="grid_meta">
                  <div className="product_price">
                    <div className="grid-price ">
                      {product.sale != 0 ? (
                        <>
                          <span className="money ">{(product.cost - (product.cost * product.sale) / 100).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} </span>
                          <span className="sale ">{product.cost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                        </>

                      ) : (
                        <span className="money ">{product.cost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                      )}

                    </div>
                  </div>
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