// @flow
import React from 'react';
import { Row, Col, Card, Carousel} from 'react-bootstrap';
 
import ItemsSlider from '../components/ItemsSlider';
import ButtonImgLeft from '../components/ButtonImgLeft';
import ButtonImgRight from '../components/ButtonImgRight';
import InstagramRow from '../components/InstagramRow';
import SuscribeteRow from '../components/SuscribeteRow';


import { itemscol2,items,itemsInstagram, itemsSuscribite,itemscol3} from '../constants/menu';


const SlidesWithCaptions = () => {
    return (
        <Card>
            <Card.Body>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <ItemsSlider items={items.images1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ItemsSlider items={items.images2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ItemsSlider items={items.images3} />
                    </Carousel.Item>
                </Carousel>{' '}
            </Card.Body>{' '}
        </Card>
    );
};
const GridDosColumnRow1 = () => {
    return (
        <Row>
            <Col lg={6}>
                <ButtonImgLeft items={itemscol2.images1} />
            </Col>
            <Col lg={6}>
                <ButtonImgRight items={itemscol2.images2} />
            </Col>
        </Row>
    );
};
const GridDosColumnRow2 = () => {
    return (
        <Row>
            <Col lg={6}>
                <ButtonImgRight items={itemscol2.images3} />
            </Col>
            <Col lg={6}>
                <ButtonImgLeft items={itemscol2.images4} />
            </Col>
        </Row>
    );
};
const GridDosColumnRow3 = () => {
    return (
        <Row>
            <Col lg={6}>
                <ButtonImgLeft items={itemscol2.images5} />
            </Col>
            <Col lg={6}>
                <ButtonImgRight items={itemscol2.images6} />
            </Col>
        </Row>
    );
};
const GridTresColumnRow1 = () => {
    return (
        <Row className="d-flex p-2">
            <Col lg={2}>
            </Col>
            <Col lg={3}>
                <ButtonImgLeft items={itemscol3.images1} />
            </Col>
            <Col lg={3}>
                <ButtonImgLeft items={itemscol3.images2} />
            </Col>
            <Col lg={3}>
                <ButtonImgLeft items={itemscol3.images3} />
            </Col>
                <Col lg={2}>

                </Col>          
        </Row>
    );
};
const GridTresColumnRow2 = () => {
    return (
        <Row>
            <Col lg={2}>
            </Col>
            <Col lg={3}>
                <ButtonImgLeft items={itemscol3.images4} />
            </Col>
            <Col lg={3}>
                <ButtonImgLeft items={itemscol3.images5} />
            </Col>
            <Col lg={3}>
                <ButtonImgLeft items={itemscol3.images6} />
            </Col>
                <Col lg={2}>

                </Col>          
        </Row>
    );
};

const Pufi = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <SlidesWithCaptions />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <GridDosColumnRow1 />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <GridDosColumnRow2 />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <GridDosColumnRow3 />
                </Col>
            </Row>
            <Row>
           <Col lg={12}>
                <InstagramRow 
                items={itemsInstagram.instagram}
                />
                </Col>
            </Row>
            <Row>
           <Col lg={12}>
           <GridTresColumnRow1 />
           <GridTresColumnRow2 />
            </Col>
            </Row>
            <Row>
           <Col lg={12}>
                <SuscribeteRow 
                items={itemsSuscribite.suscribite}
                />
                </Col>
            </Row>
               
        </React.Fragment>
    );
};

export default Pufi;
