import { AppBar, Toolbar, IconButton, Badge, Button, Menu, Avatar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
export default function Navbar({ totalItems }) {
    return (
        <>
            <div className="banner_top innerpage" id="home">
                <div className="wrapper_top_w3layouts">
                    <div className="header_agileits">
                        <div className="logo inner_page_log">
                            <h1><a className="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>
                        </div>

                        {/* cart details */}
                        <div className="top_nav_right">
                            <div className="shoecart shoecart2 cart cart box_1">
                                <form action="#" method="post" className="last">
                                    <Button variant="contained" >Đăng nhập</Button>
                                    <Button variant="contained" >Đămg ký</Button>
                                    <IconButton className="top_shoe_cart" aria-label="Show cart items" color="inherit">
                                        <Badge badgeContent={totalItems} color="secondary">
                                            <ShoppingCart />
                                        </Badge>
                                    </IconButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
                <div className="services-breadcrumb_w3ls_agileinfo">
                    <div className="inner_breadcrumb_agileits_w3">
                        <ul className="short">
                            <li><a href="/">Home</a><i>|</i></li>
                            <li><a href="/tat-ca-san-pham">Tất cả sản phẩm</a><i>|</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}