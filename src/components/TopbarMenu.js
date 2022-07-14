// @flow
import React from 'react';
import AppMenu from '../layouts/Menu';
import classNames from 'classnames';
import { Collapse } from 'react-bootstrap';
import { getMenuItems } from '../helpers/menu';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import logoBtnPuff from '../assets/images/logo-puff.png';
import logoBtnRain from '../assets/images/logo-rain.png';
import logoBtnCart from '../assets/images/logo-cart.png';
import logoBtnNap from '../assets/images/logo-nap.png';
import logoPuff from '../assets/images/logo.png';

/*
 * get options
 */

type SearchResultItem = {
    id: number,
    title: string,
    redirectTo: string,
    icon: string,
};

type TopbarSearchProps = {
    items: Array<SearchResultItem>,
};
<<<<<<< Updated upstream
/**
 * TopbarMenu
 */
=======
const TopBar_styles = {
    button: {
        flex: 1,
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderLeftColor: 'white',
        paddingLeft: 20,
        paddingRight: 40,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 1,
        paddingHorizontal: 12,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center',
        width: 150,
    },
};
const TopBar_alignItems = {
        row: {
            position: 'relative',
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
            alignItems: 'center',
            left: -450,
            right: 0,
            top: -80,
            zIndex: 10
        },
        logo:{
            position: 'relative',
            left: -950,
            right: 0,
            top: -20,
            zIndex: 10   
        }
};
>>>>>>> Stashed changes
const TopbarMenu = (props: TopbarSearchProps): React$Element<any> => {
    const inputTheme = 'dark';
    return (
        <>
            <React.Fragment>
                <div className="topnav">
                    <div className="container-fluid">
                        <nav
                            className={classNames('navbar', 'navbar-expand-lg', 'topnav-menu', 'navbar-' + inputTheme)}>
                            <Collapse in={props.isMenuOpened} className="navbar-collapse" id="topnav-menu-content">
                                <div>
                                    <AppMenu menuItems={getMenuItems()} />
                                </div>
                            </Collapse>
                        </nav>
                    </div>
                    <Col md={3} style={TopBar_alignItems.logo}>
                                <Link to="#">
                                    <div className="navbar-dark">
                                        <span className="topnav-logo-sm">
                                            <img src={logoPuff} alt="logo" height="90" width="135" />
                                        </span>
                                    </div>
                                </Link>
                            </Col>
                        <Row style={TopBar_alignItems.row}>

                            <Col md={3} style={TopBar_styles.button}>
                                <Link to="#">
                                    <div className="navbar-dark">
                                        <span className="topnav-logo-sm">
                                            <img src={logoBtnPuff} alt="logo" height="40" width="40" />
                                        </span>
                                    </div>
                                    <div style={TopBar_styles.text}>
                                        <strong>PUFI PUFF</strong>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={3} style={TopBar_styles.button}>
                                <Link to="#">
                                    <div className="navbar-dark">
                                        <span className="topnav-logo-sm">
                                            <img src={logoBtnRain} alt="logo" height="40" width="40" />
                                        </span>
                                    </div>
                                    <div style={TopBar_styles.text}>
                                        <strong>PUFI RAIN</strong>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={3} style={TopBar_styles.button}>
                                <Link to="#">
                                    <div className="navbar-dark">
                                        <span className="topnav-logo-sm">
                                            <img src={logoBtnCart} alt="logo" height="40" width="40" />
                                        </span>
                                    </div>
                                    <div style={TopBar_styles.text}>
                                        <strong>PUFI CART</strong>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={3} style={TopBar_styles.button}>
                                <Link to="#">
                                    <div className="navbar-dark">
                                        <span className="topnav-logo-sm">
                                            <img src={logoBtnNap} alt="logo" height="40" width="40" />
                                        </span>
                                    </div>
                                    <div style={TopBar_styles.text}>
                                        <strong>PUFI NAP</strong>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
            </React.Fragment>
        </>
    );
};

export default TopbarMenu;
