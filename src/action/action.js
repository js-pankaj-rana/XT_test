import {
    REQUEST_NEWS_API,
    VOTE_INCREMENT,
    REMOVE_NEWS
  } from '../constants/constant.action';
  
export function requestCommentAPI(pageNum) {
    return {
      type: REQUEST_NEWS_API,
      payload: pageNum
    };
  }

  
export function voteIncrementPoint(objectId) {
    return {
      type: VOTE_INCREMENT,
      payload: objectId
    };
  }

export function removeNewsObject(objectId) {
    return {
      type: REMOVE_NEWS,
      payload: objectId
    };
  }

  