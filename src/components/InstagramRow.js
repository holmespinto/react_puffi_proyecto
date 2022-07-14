// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
const styles_instagram = {
    content: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        left:0,
        top: 50,
    },
    title: {
        flexDirection:'row',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'normal',
        top: 50,
        left: 0,
        zIndex: 90,
        color:'gray'
    },
    titleuRL: {
        flexDirection:'row',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        fontSize: 5,
        fontWeight: 'normal',
        top: 0,
        left: 0,
        zIndex: 90,
        color:'black'
    },
};
type ItemsInstragram = {
    key:number;
    title: string;
    titleuRL: string;
    url: string;
    colmns: string;
    width: number;
    height: number;
};

const InstagramRow = ({items }:ItemsInstragram): React$Element<React$FragmentType> => {
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
                    <Link to={items.url}>
                        <div className="navbar-dark">
                            <span className="topnav-logo-sm">
                                <p style={styles_instagram.content}>
                                    <div style={styles_instagram.title}>{items.title}
                                    <div style={styles_instagram.titleuRL}><h3> {items.titleuRL}</h3></div>
                                    </div>
                                    
                                </p>
                                
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

export default InstagramRow;
