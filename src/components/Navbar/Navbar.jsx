import { TextField, IconButton, Badge, Button, Menu, Avatar } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Modal, Pagination } from "antd";
import Form from "react-bootstrap/Form";
import { showSuccessMessageIcon, showErrorMessage } from '../../actions/notification';
import makeRequest from '../../libs/request';
import "./login.css";
export default function Navbar({ totalItems }) {
    const [login, setLogin] = useState({ visible: false });
    const [colorHome,setColorHome]=useState("white");
    const [islogin, setIsLogin] = useState();
    const [register, setRegister] = useState({ visible: false });
    const [user, setUser] = useState({});
    const formLogin = React.createRef();
    const formRegister = React.createRef();
    useEffect(() => {
        
        const checklogin = localStorage.getItem('isLogin');
        const checkUser = localStorage.getItem('user');
        if (checklogin && checklogin == "true") {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
        if (checkUser) {
            let data = JSON.parse(checkUser)
            setUser(data);
        }
    }, [])
    const showModalLogin = () => {
        setLogin({
            ...login,
            visible: true
        })
    }
    const showModalRegister = () => {
        setRegister({
            ...register,
            visible: true
        })
    }
    const onChangeLoginValue = (key, value) => {
        setLogin({
            ...login,
            [key]: value
        })
    }
    const onChangeRegisterValue = (key, value) => {
        setRegister({
            ...register,
            [key]: value
        })
    }
    const clickModalLoginCancel = () => {
        setLogin({
            ...login,
            visible: false
        })
    }
    const clickModalRegisterCancel = () => {
        setRegister({
            ...register,
            visible: false
        })
    }
    function validateForm() {
        return login.email != '' && login.password != '';
    }
    function validateRegisterForm() {
        return register.email != '' && register.password != '' && register.firstname != '' && register.lastname != '' && 
        register.confirmpassword != '' && register.address != '' && register.city != '' && register.mobile != '' ;
    }
    const SubmitLogin = (e) => {
        e.preventDefault();
        const nodeLogin = formLogin.current;
        nodeLogin.click();
    }
    const SubmitRegister = (e) => {
        e.preventDefault();
        const nodeRegister = formRegister.current;
        nodeRegister.click();
    }
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (!login.email) {
            return showErrorMessage('Vui lòng nhập email');
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login.email)) {
            return showErrorMessage('Vui lòng nhập đúng định dạng email');
        }
        makeRequest('post', `auth/login`, login)
            .then(({ data }) => {
                if (data.signal) {
                    showSuccessMessageIcon('Login Successfuly!')
                    setLogin({
                        visible: false,
                    });
                    setIsLogin(true);
                    var res = data.data.user;
                    localStorage.setItem('isLogin', true);
                    localStorage.setItem('user', JSON.stringify(res));
                    setUser(res);
                    
                } else {
                    return showErrorMessage(data.message);
                }
            })
            .catch(err => {
                localStorage.setItem('isLogin', false)
                console.log('Error', err)
            })
    }
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(register.email)) {
            return showErrorMessage('Vui lòng nhập đúng định dạng email');
        }
        if(register.password !== register.confirmpassword)
        {
            return showErrorMessage('password không khớp');
        }
        makeRequest('post', `account/createUser`, register)
            .then(({ data }) => {
                if (data.signal) {
                    showSuccessMessageIcon('Đăng kí thành công!')
                    setRegister({
                        visible: false,
                    });
                    showModalLogin();
                } else {
                    showErrorMessage(data.message);
                }
            })
            .catch(err => {
                showErrorMessage('Đã xảy ra lỗi!');
            })
    }
    const logOut = ()=>{
        setIsLogin(false);
        localStorage.removeItem('isLogin');
        localStorage.removeItem('user');
    }
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
                                    {islogin === false ? (<>
                                        <Button variant="contained" onClick={(e) => showModalLogin()}>Đăng nhập</Button>
                                        <Button variant="contained" onClick={(e) => showModalRegister()}>Đămg ký</Button>
                                    </>) : (<>
                                        
                                        <span><Link>{user.firstname} {user.lastname}</Link><i>|</i></span> 
                                        <span><Link onClick = {logOut}>Đăng xuất</Link></span> 
                                    </>)}
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
                            <li><a href="/" style={{color:'white'}}>Home</a><i>|</i></li>
                            <li><a href="/tat-ca-san-pham" onClick="">Tất cả sản phẩm</a><i>|</i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Modal
                title='Đăng nhập'
                visible={login.visible}
                cancelText='Cancel'
                okText='Đăng nhập'
                onCancel={clickModalLoginCancel}
                onOk={SubmitLogin}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ disabled: !validateForm() }}
            >
                <div className="Login">
                    <Form onSubmit={handleSubmitLogin}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={login.email || ''}
                                onChange={(e) => onChangeLoginValue("email", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={login.password || ''}
                                onChange={(e) => onChangeLoginValue("password", e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" visible={false} style={{ width: 0, height: 0, paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0 }} ref={formLogin}>
                        </Button>
                        {/* <Button block size="lg" type="submit" disabled={!validateForm()}>
                            Login
            </Button> */}
                    </Form>
                </div>
            </Modal>
            <Modal
                title='ĐĂng Ký'
                visible={register.visible}
                cancelText='Cancel'
                okText='OK'
                onCancel={clickModalRegisterCancel}
                onOk={SubmitRegister}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ disabled: !validateRegisterForm() }}
            >
                <div className="Login">
                    <Form onSubmit={handleSubmitRegister}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={register.email || ''}
                                onChange={(e) => onChangeRegisterValue("email", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="firstname">
                            <Form.Label>Firs Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={register.firstname || ''}
                                onChange={(e) => onChangeRegisterValue("firstname", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="lastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={register.lastname || ''}
                                onChange={(e) => onChangeRegisterValue("lastname", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={register.password || ''}
                                onChange={(e) => onChangeRegisterValue("password", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="confirmpassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={register.confirmpassword || ''}
                                onChange={(e) => onChangeRegisterValue("confirmpassword", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={register.address || ''}
                                onChange={(e) => onChangeRegisterValue("address", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={register.city || ''}
                                onChange={(e) => onChangeRegisterValue("city", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="mobile">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={register.mobile || ''}
                                onChange={(e) => onChangeRegisterValue("mobile", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlI="formBirthday">
                            <Form.Label className="starDanger">Birthday</Form.Label>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                onChange={(value) => {
                                    onChangeRegisterValue("birthday", value.target.value)
                                }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" visible={false} style={{ width: 0, height: 0, paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0 }} ref={formRegister}>
                        </Button>
                    </Form>
                </div>
            </Modal>
        </>
    )
}