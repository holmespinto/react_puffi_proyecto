// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logoPuff from '../assets/images/logo-footer.png';
import { Link } from 'react-router-dom';
import ImgCompra from '../assets/images/compra.png';
import ImgFacebock from '../assets/images/facebock.png';
import ImgInstagram from '../assets/images/instagram.png';
import ImgTwitter from '../assets/images/twitter.png';


type ItemsTextLink = {
    key:number,
    items?: array,
    styles?: array,
};
const TextLink = ({ items}: ItemsTextLink): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <Row>
                <Link to="#">
                    <div className="navbar-dark">
                        <span className="topnav-logo-sm">
                            <div style={items.styles.content}>
                                <div style={items.styles.titleuRL}>{items.items.titleuRL}</div>
                            </div>
                        </span>
                    </div>
                </Link>
            </Row>
        </React.Fragment>
    );
};
const Footer = (): React$Element<any> => {
    const Footer_styles = {
        content: {
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'left',
            textAlign: 'left',
            left: -190,
            top: 50,
            marginBottom: 2,
        },
        titleuRL: {
            flexDirection: 'row',
            justifyContent: 'left',
            position: 'relative',
            textAlign: 'left',
            fontSize: 15,
            fontWeight: 'normal',
            top: -50,
            left: 0,
            zIndex: 0,
            color: 'gray',
        },
    };
    const Footer_styles_col3 = {
        content: {
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'left',
            textAlign: 'left',
            left: -190,
            top: 0,
            marginBottom: 2,
        },
        img: {
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'left',
            textAlign: 'left',
            left: -190,
            top: 0,
            marginBottom: 2,
        },
        title: {
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'left',
            textAlign: 'left',
            left: 80,
            top: 0,
            marginBottom: 2,
        },
        siguenos: {
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'left',
            textAlign: 'left',
            left: 450,
            top: -85,
            marginBottom: 2,           
         },
         icons: {
             position: 'relative',
             flexDirection: 'row',
             justifyContent: 'left',
             textAlign: 'left',
             left: -90,
             top: -30,
             marginBottom: 2, 
             marginLeft: 2,
             marginRight: 2,           
          }
    }
    const Footer_items={
        key1:{
        items:{
          titleuRL: 'PUFI RAIN',
        },
        styles: Footer_styles
        },
        key2:{
            items:{
              titleuRL: 'PUFI PUFF',
            },
            styles: Footer_styles
        },
        key3:{
            items:{
              titleuRL: 'PUFI CART',
            },
            styles: Footer_styles
        },
        key4:{
            items:{
              titleuRL: 'PUFI NAP',
            },
            styles: Footer_styles
        },
        key5:{
            items:{
              titleuRL: 'CONTACTO',
            },
            styles: Footer_styles
        },
        key6:{
            items:{
              titleuRL: 'AYUDA',
            },
            styles: Footer_styles
        },
        key7:{
            items:{
              titleuRL: 'CÓMO COMPRAR',
            },
            styles: Footer_styles
        },
        key8:{
            items:{
              titleuRL: 'TÉRMINOS & CONDICIONES',
            },
            styles: Footer_styles
        }, 
        key9:{
            items:{
              titleuRL: 'COMPRA 100% SEGURA',
            },
            styles: Footer_styles
        }, 
        key10:{
            items:{
              titleuRL: 'SIGUENOS EN',
            },
            styles: Footer_styles
        }   
      }


    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container-fluid">
                    <Row>
                        <Col md={3}>
                            <Link to="#">
                                <div className="navbar-dark">
                                    <span className="topnav-logo-sm">
                                        <img src={logoPuff} alt="logo" height="20" width="40" />
                                    </span>
                                </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                        <div >
                            <TextLink items={Footer_items.key1}/>
                            <TextLink items={Footer_items.key2}/>
                            <TextLink items={Footer_items.key3}/>
                            <TextLink items={Footer_items.key4}/>
                        </div>
                        </Col>
                        <Col md={3}>
                        <div >
                            <TextLink items={Footer_items.key5}/>
                            <TextLink items={Footer_items.key6}/>
                            <TextLink items={Footer_items.key7}/>
                            <TextLink items={Footer_items.key8}/>
                        </div>
                        </Col>
                        <Col md={3}>
                            <div style={Footer_styles_col3.content}>
                            <div style={Footer_styles_col3.title}>
                            <TextLink items={Footer_items.key9}/>
                            <div style={Footer_styles_col3.img}>
                            <img
                                    className="d-block w-50 h-50"
                                    src={ImgCompra}
                                    alt="Compra con la garantía de PUFI"
                                />
                                <div style={Footer_styles_col3.siguenos}>
                                <TextLink items={Footer_items.key10}/>
                                <div style={Footer_styles_col3.icons}>
                                <img
                                src={ImgFacebock}
                                alt="Instagram"
                                width= '10%'
                                height= '10%'/><img
                                src={ImgTwitter}
                                alt="Instagram"
                                width= '10%'
                                height= '10%'/><img
                                src={ImgInstagram}
                                alt="Instagram"
                                width= '10%'
                                height= '10%'/>
                                </div>
                            </div>
                            </div>
                            </div>
                           
                            </div>
                            
                        </Col>
                    </Row>
                </div>
            </footer>
            <footer className="footer">
                <div className="container-fluid">
                    <Row>
                        <Col md={6}>
                          PUFI Corpyright 2017 - Todos los derechos reservados  
                        </Col>
                        
                        <Col md={6}>
                            
                        </Col>
                    </Row>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
