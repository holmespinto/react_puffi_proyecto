// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const styles_left = {
    content: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        

    },
    button: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        
        borderStyle: 'solid',
        borderLeftColor: 'white',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,    
        left: 230,
        width: 100,
        top: 200,
        zIndex: 10,
    },
};
// components;
type ItemsButton = {
    mensase: string;
    image: string;
};
const ButtonLeft = ({ mensaje, image,width,height}: ItemsButton) => {
    return (
        <React.Fragment>
   {
                  (mensaje)?
                  <Link to="#">
                  <div className="navbar-dark">
                      <div style={styles_left.content}>
                          <div style={styles_left.button}>SHOP</div>
                      </div>
                  </div>
              </Link> :
                ''
    }
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

const ButtonImgLeft = ( {items }:MenuItemType): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <ButtonLeft 
            mensaje={items.mensaje}
            image={items.images}
            height={items.height}
            width={items.width}
            />
        </React.Fragment>
    );
};

export default ButtonImgLeft;
