import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../components/Loader';
import NewsHeader from '../components/newsHeader';
import NewsRow from '../components/newsRow';
import {Chart}  from '../components/chart';
import {Pagination}  from '../components/pagination';
import {PageNotFound}  from '../components/pageNotFound';
import {withRouter, Redirect } from "react-router";
import {handlePaginationData } from './../utils';

import {
    requestCommentAPI,
    voteIncrementPoint,
    removeNewsObject,
    localStorageNewsPageWise
}  from '../action';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            page: 0
        }
    }
    pageDecrement = () => {
        let {page} = this.state;
        if(page === 0) return;

        this.setState( (prevState) => {
            return {
                page: prevState.page - 1 
            }
        }, () => {
            let page = this.state.page.toString();
            this.props.history.push('/'+page);
            handlePaginationData(page, this.props.localStorageNewsPageWise, this.props.requestCommentAPI);
        })
    }
    
    pageIncrement = () => {
        this.setState( (prevState) => {
            return {
                page: prevState.page + 1 
            }
        }, () => {
           this.props.history.push('/'+this.state.page)
           let page = this.state.page.toString();
            handlePaginationData(page, this.props.localStorageNewsPageWise, this.props.requestCommentAPI);
            }
        )
    }

    voteIncrement = (e) => {
        let objId = e.currentTarget.dataset.objectid;
        this.props.voteIncrementPoint(objId)
    }
    removeNewsRow = (e) => {
        let objId = e.currentTarget.dataset.objectid;
        this.props.removeNewsObject(objId)
    }
    componentWillMount(){
        let page = this.props.history.location && this.props.history.location.pathname.toString().split('/')[1];
       
        if( localStorage.getItem(page) && localStorage.getItem(page).length > 20 ){

            let dataPage = parseInt(page)
            this.setState({page: dataPage})
            let storData = JSON.parse(localStorage.getItem(dataPage.toString()));
            this.props.localStorageNewsPageWise(storData);
        }
        else {
            let dataPage = parseInt(page)
            page ? this.setState({
                page: dataPage
            }, () => this.props.requestCommentAPI(this.state.page.toString())) : this.props.requestCommentAPI(this.state.page.toString())
        }
    }

    componentDidUpdate(prevState, nextState){
        localStorage.setItem(nextState.page, JSON.stringify(this.props.comments))
    }

    render(){
        let page = this.props.history.location && this.props.history.location.pathname && this.props.history.location.pathname.toString().split('/')[1];

        if (!page) {
            return <Redirect to='/0'/>;
          }

        return (
            <div className="bg-grey">
                <div className="container">
                    <h1 className="header text-red">Hacker News</h1>
                </div>
            {this.props.comments.loading && <Loader />}
            {this.props.comments && this.props.comments.hits && this.props.comments.hits.length > 0 ? (<div className="container">
            <Pagination 
                    pageState={this.state.page} 
                    pageDecrement={this.pageDecrement}
                    pageIncrement={this.pageIncrement}
                    nbPages={this.props.comments.hits.nbPages}
                />
                <table className="comment-container">

                    <NewsHeader />
                    <tbody className="tbody">
                    {
                        this.props.comments.actualData && this.props.comments.actualData.map(
                            (value, index) => <NewsRow removeNewsObject={this.removeNewsRow} voteIncrement={this.voteIncrement} value={value} key={"key"+index} data-index={'cInd'+index} />
                        )
                    }
                    </tbody>
                </table>
               <Pagination 
                    pageState={this.state.page} 
                    pageDecrement={this.pageDecrement}
                    pageIncrement={this.pageIncrement}
                    nbPages={this.props.comments.hits.nbPages}
                />
                {
                    this.props.comments && this.props.comments.chartData && this.props.comments.chartData.length > 1 &&  <Chart chartData={this.props.comments.chartData}/>
                }
            </div>) : (
                <PageNotFound />
            )
            }
            </div>
        )
    }
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
  