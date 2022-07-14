// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// components

import PageNotFound from './PageNotFound';
//import MensajeBienvenida from './MensajeBienvenida';
import Pufi from './Pufi';

function formatext(str) {
    let text = str.replace('/Pufi/', '').replace('/', '').replace('Pages/Pufis/', 'Pufis');
    return text.charAt(0).toUpperCase() + text.slice(1);
}
const Pufis = () => {
    const INIT_STATE = {
        selected: 'Pufi',
    };
    const appLocation = useLocation();
    const appurl = appLocation.pathname;
    const [state, setState] = useState(INIT_STATE);
    useEffect(() => {
        if (appurl || appurl === null) {
            setState({ selected: appurl });
        }
    }, [appurl]);
    useEffect(() => {
        if (document.body) document.body.classList.remove('authentication-bg');
    }, []);
    const opcion = formatext(state.selected);

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {(() => {
                                switch (opcion) {
                                    case 'Pages/Pufi':
                                        return (
                                            <Row>
                                                <Col lg={12}>
                                                    <Pufis />
                                                </Col>
                                            </Row>
                                        );
                                    default:
                                        return (
                                            <Row>
                                                <Col sm={12}>
                                                    {' '}
                                                    <PageNotFound />
                                                </Col>
                                            </Row>
                                        );
                                }
                            })()}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
export default withRouter(Pufi);
