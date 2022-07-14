// @flow
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Btnstyles = {
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        borderStyle: 'solid',
        borderLeftColor: 'white',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,    
        left: 730,
        right: 0,
        width: 100,
        top: 0,
        zIndex: 10,
    },
};
// components;

// components;
type ButtonMensajeProps = {
    mensase: string,
    image: string,
};
const ButtonMensaje = ({ mensaje, image }: ButtonMensajeProps) => {
    return (
        <React.Fragment>
            <Carousel.Caption>
                <h3> {mensaje}</h3>
                <Link to="#">
                    <div className="navbar-dark">
                        <div style={Btnstyles.content}>
                            <div style={Btnstyles.button}>SHOP</div>
                        </div>
                    </div>
                </Link>
            </Carousel.Caption>
            <img className="d-block w-100" src={image} alt="Third slide" />
        </React.Fragment>
    );
};
type MenuItemType = {
    key: string,
    mensaje: string,
    images: string,
};

const ItemsSlider = ({ items }: MenuItemType): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <ButtonMensaje mensaje={items.mensaje} image={items.images} />
        </React.Fragment>
    );
};

export default ItemsSlider;
