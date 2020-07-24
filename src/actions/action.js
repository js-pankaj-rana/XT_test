import {
    REQUEST_COMMENT_API,
  } from '../constants/constant.action';
  
  export function requestCommentAPI(pageNum) {
    return {
      type: REQUEST_COMMENT_API,
      payload: pageNum
    };
  }

  