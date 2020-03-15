import { REQUEST_ALL_ARTICLES, RECEIVE_ALL_ARTICLES } from './action';

export const fetchReducer=(state,action)=>{
    switch (action.type) {
        case REQUEST_ALL_ARTICLES:
            return Object.assign({},state,{
                isFetching: true
            });
        case RECEIVE_ALL_ARTICLES:
            return Object.assign({},state,{
                isFetching:false,
                list:[...state.list, ...action.list]
            });
        default:
            return state;
    }
};