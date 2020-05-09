let DEFAULT_PRE = "https://yuudachi.cn:444/";

// 请求时的URL设置
let CONSTURL = {
    // 获取所有文章的基础信息
    GET_ALL_ARTICLE : DEFAULT_PRE + "articles?pn=",
    // 获取部分文章信息
    GET_ARTICLES_BY_PARAMS : DEFAULT_PRE + "article",
    // 根据ID获取文章详细信息
    GET_ARTICLE_BY_ID : DEFAULT_PRE + "article/",
    // 获取Banner栏
    GET_ALL_BANNERS : DEFAULT_PRE + "banners",
    // 获取评论
    GET_ALL_COMMENTS : DEFAULT_PRE + "comments",
    // 评论操作
    COMMENTS_OPERATION : "comment",
    // 资源前缀
    SOURCE_PRE : "https://yuudachi.cn:444/static/images/article/",
}

export default CONSTURL;