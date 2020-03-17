import { REQUEST_ARTICLES_BY_ATICLE_ID, RECEIVE_ARTICLES_BY_ATICLE_ID } from './action';
export const fetchArticleById=(state,action)=>{
    const newState = state;
    switch (action.type) {
        case REQUEST_ARTICLES_BY_ATICLE_ID:{
            newState.isFetching = true;
            return newState;
        }
        case RECEIVE_ARTICLES_BY_ATICLE_ID:{
            let newArticle = action.list.data.data;
            newState.article = newArticle;
            newState.isFetching = false;
            return newState;
        }
        default:
            return state;
    }
};