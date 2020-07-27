import {commentReducer} from './../../reducers/reducers';


test('commentReducer reducer default testing', () => {
    let state = {};
    let action = {
        type: "REQUEST_NEWS_API"
    }

    expect(commentReducer(state, action)).not.toBeNull();
})


test('commentReducer reducer REQUEST_NEWS_API testing', () => {
    let state = {
        testing: "testing data"
    }
    let action = {
        type: "REQUEST_NEWS_API"
    }
    expect(commentReducer(state, action)).toEqual({...state, "loading": true});
})

