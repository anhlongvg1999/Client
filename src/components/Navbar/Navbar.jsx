export default function Navbar() {
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
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="display" defaultValue={1} />
                                <button className="top_shoe_cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
                                <div className="search_w3ls_agileinfo">
                                </div>
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