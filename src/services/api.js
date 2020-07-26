import axios from 'axios';
import {SEARCH_COMMENTS} from './../constants/constant.url';

function getMethod(url, header) {
  return axios
    .get(url, { headers: '' })
    .then(handleResponse)
    .catch(error);
}


function handleResponse(response) {
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    return response;
  }
  
  
function error(error) {
    return error;
  }
  
  
export function getCommentApi(page) {
    let url = SEARCH_COMMENTS;
    if(page){
      url = url+'?page='+page;
    }
  return getMethod(url);
}
