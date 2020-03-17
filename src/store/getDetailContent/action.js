// 按照TypeId和Title获取文章
const REQUEST_ARTICLES_BY_ATICLE_ID = "REQUEST_ARTICLES_BY_ATICLE_ID";
const RECEIVE_ARTICLES_BY_ATICLE_ID = "RECEIVE_ARTICLES_BY_ATICLE_ID";
// 开始请求
const RequestArticleById = () => ({
    type: REQUEST_ARTICLES_BY_ATICLE_ID
})

// 接收到的数据
const RecieveArticleById = (res)=>({
    type: RECEIVE_ARTICLES_BY_ATICLE_ID,
    list: res,
});

export {
    REQUEST_ARTICLES_BY_ATICLE_ID,
    RECEIVE_ARTICLES_BY_ATICLE_ID,
    RequestArticleById,
    RecieveArticleById
}