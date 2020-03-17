// 获取全部文章列表
const REQUEST_ALL_ARTICLES = "REQUEST_ALL_ARTICLES";
const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";

// 开始请求
const RequestALLArticles = ()=>({
    type: REQUEST_ALL_ARTICLES
})



// 接收到的数据
const ReceiveAticlesInfos = (res)=>({
    type: RECEIVE_ALL_ARTICLES,
    list: res.data.infos.list,
    receiveAt: Date.now()
});

export {
    REQUEST_ALL_ARTICLES,
    RECEIVE_ALL_ARTICLES,
    RequestALLArticles,
    ReceiveAticlesInfos
}