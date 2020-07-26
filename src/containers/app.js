import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../components/Loader';
import NewsHeader from '../components/newsHeader';
import NewsRow from '../components/newsRow';
import {Chart}  from '../components/chart';
import {Pagination}  from '../components/pagination';

import {requestCommentAPI, voteIncrementPoint, removeNewsObject}  from '../action';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            page: 0
        }
    }
    pageDecrement = () => {
        if(this.state.page === 0) return;
        this.setState( (prevState) => {
            return {
                page: prevState.page - 1 
            }
        }, () => {
        this.props.requestCommentAPI(this.state.page.toString())
        })
    }
    
    pageIncrement = () => {
        this.setState( (prevState) => {
            return {
                page: prevState.page + 1 
            }
        }, () => {
           this.props.requestCommentAPI(this.state.page.toString())
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
        this.props.requestCommentAPI(this.state.page.toString())
    }
    render(){

        return (
            <div className="bg-grey">
                <div className="container">
                    <h1 className="header text-red">Hacker News</h1>
                </div>
            {this.props.comments.loading && <Loader />}
            {this.props.comments && this.props.comments.hits && this.props.comments.hits.length > 0 && (<div className="container">
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
            </div>)
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
        return {
            comments: state
        }
    }
  
const mapDispatchToProps = dispatch => ({
    requestCommentAPI: (page) => dispatch(requestCommentAPI(page)),
    voteIncrementPoint: (objId) => dispatch(voteIncrementPoint(objId)),
    removeNewsObject: (objId) => dispatch(removeNewsObject(objId))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  