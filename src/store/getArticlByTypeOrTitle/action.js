// 按照TypeId和Title获取文章
const REQUEST_ARTICLES_BY_TYPE_OR_TITIL = "REQUEST_ARTICLES_BY_TYPE_OR_TITIL";
const RECEIVE_ARTICLES_BY_TYPE_OR_TITIL = "RECEIVE_ARTICLES_BY_TYPE_OR_TITIL";
// 开始请求
const RequestArticleByParams = () => ({
    type: REQUEST_ARTICLES_BY_TYPE_OR_TITIL
})

// 接收到的数据
const RecieveArticleByParams = (res)=>({
    type: RECEIVE_ARTICLES_BY_TYPE_OR_TITIL,
    list: res,
});

export {
    REQUEST_ARTICLES_BY_TYPE_OR_TITIL,
    RECEIVE_ARTICLES_BY_TYPE_OR_TITIL,
    RequestArticleByParams,
    RecieveArticleByParams
}