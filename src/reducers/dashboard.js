import Immutable from 'immutable';
import { store } from '../env';
import { _dashboard_get, browserList_get } from '../api/demo/index';
import * as dashboardActions from '../actions/dashboardActions';

const initialState = Immutable.fromJS({
    cards: [],
    browserList: [],
});

const getDashboardCards = (state, field) => {
_dashboard_get().then(res => {
    let list = res && res.data && res.data.cards;
    console.log(list,'cardsList');
    store.dispatch(dashboardActions.gotDashboardCards(list));
},err => {
    console.log(err);
});
return state;
};

const gotDashboardCards = (state, info) => {
    return state.set('cards', Immutable.fromJS(info));
}

const getDashboardBrowser = (state, field) => {
browserList_get().then(res => {
    let col = res && res.data && res.data.browserList;
    console.log(col,'browserList');
    store.dispatch(dashboardActions.gotDashboardChart(col));
},err => {
    console.log(err);
});
return state;
};

const gotDashboardBrowser = (state, info) => {
    return state.set('browserList', Immutable.fromJS(info));
};

// const getDashboardChart = (state, field) => {
// dashboard().then(res => {
//     let list = res && res.data && res.data.equipment;
//     console.log(list,'chartList');
//     store.dispatch(dashboardActions.gotDashboardChart(res.data && res.data.equipment));
// },err => {
//     console.log(err);
// });
// return state;
// };

// const gotDashboardChart = (state, info) => {
//     return state.set('equipment', Immutable.fromJS(info));
// }




export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DASH_BOARD_CARDS':
            return getDashboardCards(state, action.field);
        case 'GOT_DASH_BOARD_CARDS':
            return gotDashboardCards(state, action.info);
        // case 'GET_DASH_BOARD_CHART':
        //     return getDashboardChart(state, action.field);
        // case 'GOT_DASH_BOARD_CHART':
        //     return gotDashboardChart(state, action.info);
        case 'GET_DASH_BOARD_BROWSER':
            return getDashboardBrowser(state, action.field);
        case 'GOT_DASH_BOARD_BROWSER':
            return gotDashboardBrowser(state, action.info);
        default:
            return state;
    }
};