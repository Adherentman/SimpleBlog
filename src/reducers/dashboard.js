import Immutable from 'immutable';
import { store } from '../env';
import { _dashboard_get } from '../api/demo/index';
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

const gotDashboardCards = (state, cards) => {
    let list = Immutable.fromJS(cards);
    return state.set('cards', list);
}

const getDashboardBrowser = (state, field) => {
_dashboard_get().then(res => {
    let list = res && res.data && res.data.browserList;
    console.log(list,'browserList');
    store.dispatch(dashboardActions.gotDashboardBrowser(list));
},err => {
    console.log(err);
});
return state;
};

const gotDashboardBrowser = (state, browserList) => {
    let list = Immutable.fromJS(browserList);
    return state.set('browserList', list);
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
            return gotDashboardCards(state, action.cards);
        // case 'GET_DASH_BOARD_CHART':
        //     return getDashboardChart(state, action.field);
        // case 'GOT_DASH_BOARD_CHART':
        //     return gotDashboardChart(state, action.info);
        case 'GET_DASH_BOARD_BROWSER':
            return getDashboardBrowser(state, action.field);
        case 'GOT_DASH_BOARD_BROWSER':
            return gotDashboardBrowser(state, action.browserList);
        default:
            return state;
    }
};