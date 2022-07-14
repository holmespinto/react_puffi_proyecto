import axios from 'axios';

import config from '../../config';

// content type 
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = config.API_URL;

// intercepting to capture errors
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let message;

        if (error && error.response && error.response.status === 404) {
            // window.location.href = '/not-found';
        } else if (error && error.response && error.response.status === 403) {
            window.location.href = '/access-denied';
        } else {
            switch (error.response.status) {
                case 401:
                    message = 'Invalid credentials';
                    break;
                case 403:
                    message = 'Access Forbidden';
                    break;
                case 404:
                    message = 'Sorry! the data you are looking for could not be found';
                    break;
                default: {
                    message =
                        error.response && error.response.data ? error.response.data['message'] : error.message || error;
                }
            }
            return Promise.reject(message);
        }
    }
);

/**
 * Sets the default authorization
 * @param {*} token
 */

class APICore {
    setMenuPrincipal() {
        const MENU_ITEMS = [
            {
                key: 'pages',
                label: 'MI CUENTA',
                isTitle: false,
                icon: 'uil-arrow-down',
                badge: { variant: 'success', text: '5' } ,
                children: [
                    { key: '1', label: 'Iniciar con email', url: '/', parentKey: 'pages' }
                ],
                
            },
            {
                key: 'usuarios',
                label: 'MI COMPRA',
                isTitle: false,
                //icon: 'uil-clipboard-alt',
                badge: { variant: 'success', text: '1' } ,
                children: [
                    {
                        key: 'ds-personales',
                        label: 'Registrar Compra',
                        url: '/',
                        parentKey: 'usuarios',
                    },
                ],
                
            },
        ];
        return MENU_ITEMS;
    }
}

export { APICore };
