import * as actionType from "./../constants/constant.action";
import {
  getValidNews,
  getChartData,
  removeNewsItem,
  incrementVote,
} from "./../utils/utils";

const defaultState = {
  loading: true,
};

export const commentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.REQUEST_NEWS_API:
      return {
        ...state,
        loading: true,
      };

    case actionType.SUCCESS_NEWS_API:
      const actualData = getValidNews(action.payload.hits);
      const chartData = getChartData(actualData);

      return {
        ...state,
        ...action.payload,
        actualData,
        chartData,
        loading: false,
      };

    case actionType.FAILURE_NEWS_API:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case actionType.REMOVE_NEWS: {
      const { actualData, chartData } = removeNewsItem(
        state.actualData,
        state.chartData,
        action.payload,
      );

      return {
        ...state,
        actualData,
        chartData,
      };
    }
    case actionType.VOTE_INCREMENT: {
      return {
        ...state,
        ...incrementVote(state, action.payload),
      };
    }
    case actionType.LOCAL_STORAGE_NEWS_PAGE_WISE:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
