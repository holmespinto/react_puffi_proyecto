import { expectSaga } from 'redux-saga-test-plan';

import * as layoutConstants from '../../constants/layout';
import * as actions from './actions';
import layoutReducer from './reducers';

import { watchChangeLayoutType, watchChangeLayoutWidth, watchShowRightSidebar, watchHideRightSidebar } from './saga';

const INIT_STATE = {
    layoutType: layoutConstants.LAYOUT_VERTICAL,
    layoutWidth: layoutConstants.LAYOUT_WIDTH_FLUID,

    showRightSidebar: false,
};

describe('change layout type flow', () => {
    it('vertical', () => {
        return expectSaga(watchChangeLayoutType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayout(layoutConstants.LAYOUT_VERTICAL))
            .hasFinalState({
                ...INIT_STATE,
                layoutType: layoutConstants.LAYOUT_VERTICAL,
            })
            .silentRun();
    });

    it('horizontal', () => {
        return expectSaga(watchChangeLayoutType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayout(layoutConstants.LAYOUT_HORIZONTAL))
            .hasFinalState({
                ...INIT_STATE,

                layoutType: layoutConstants.LAYOUT_HORIZONTAL,
            })
            .silentRun();
    });

    it('detached', () => {
        return expectSaga(watchChangeLayoutType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayout(layoutConstants.LAYOUT_DETACHED))
            .hasFinalState({
                ...INIT_STATE,
                layoutType: layoutConstants.LAYOUT_DETACHED,
            })
            .silentRun();
    });
});

describe('change layout width flow', () => {
    it('fluid', () => {
        return expectSaga(watchChangeLayoutWidth)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_FLUID))
            .hasFinalState({
                ...INIT_STATE,
                layoutWidth: layoutConstants.LAYOUT_WIDTH_FLUID,
            })
            .silentRun();
    });

    it('boxed', () => {
        return expectSaga(watchChangeLayoutWidth)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_BOXED))
            .hasFinalState({
                ...INIT_STATE,
                layoutWidth: layoutConstants.LAYOUT_WIDTH_BOXED,
            })
            .silentRun();
    });
});

describe('change left sidebar theme flow', () => {
    it('light', () => {
        return expectSaga()
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_LIGHT))
            .hasFinalState({ ...INIT_STATE })
            .silentRun();
    });

    it('dark', () => {
        return expectSaga()
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK))
            .hasFinalState({ ...INIT_STATE })
            .silentRun();
    });

    it('default', () => {
        return expectSaga()
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT))
            .hasFinalState({ ...INIT_STATE })
            .silentRun();
    });
});

describe('change left sidebar type flow', () => {
    it('condensed', () => {
        return expectSaga()
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED))
            .hasFinalState({
                ...INIT_STATE,
            })
            .silentRun();
    });

    it('scrollable', () => {
        return expectSaga()
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE))
            .hasFinalState({
                ...INIT_STATE,
            })
            .silentRun();
    });

    it('fixed', () => {
        return expectSaga()
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED))
            .hasFinalState({
                ...INIT_STATE,
            })
            .silentRun();
    });
});

describe('right sidebar flow', () => {
    it('hide', () => {
        return expectSaga(watchHideRightSidebar)
            .withReducer(layoutReducer)
            .dispatch(actions.hideRightSidebar())
            .hasFinalState({
                ...INIT_STATE,
                showRightSidebar: false,
            })
            .silentRun();
    });

    it('show', () => {
        return expectSaga(watchShowRightSidebar)
            .withReducer(layoutReducer)
            .dispatch(actions.showRightSidebar())
            .hasFinalState({
                ...INIT_STATE,
                showRightSidebar: true,
            })
            .silentRun();
    });
});
