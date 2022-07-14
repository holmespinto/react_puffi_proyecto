import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as layoutConstants from '../constants/layout';

// All layouts/containers

import VerticalLayout from '../layouts/Vertical';
import DetachedLayout from '../layouts/Detached';
import HorizontalLayout from '../layouts/Horizontal/';

import { authProtectedFlattenRoutes } from './index';

const Routes = (props) => {
    const { layout } = useSelector((state) => ({
        layout: state.Layout,
    }));

    const getLayout = () => {
        let layoutCls = VerticalLayout;

        switch (layout.layoutType) {
            case layoutConstants.LAYOUT_VERTICAL:
                layoutCls = VerticalLayout;
                break;
            case layoutConstants.LAYOUT_DETACHED:
                layoutCls = DetachedLayout;
                break;
            default:
                layoutCls = HorizontalLayout;

                break;
        }
        return layoutCls;
    };

    let Layout = getLayout();

    return (
        <BrowserRouter>
            <Switch>
                <Route path={authProtectedFlattenRoutes.map((r) => r['path'])}>
                    <Layout {...props} layout={layout}>
                        <Switch>
                            {authProtectedFlattenRoutes.map((route, index) => {
                                return (
                                    !route.children && (
                                        <route.route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    )
                                );
                            })}
                        </Switch>
                    </Layout>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
