export const resetNews = () => {
  localStorage.clear();
  window.location.href = "/0";
};

export const getValidNews = (hits = []) => {
  return hits.filter(({ title }) => !!title);
};

export const getChartData = (news = []) => {
  return news.map(({ objectID, points }) => ({
    name: objectID,
    vote: points,
  }));
};

export const removeNewsItem = (actualData = [], chartData = [], objectId) => {
  return {
    actualData: actualData.filter(({ objectID }) => objectID !== objectId),
    chartData: chartData.filter(({ name }) => name !== objectId),
  };
};

export const incrementVote = (state, objectId) => ({
  actualData: state.actualData.map((item) =>
    item.objectID === objectId ? { ...item, points: item.points + 1 } : item,
  ),

  chartData: state.chartData.map((item) =>
    item.name === objectId ? { ...item, vote: item.vote + 1 } : item,
  ),
});
