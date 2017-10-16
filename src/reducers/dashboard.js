import Immutable from 'immutable';
import axios from 'axios';
import { store } from '../env';
import * as dashboardActions from '../actions/dashboardActions';

const initialState = Immutable.fromJS({

});

const queryNumberCards = ( state, id ) => {
    axios.get('/example',{
        data:{
            "date": "1987-01-23",
            "time": "16:36:09",
            "datetime": "2005-08-14 23:42:20",
            "now": "2017-10-15 16:13:21"
        }
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });

    return state;
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'QUERY_NUMBER_CARDDS':
            return queryNumberCards(state, action.id);
    
        default:
            return state;
    }
};