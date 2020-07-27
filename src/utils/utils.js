export const handlePaginationData = (page, localStorageNewsPageWise, requestCommentAPI) => {
    if( localStorage.getItem(page) && localStorage.getItem(page).length > 20){
        let storData = JSON.parse(localStorage.getItem(page));
        localStorageNewsPageWise(storData);
    }
    else {
        requestCommentAPI(page)
    }
}

export const resetNews = () => {
    localStorage.clear();
    window.location.href="/0"
}