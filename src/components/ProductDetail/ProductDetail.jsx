import React, { useState, useEffect } from "react";
import makeRequest from '../../libs/request';
export default function ProductDetail() {
    const [dataSearch, setDataSearch] = useState({ id: '' });
    const [products, setProducts] = useState([]);
    const [productManufacturer, setProductManufacturer] = useState([]);
    useEffect(() => {
        console.log('starttttttttttttttt')
        searchProduct({ id: 23 });
    }, [])
    const searchProduct = (dataSearch = {}) => {
        console.log("111111111111")
        makeRequest('get', `product/getProductbyId`, dataSearch)
            .then(({ data }) => {
                if (data.signal) {
                    console.log('xxxxxxxxxxxxx', data.data)
                    const res = data.data;
                    setProducts(res);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
    <>
        <div className="ads-grid_shop">
            <div className="shop_inner_inf">
                <div className="col-md-4 single-right-left ">
                    <div className="grid images_3_of_2">
                        <div className="flexslider">
                            <ul className="slides">
                                <li data-thumb="images/d2.jpg">
                                    <div className="thumb-image"> <img src={products.image} data-imagezoom="true" className="img-responsive" /> </div>
                                </li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8 single-right-left simpleCart_shelfItem">
                    <h3>{products.name}</h3>
                    {products.sale && products.sale != 0 ? (<>
                        <p><span className="item_price">{(products.cost - (products.cost*products.sale)/100).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                            <del>{products.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</del>
                        </p>
                    </>) : (<p><span className="item_price">{products.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                    </p>)}
                    <p><span className="item_price">Hãng : <a>{products.productmanufacturer.name}</a></span>
                    </p>
                    <p><span className="item_price">Mã sản phẩm : {products.productcode}</span>
                    </p>
                    
                    <div className="occasion-cart">
                        <div className="shoe single-item single_page_b">
                            <form action="#" method="post">
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button add" />
                                <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                        </div>
                    </div>
                    <ul className="social-nav model-3d-0 footer-social social single_page">
                        <li className="share">Share On : </li>
                        <li>
                            <a href="#" className="facebook">
                                <div className="front"><i className="fa fa-facebook" aria-hidden="true" /></div>
                                <div className="back"><i className="fa fa-facebook" aria-hidden="true" /></div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="twitter">
                                <div className="front"><i className="fa fa-twitter" aria-hidden="true" /></div>
                                <div className="back"><i className="fa fa-twitter" aria-hidden="true" /></div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="instagram">
                                <div className="front"><i className="fa fa-instagram" aria-hidden="true" /></div>
                                <div className="back"><i className="fa fa-instagram" aria-hidden="true" /></div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="pinterest">
                                <div className="front"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                                <div className="back"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
                {/*/tabs*/}
                <div className="responsive_tabs">
                    <div id="horizontalTab">
                        <ul className="resp-tabs-list">
                            <li>Description</li>
                            <li>Reviews</li>
                            <li>Information</li>
                        </ul>
                        <div className="resp-tabs-container">
                            {/*/tab_one*/}
                            <div className="tab1">
                                <div className="single_page">
                                    <h6>Lorem ipsum dolor sit amet</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                      magna aliqua.</p>
                                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                      magna aliqua.</p>
                                </div>
                            </div>
                            {/*//tab_one*/}
                            <div className="tab2">
                                <div className="single_page">
                                    <div className="bootstrap-tab-text-grids">
                                        <div className="bootstrap-tab-text-grid">
                                            <div className="bootstrap-tab-text-grid-left">
                                                <img src="images/t1.jpg" alt=" " className="img-responsive" />
                                            </div>
                                            <div className="bootstrap-tab-text-grid-right">
                                                <ul>
                                                    <li><a href="#">Admin</a></li>
                                                    <li><a href="#"><i className="fa fa-reply-all" aria-hidden="true" /> Reply</a></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam,
                                                quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                            autem vel eum iure reprehenderit.</p>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </div>
                                        <div className="add-review">
                                            <h4>add a review</h4>
                                            <form action="#" method="post">
                                                <input type="text" name="Name" required="Name" />
                                                <input type="email" name="Email" required="Email" />
                                                <textarea name="Message" required defaultValue={""} />
                                                <input type="submit" defaultValue="SEND" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab3">
                                <div className="single_page">
                                    <h6>Shoe Rock Vision(SRV) Sneakers (Blue)</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                      magna aliqua.</p>
                                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                      magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*//tabs*/}
                {/* /new_arrivals */}
                <div className="new_arrivals">
                    <h3>Featured Products</h3>
                    {/* /womens */}
                    <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                                <div className="men-thumb-item">
                                    <img src="images/s4.jpg" alt="" />
                                    <div className="men-cart-pro">
                                        <div className="inner-men-cart-pro">
                                            <a href="single.html" className="link-product-add-cart">Quick View</a>
                                        </div>
                                    </div>
                                    <span className="product-new-top">New</span>
                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Shuberry Heels </a>
                                    </h4>
                                    <div className="info-product-price">
                                        <div className="grid_meta">
                                            <div className="product_price">
                                                <div className="grid-price ">
                                                    <span className="money ">$575.00</span>
                                                </div>
                                            </div>
                                            <ul className="stars">
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="shoe single-item hvr-outline-out">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                                <input type="hidden" name="add" defaultValue={1} />
                                                <input type="hidden" name="shoe_item" defaultValue="Shuberry Heels" />
                                                <input type="hidden" name="amount" defaultValue={575.00} />
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
                    <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                                <div className="men-thumb-item">
                                    <img src="images/s5.jpg" alt="" />
                                    <div className="men-cart-pro">
                                        <div className="inner-men-cart-pro">
                                            <a href="single.html" className="link-product-add-cart">Quick View</a>
                                        </div>
                                    </div>
                                    <span className="product-new-top">New</span>
                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Red Bellies </a>
                                    </h4>
                                    <div className="info-product-price">
                                        <div className="grid_meta">
                                            <div className="product_price">
                                                <div className="grid-price ">
                                                    <span className="money ">$325.00</span>
                                                </div>
                                            </div>
                                            <ul className="stars">
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="shoe single-item hvr-outline-out">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                                <input type="hidden" name="add" defaultValue={1} />
                                                <input type="hidden" name="shoe_item" defaultValue="Red Bellies" />
                                                <input type="hidden" name="amount" defaultValue={325.00} />
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
                    <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                                <div className="men-thumb-item">
                                    <img src="images/s7.jpg" alt="" />
                                    <div className="men-cart-pro">
                                        <div className="inner-men-cart-pro">
                                            <a href="single.html" className="link-product-add-cart">Quick View</a>
                                        </div>
                                    </div>
                                    <span className="product-new-top">New</span>
                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Running Shoes</a>
                                    </h4>
                                    <div className="info-product-price">
                                        <div className="grid_meta">
                                            <div className="product_price">
                                                <div className="grid-price ">
                                                    <span className="money ">$875.00</span>
                                                </div>
                                            </div>
                                            <ul className="stars">
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="shoe single-item hvr-outline-out">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                                <input type="hidden" name="add" defaultValue={1} />
                                                <input type="hidden" name="shoe_item" defaultValue="Running Shoes" />
                                                <input type="hidden" name="amount" defaultValue={875.00} />
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
                    <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                                <div className="men-thumb-item">
                                    <img src="images/s8.jpg" alt="" />
                                    <div className="men-cart-pro">
                                        <div className="inner-men-cart-pro">
                                            <a href="single.html" className="link-product-add-cart">Quick View</a>
                                        </div>
                                    </div>
                                    <span className="product-new-top">New</span>
                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Sukun Casuals</a>
                                    </h4>
                                    <div className="info-product-price">
                                        <div className="grid_meta">
                                            <div className="product_price">
                                                <div className="grid-price ">
                                                    <span className="money ">$505.00</span>
                                                </div>
                                            </div>
                                            <ul className="stars">
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="shoe single-item hvr-outline-out">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                                <input type="hidden" name="add" defaultValue={1} />
                                                <input type="hidden" name="shoe_item" defaultValue="Sukun Casuals" />
                                                <input type="hidden" name="amount" defaultValue={505.00} />
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
                    {/* //womens */}
                    <div className="clearfix" />
                </div>
                {/*//new_arrivals*/}
            </div>
        </div>
    </>
    )
}