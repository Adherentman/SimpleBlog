import co from 'co';
import Immutable from 'immutable';
import { store } from '../env';
import { dashboard } from '../api/demo/index';
import * as dashboardActions from '../actions/dashboardActions';

const initialState = Immutable.fromJS({

});

const getDashboardCards = (state, field) => {
dashboard().then(res => {
    let list = res && res.data && res.data.cards;
    console.log(list);
    store.dispatch(dashboardActions.gotDashboardCards(res.data && res.data.cards));
},err => {
    console.log(err);
});

return state;
};

const gotDashboardCards = (state, info) => {
    return state.set('cards',Immutable.fromJS(info));
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DASH_BOARD_CARDS':
            return getDashboardCards(state, action.field);
        case 'GOT_DASH_BOARD_CARDS':
            return gotDashboardCards(state, action.info)
        default:
            return state;
    }
};