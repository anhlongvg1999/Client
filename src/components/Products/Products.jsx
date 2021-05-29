import React, { useState, useEffect } from "react";
import Product from "./product/product";
import makeRequest from '../../libs/request';
import 'antd/dist/antd.css';
import { Modal, Pagination } from "antd";
import { Paper } from "@material-ui/core";
export default function Products({ isSale ,productmanufacturerId}) {
    const [datakSale, setDataSale] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [dataSearch, setDataSearch] = useState({ name: '' });
    const [total, setTotal] = useState(0);
    useEffect(() => {
        searchProduct({ page: 1, limit: rowsPerPage, sale: isSale ? isSale : 0 ,productmanufacturerId: productmanufacturerId? productmanufacturerId : ""});
    }, [isSale,productmanufacturerId])
    const searchProduct = (dataSearch = {}) => {
        console.log("111111111111")
        makeRequest('get', `product/getProduct`, dataSearch)
            .then(({ data }) => {
                if (data.signal) {
                    console.log('xxxxxxxxxxxxx', data.data)
                    const res = data.data.listProduct;
                    setProducts(res);
                    setTotal(data.data.total)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleChangePage = (newPage) => {
        setPage(newPage);
        searchProduct({ page: newPage, limit: rowsPerPage });
    };
    const onChangeValueSearch = (key, value) => {
        console.log(value)
        setDataSearch({
            ...dataSearch,
            [key]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchProduct(dataSearch);
    }
    return (
        <>

            <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <div className="side-bar col-md-3">
                        <div className="search-hotel">
                            <h3 className="agileits-sear-head">Search Here..</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="search" placeholder="Product name..." name="search" required onChange={(e) => onChangeValueSearch("name", e.target.value)} />
                                <input type="submit" defaultValue=" " />
                            </form>
                        </div>
                        <div className="range">
                            <h3 className="agileits-sear-head">Price range</h3>
                            <ul className="dropdown-menu6">
                                <li>
                                    <div id="slider-range" />
                                    <input type="text" id="amount" style={{ border: 0, color: '#ffffff', fontWeight: 'normal' }} />
                                </li>
                            </ul>
                        </div>
                        <div className="left-side">
                            <h3 className="agileits-sear-head">Discount</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">5% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">10% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">20% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">30% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">50% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">60% or More</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* //product left */}
                    {/* product right */}
                    <div className="left-ads-display col-md-9">
                        <div className="wrapper_top_shop" style={{ "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "0px", "border-right-width": "0px" }}>
                            <div>
                                <div className="col-md-6 shop_left">
                                    <img src="assets/images/banner3.jpg" alt="" />
                                    <h6>40% off</h6>
                                </div>
                                <div className="col-md-6 shop_right">
                                    <img src="assets/images/banner2.jpg" alt="" />
                                    <h6>50% off</h6>
                                </div>
                                <div className="clearfix" />
                            </div>
                            {
                                products.length ? products.map((product) => (
                                    <Product product={product} />
                                )) : (null)
                            }

                        </div>

                    </div>
                    {total > rowsPerPage && (
                        <div className="customSelector custom-svg">
                            <Pagination className="pagination-crm" current={page} pageSize={rowsPerPage} total={total} onChange={(p, s) => handleChangePage(p)} />
                        </div>
                    )}
                    <div className="clearfix" />
                </div>
            </div>

        </>
    )
}