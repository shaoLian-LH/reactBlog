import { REQUEST_ARTICLES_BY_TYPE_OR_TITIL, RECEIVE_ARTICLES_BY_TYPE_OR_TITIL } from './action';
function uniq(array){
    let temp = []; //一个新的临时数组
    for(let i = 0; i < array.length; i++){
        let val1 = array[i].id;
        let flag = false;
        for(let j = 0; j < temp.length; j++){
            let val2 = temp[j].id;
            if( val1 === val2 ){
                flag = true;
                break;
            }
        }
        if(!flag) temp.push(array[i]);
    }
    return temp;
}
export const fetchArticleByParamsReducer=(state,action)=>{
    const newState = state;
    switch (action.type) {
        case REQUEST_ARTICLES_BY_TYPE_OR_TITIL:{
            newState.isFetching = true;
            return newState;
        }
        case RECEIVE_ARTICLES_BY_TYPE_OR_TITIL:{
            if(action.list.data.infos.list === undefined ) return state;
            let newArticleList = [...action.list.data.infos.list];
            newState.articleList = uniq(newArticleList);
            newState.isFetching = false;
            return newState;
        }
        default:
            return state;
    }
};