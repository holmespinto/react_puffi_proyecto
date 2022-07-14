// @flow
import { Row, Col, Card, Alert } from 'react-bootstrap';
import classNames from 'classnames';

// components
const AlertsWithIcon = ({ color, mensaje, key }) => {
    const icons = ['dripicons-warning'];
    console.log('props',color)
    return (
        color === 'danger' && (
            <Card>
                <Card.Body>
                    <Alert variant={color} key={key}>
                        <i className={classNames(icons[0], 'me-2')}></i>
                        <strong>{mensaje}</strong> 
                    </Alert>
                </Card.Body>
            </Card>
        )
    );
};
type ItemsAlerta = {
    key: number;
    color: string;
    mensaje: string;
};
const Alerta = ({props}: ItemsAlerta) : React$Element<React$FragmentType> => {
    return (
        <>
            <Row>
                <Col>
                    <AlertsWithIcon color={props.color} mensaje={props.mensaje} key={props.key} />
                </Col>
            </Row>
        </>
    );
};

export default Alerta;
