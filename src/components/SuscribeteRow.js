// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';

import InputEmail from '../components/InputEmail';

const styles_suscribite = {
    content: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        left:0,
        top: 50,
        marginBottom:250,
    },
    title: {
        position: 'relative',
        flexDirection:'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'normal',
        top: 0,
        left: 50,
        zIndex: 0,
        color:'gray'
    },
    titleuRL: {
        flexDirection:'row',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'normal',
        top: -10,
        left: 0,
        zIndex: 0,
        color:'black'
    },
    notice: {
        flexDirection:'row',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'normal',
        top: -10,
        left: 0,
        zIndex: 90,
        color:'gray'
    },
};
type ItemsSuscribite = {
    key:number;
    title: string;
    titleuRL: string;
    suscribite: string;
    url: string;
    colmns: string;
    width: number;
    height: number;
};

const SuscribiteRow = ({items }:ItemsSuscribite): React$Element<React$FragmentType> => {
    return (
    <React.Fragment>
         <Row>
            <Col lg={4}>
            <img
                    className="d-block w-100"
                    src={items.columns}
                    alt="Third slide"
                    height={items.height}
                    width={items.width}
                />
            </Col>
            <Col lg={4}>
                    <Link to="#">
                        <div className="navbar-dark">
                            <span className="topnav-logo-sm">
                                <div style={styles_suscribite.content}>
                                    <div style={styles_suscribite.title}>
                                    <p> {items.title}</p>
                                    <div style={styles_suscribite.titleuRL}>
                                        <h3> {items.titleuRL}</h3>
                                        
                                        <div style={styles_suscribite.notice}>
                                        {items.notice}
                                            </div>
                                        </div>
                                        <InputEmail/>
                                    </div>
                                    
                                </div>
                            </span>
                        </div>
                    </Link>
                    </Col>      
                    <Col lg={4}>
                    <img
                    className="d-block w-100"
                    src={items.columns}
                    alt="Third slide"
                    height={items.height}
                    width={items.width}
                />
                    </Col>     
        </Row>    
        </React.Fragment>
    );
};

export default SuscribiteRow;
