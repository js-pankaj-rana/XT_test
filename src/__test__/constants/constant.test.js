import * as actionConst from './../../constants/constant.action';
import * as urlConst from './../../constants/constant.url';


test('Action Constant testing', () => {
    expect(actionConst.REQUEST_NEWS_API).toBe("REQUEST_NEWS_API");
    expect(actionConst.SUCCESS_NEWS_API).toBe("SUCCESS_NEWS_API");
    expect(actionConst.LOCAL_STORAGE_NEWS_PAGE_WISE).toBe("LOCAL_STORAGE_NEWS_PAGE_WISE");
    expect(actionConst.REMOVE_NEWS).toBe("REMOVE_NEWS");
    expect(actionConst.FAILURE_NEWS_API).toBe("FAILURE_NEWS_API");

})

test('URI Constant testing', () => {
    expect(urlConst.SEARCH_COMMENTS).toBe("https://hn.algolia.com/api/v1/search");
})
