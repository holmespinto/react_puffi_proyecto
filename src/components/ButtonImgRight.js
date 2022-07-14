// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Btnstyles_left = {
    text: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        marginRight: 10,
        height: 50,
        padding: 8,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 40,
        margin: 24,
        color:'black'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 10,
        position: 'relative',
        left: -120,
        right: 0,
        width: '200%',
        height: '100%',
        top: 150,
        zIndex: 10,
    },
    descripcion: {
        flexDirection:'row',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'normal',
        top: 30,
        left: 0,
        zIndex: 90,
        color:'gray'
    },
};
// components;
     
// components;
type ItemsButton = {
    mensase: string;
    image: string;
};
const ButtonRight= ({ mensaje, image,width,height}: ItemsButton) => {
    return (
        <React.Fragment>
                    <Link to="#">
                        <div className="navbar-dark">
                            <span className="topnav-logo-sm">
                                <p style={Btnstyles_left.text}>
                                    <div style={Btnstyles_left.button}><h3> {mensaje}</h3>
                                    <div>Descripción del producto. Este es un texto descriptivo de la sección.</div>
                                    <div style={Btnstyles_left.descripcion}>> VER MAS</div>
                                    </div>
                                    
                                </p>
                                
                            </span>
                        </div>
                    </Link>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Third slide"
                    width={width}
                    height={height}
                />
        </React.Fragment>
    );
};
type MenuItemType = {
        key: string;
        mensaje: string;
        images: string;
        height:number;
        width:number;
};

const ButtonImgRight = ( {items }:MenuItemType): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <ButtonRight
            mensaje={items.mensaje}
            image={items.images}
            height={items.height}
            width={items.width}
            />
        </React.Fragment>
    );
};

export default ButtonImgRight;
