import { REQUEST_ALL_ARTICLES, RECEIVE_ALL_ARTICLES } from './action';
function uniq(array){
    let temp = []; //一个新的临时数组
    let params = {
        temp : []
    };
    for(let i = 0; i < array.length; i++){
        let val1 = array[i].tagName;
        let flag = false;
        for(let j = 0; j < temp.length; j++){
            let val2 = temp[j].tagName;
            if( val1 === val2 ){
                flag = true;
                break;
            }
        }
        if(!flag) {
            temp.push(array[i]);
        }
    }
    params.temp = temp;
    return params;
}
export const fetchAllArticleReducer=(state,action)=>{
    const newState = state;
    switch (action.type) {
        case REQUEST_ALL_ARTICLES:{
            newState.isFetching = true;
            return newState;
        }
        case RECEIVE_ALL_ARTICLES:{
            let newArticleList = [...newState.articleList, ...action.list];
            let params = uniq(newArticleList);
            newState.articleList = params.temp;
            newState.tagNames = params.tagNames;
            newState.isFetching = false;
            return newState;
        }
        default:
            return state;
    }
};