import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {withRouter, useParams } from "react-router";

import { Loader } from '../components/Loader';
import NewsHeader from '../components/newsHeader';
import NewsRow from '../components/newsRow';
import Chart from '../components/chart';
import Pagination  from '../components/pagination';
import {PageNotFound}  from '../components/pageNotFound';

import {
    requestCommentAPI,
    voteIncrementPoint,
    removeNewsObject,
    localStorageNewsPageWise
}  from '../action';

const App = (props) => {
    const pageNumber = parseInt(useParams().page);
    const [page, setPage] = useState( pageNumber || 0 );

    useEffect(() => {
        props.history.push('/'+page);
        
        if( localStorage.getItem(page) ){
            let storageJson = JSON.parse(localStorage.getItem(page));
            let isHits = storageJson.hasOwnProperty('hits');
            isHits &&  props.localStorageNewsPageWise(storageJson);
            return;
        }
        props.requestCommentAPI(page);
    }, [page])

    useEffect(() => {
        let isHits = props.comments.hasOwnProperty('hits');
        if(isHits){
            localStorage.setItem(page, JSON.stringify(props.comments))
        }
    }, [props.comments])
    
    const pageDecrement = () => {
        if(page <= 0) return;
        setPage(page - 1);
    }
    
    const pageIncrement = () => {
        setPage(page + 1);
    }

    const voteIncrement = (e) => {
        let objId = e.currentTarget.dataset.objectid;
        props.voteIncrementPoint(objId)
    }
    const removeNewsRow = (e) => {
        let objId = e.currentTarget.dataset.objectid;
        props.removeNewsObject(objId)
    }
        return (
            <div className="bg-grey">
                <div className="container">
                    <h1 className="header text-red">Hacker News</h1>
                </div>
            {props.comments.loading && <Loader />}
            
            {props.comments && props.comments.hits && props.comments.hits.length > 0 ? (<div className="container">
            <Pagination 
                    pageState={page} 
                    pageDecrement={pageDecrement}
                    pageIncrement={pageIncrement}
                    nbPages={props.comments.hits.nbPages}
                />
                <table className="comment-container">

                    <NewsHeader />
                    <tbody className="tbody">
                    {props.comments.actualData && props.comments.actualData.map(
                            (value, index) => <NewsRow removeNewsObject={removeNewsRow} voteIncrement={voteIncrement} value={value} key={"key"+index} data-index={'cInd'+index} />
                        )
                    }
                    </tbody>
                </table>
               <Pagination 
                    pageState={page} 
                    pageDecrement={pageDecrement}
                    pageIncrement={pageIncrement}
                    nbPages={props.comments.hits.nbPages}
                />
                {
                    props.comments && props.comments.chartData && props.comments.chartData.length > 1 &&  <Chart chartData={props.comments.chartData}/>
                }
            </div>) : props.comments && props.comments.hits && props.comments.hits.length === 0 ? <PageNotFound /> : <p className="text-center">Loading...</p>
            }
            </div>
        )
    }


const mapStateToProps = state => {
        return {
            comments: state.commentReducer
        }
    }
  
const mapDispatchToProps = dispatch => ({
    requestCommentAPI: (page) => dispatch(requestCommentAPI(page)),
    voteIncrementPoint: (objId) => dispatch(voteIncrementPoint(objId)),
    removeNewsObject: (objId) => dispatch(removeNewsObject(objId)),
    localStorageNewsPageWise: (obj) => dispatch(localStorageNewsPageWise(obj))
  });
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(App));
  