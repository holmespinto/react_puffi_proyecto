// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const PageNotFound = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} xxl={4}>
                            <Card>
                                {/* logo */}

                                <Card.Body className="p-4">
                                    <div className="text-center">
                                        <h1 className="text-error">
                                            4<i className="mdi mdi-emoticon-sad"></i>4
                                        </h1>
                                        <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PageNotFound;
