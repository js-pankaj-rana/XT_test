import { requestCommentAPI, voteIncrementPoint, removeNewsObject } from './../../action';
import * as actionType from './../../constants/constant.action';


test("Action function testing for request comment api", () => {
    let page = 0;
    let apiPayload = requestCommentAPI(page)
    expect(apiPayload).toEqual({"type": actionType.REQUEST_NEWS_API, payload: page});
})


test("Action function testing for incrementing the poll ", () => {
    let pollPayload = voteIncrementPoint()
    expect(pollPayload).toEqual({"type": actionType.VOTE_INCREMENT});

})


test("Action function testing for removing the news", () => {
    let removePayload = removeNewsObject()
    expect(removePayload).toEqual({"type": actionType.REMOVE_NEWS});
})
