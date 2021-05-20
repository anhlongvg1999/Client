import { Link, useLocation } from 'react-router-dom';
export default function HomePage() {
    return (
        <>
            <div className="banner_top">
                <div className="wrapper_top_w3layouts">
                    <div className="slider">
                        <div className="callbacks_container">
                            <ul className="rslides callbacks callbacks1" id="slider4">
                                <li>
                                    <div className="banner-top2">
                                        <div className="banner-info-wthree">
                                            <h3>Nike</h3>
                                            <p>See how good they feel.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="banner-top3">
                                        <div className="banner-info-wthree">
                                            <h3>Heels</h3>
                                            <p>For All Walks of Life.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="banner-top">
                                        <div className="banner-info-wthree">
                                            <h3>Sneakers</h3>
                                            <p>See how good they feel.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="banner-top1">
                                        <div className="banner-info-wthree">
                                            <h3>Adidas</h3>
                                            <p>For All Walks of Life.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    {/* //slider */}
                    <ul className="top_icons">
                        <li><a href="#"><span className="fa fa-facebook" aria-hidden="true" /></a></li>
                        <li><a href="#"><span className="fa fa-twitter" aria-hidden="true" /></a></li>
                        <li><a href="#"><span className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href="#"><span className="fa fa-google-plus" aria-hidden="true" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="grids_bottom">
                <div className="style-grids">
                    <div className="col-md-6 style-grid style-grid-1">
                        <img src="assets/images/b1.jpg" alt="shoe" />
                    </div>
                </div>
                <div className="col-md-6 style-grid style-grid-2">
                    <div className="style-image-1_info">
                        <div className="style-grid-2-text_info">
                            <h3>Nike DOWNSHIFTER</h3>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
                tempora incidunt ut labore et dolore .</p>
                            <div className="shop-button">
                                <a href="/tat-ca-san-pham">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="style-image-2">
                        <img src="assets/images/b2.jpg" alt="shoe" />
                        <div className="style-grid-2-text">
                            <h3>Air force</h3>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>
            <div className="grids_sec_2">
                <div className="style-grids_main">
                    <div className="col-md-6 grids_sec_2_left">
                        <div className="grid_sec_info">
                            <div className="style-grid-2-text_info">
                                <h3>Sneakers</h3>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore .</p>
                                <div className="shop-button">
                                    <a href="/tat-ca-san-pham">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="style-image-2">
                            <img src="assets/images/b4.jpg" alt="shoe" />
                            <div className="style-grid-2-text">
                                <h3>Air force</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grids_sec_2_left">
                        <div className="style-image-2">
                            <img src="assets/images/b3.jpg" alt="shoe" />
                            <div className="style-grid-2-text">
                                <h3>Air force</h3>
                            </div>
                        </div>
                        <div className="grid_sec_info last">
                            <div className="style-grid-2-text_info">
                                <h3>Sneakers</h3>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore .</p>
                                <div className="shop-button two">
                                    <a href="/tat-ca-san-pham">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </>
    )
}