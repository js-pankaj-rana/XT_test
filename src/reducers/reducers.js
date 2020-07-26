import * as actionType from './../constants/constant.action';


const defaultState = {
  loading: true
};

export const commentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.REQUEST_NEWS_API:
      return {
        ...state,
        loading: true
      };

    case actionType.SUCCESS_NEWS_API:
      let actualData = action.payload.hits.filter( value => value.title && value.title );
      let chartData = actualData && actualData.length > 0 && actualData.map( obj => {
        let data = {
          name: obj.objectID,
          vote: obj.points
        }
        return data;
      });

        return {
          ...state,
          ...action.payload,
          actualData,
          chartData,
          loading: false
        };

    case actionType.FAILURE_NEWS_API:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    
    case actionType.REMOVE_NEWS:

      let actualDataFilter = state.actualData.filter(
          value => value.objectID !== action.payload
        )
      let chartDataFilter = state.chartData.filter(
          value => value.name !== action.payload
        )  
        
        return {
          ...state,
          actualData: actualDataFilter,
          chartData: chartDataFilter
        }


    case actionType.VOTE_INCREMENT:
        let actualDataFilterV = state.actualData.map(
          value =>  {
             if(value.objectID === action.payload){
               return {
                ...value,
                points: value.points + 1 
               }
             }
             return value;
          }
        );
        let chartDataFilterV = state.chartData.map(
          value =>  {
             if(value.name === action.payload){
               return {
                ...value,
                vote: value.vote + 1 
               }
             }
             return value;
          }
        );

        return {
          ...state,
          actualData: actualDataFilterV,
          chartData: chartDataFilterV
          }
      
    default: 
      return state;  

    };
}


