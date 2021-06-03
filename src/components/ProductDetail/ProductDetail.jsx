import React, { useState, useEffect } from "react";
import makeRequest from '../../libs/request';
import { useParams } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Form from "react-bootstrap/Form";
import { showErrorMessage } from '../../actions/notification';

export default function ProductDetail({ onAddToCart }) {
    const { productId } = useParams();
    const [dataSearch, setDataSearch] = useState({ id: '' });
    const [products, setProducts] = useState([]);
    const [productManufacturer, setProductManufacturer] = useState([]);
    const [selectedSize, setSelectedSize] = React.useState();
    const [quantity, setQuantity] = React.useState(1);
    useEffect(() => {
        searchProduct({ id: productId });
    }, [])
    const handleAddToCart = () => {
        if (selectedSize != null) {
            return onAddToCart(products, quantity, selectedSize)
        }
        else {
            return showErrorMessage('Vui lòng chọng Size !');
        }
    };
    const searchProduct = (dataSearch = {}) => {
        makeRequest('get', `product/getProductbyId`, dataSearch)
            .then(({ data }) => {
                if (data.signal) {
                    const res = data.data;
                    setProducts(res);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const renderStatusProduct = (productsize) => {
        let check = productsize.find(element => element.number > 0);
        if (check) {
            return (<>
                <p><span className="item_price">Tình trạng : Còn Hàng</span></p></>)
        } else {
            return (<>
                <p><span className="item_price">Tình trạng : Hết Hàng</span></p></>)
        }
    }
    const downQuantity = () => {
        if (quantity != 1) {
            setQuantity(quantity - 1);
        }
    }
    const upQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleChangeSize = (event) => {
        console.log('111111111111', event.target.value)
        setSelectedSize(event.target.value);
    };
    const renderSizeProduct = (productsize) => {
        let check = productsize.find(element => element.number > 0);
        let dataSize = productsize.map(x => x.size.name);
        if (check) {
            return (<>

                <FormControl>
                    <p><span className="item_price">Size : </span></p>
                    <RadioGroup row aria-label="position" name="position" defaultValue="">
                        {productsize.map((element) => (
                            <FormControlLabel
                                checked={selectedSize == element.size_id}
                                value={element.size_id}
                                control={<Radio color="primary" />}
                                label={element.size.name}
                                onChange={(e) => handleChangeSize(e)}
                            />
                        ))}
                    </RadioGroup>
                    <Form.Group>
                        <Form.Label>Số Lượng :  </Form.Label>
                        <IconButton color="primary" aria-label="upload picture" onClick={downQuantity}>
                            <Form.Label> - </Form.Label>
                        </IconButton>
                        <Form.Label >{quantity}</Form.Label>
                        <IconButton color="primary" aria-label="upload picture" onClick={upQuantity}>
                            <Form.Label> + </Form.Label>
                        </IconButton>
                    </Form.Group>
                </FormControl>
            </>)
        } else {
            return (<>
            </>)
        }
    }
    return (
        <>
            <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <div className="col-md-4 single-right-left ">
                        <div className="grid images_3_of_2">
                            <div className="flexslider">
                                {products.image ? (<div className="thumb-image"> <img src={products.image} data-imagezoom="true" className="img-responsive" /> </div>) : (<></>)}
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 single-right-left simpleCart_shelfItem">
                        {products.name ? (<>
                            <h3>{products.name}</h3>
                            {products.sale && products.sale != 0 ? (<>
                                <p><span className="item_price">{(products.cost - (products.cost * products.sale) / 100).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                    <del>{products.cost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</del>
                                </p>
                            </>) : (<p><span className="item_price">{products.cost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                            </p>)}
                            <p><span className="item_price">Hãng : <a>{products.productmanufacturer.name}</a></span>
                            </p>
                            <p><span className="item_price">Mã sản phẩm : {products.productcode}</span>
                            </p>
                            {renderStatusProduct(products.productsize)}
                            {renderSizeProduct(products.productsize)}
                        </>) : (<></>)}


                        <div className="occasion-cart">
                            <div className="shoe single-item single_page_b">
                                {/* <form action="#" method="post">
                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button add" />
                                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                                </form> */}
                                <Button variant="contained" color="primary" href="#contained-buttons" onClick={handleAddToCart}>THÊM VÀO GIỎ HÀNG</Button>
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
                    <div className="responsive_tabs">
                        <div id="horizontalTab">
                            <ul className="resp-tabs-list">
                                <li>Mô Tả sản phẩm</li>
                                <li>Hướng dẫn mua hàng</li>
                                <li>Hướng dẫn chọn size</li>
                            </ul>
                            <div className="resp-tabs-container">
                                {/*/tab_one*/}
                                <div className="tab1">
                                    <div className="single_page">
                                        {products.description ? (<>
                                            {<div dangerouslySetInnerHTML={{ __html: products.description }} ></div>}
                                        </>) : (<></>)}
                                    </div>
                                </div>
                                {/*//tab_one*/}
                                <div className="tab2">
                                    <div className="single_page">
                                        <div className="bootstrap-tab-text-grids">
                                            <div className="bootstrap-tab-text-grid">
                                                <p style={{ "text-align": "justify" }} >
                                                    <strong>Bước 1:</strong>
                                                    Truy cập website và lựa chọn sản phẩm cần mua để mua hàng
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    <strong>Bước 2:</strong>
                                                    Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    <strong>Bước 3:</strong>
                                                    Lựa chọn thông tin tài khoản thanh toán
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    <strong>Bước 4:</strong>
                                                    Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    <strong>Bước 5:</strong>
                                                    Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.
                                                </p>
                                                <p style={{ "text-align": "justify" }} >
                                                    Trân trọng cảm ơn.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab3">
                                    <div className="single_page">
                                        <img src="/assets/images/bangsize.jpg" style={{ "maxHeight": "100%", "maxWidth": "100%", "zoom": "1" }}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}