let DEFAULT_PRE = "http://121.199.23.187:8090/";

// 请求时的URL设置
let CONSTURL = {
    // 获取所有文章的基础信息
    GET_ALL_ARTICLE : DEFAULT_PRE + "articles?pn=",
    // 获取部分文章信息
    GET_ARTICLES_BY_PARAMS : DEFAULT_PRE + "article",
    // 根据ID获取文章详细信息
    GET_ARTICLE_BY_ID : DEFAULT_PRE + "article/",
}

export default CONSTURL;