import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader";
import NewsHeader from "../components/newsHeader";
import NewsRow from "../components/newsRow";
import Chart from "../components/chart";
import Pagination from "../components/pagination";
import { PageNotFound } from "../components/pageNotFound";

import {
  requestCommentAPI,
  voteIncrementPoint,
  removeNewsObject,
  localStorageNewsPageWise,
} from "../action";

const App = (props) => {
  const navigate = useNavigate();
  const { page } = useParams();

  const pageNumber = parseInt(page, 10) || 0;

  const [currentPage, setCurrentPage] = useState(pageNumber);

  // Sync state when URL changes
  useEffect(() => {
    setCurrentPage(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    navigate(`/${currentPage}`, { replace: true });

    if (typeof window !== "undefined") {
      const cache = localStorage.getItem(currentPage);

      if (cache) {
        const storageJson = JSON.parse(cache);

        if (storageJson?.hits) {
          props.localStorageNewsPageWise(storageJson);
          return;
        }
      }
    }

    props.requestCommentAPI(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      props.comments?.hits
    ) {
      localStorage.setItem(
        currentPage,
        JSON.stringify(props.comments)
      );
    }
  }, [props.comments, currentPage]);

  const pageDecrement = () => {
    if (currentPage <= 0) return;
    setCurrentPage((prev) => prev - 1);
  };

  const pageIncrement = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const voteIncrement = (e) => {
    const objId = e.currentTarget.dataset.objectid;
    props.voteIncrementPoint(objId);
  };

  const removeNewsRow = (e) => {
    const objId = e.currentTarget.dataset.objectid;
    props.removeNewsObject(objId);
  };

  return (
    <div className="bg-grey">
      <div className="container">
        <h1 className="header text-red">Hacker News</h1>
      </div>

      {props.comments.loading && <Loader />}

      {props.comments?.hits?.length > 0 ? (
        <div className="container">
          <Pagination
            pageState={currentPage}
            pageDecrement={pageDecrement}
            pageIncrement={pageIncrement}
            nbPages={props.comments.nbPages}
          />

          <table className="comment-container">
            <NewsHeader />

            <tbody className="tbody">
              {props.comments.actualData?.map((value, index) => (
                <NewsRow
                  key={value.objectID || index}
                  value={value}
                  removeNewsObject={removeNewsRow}
                  voteIncrement={voteIncrement}
                />
              ))}
            </tbody>
          </table>

          <Pagination
            pageState={currentPage}
            pageDecrement={pageDecrement}
            pageIncrement={pageIncrement}
            nbPages={props.comments.nbPages}
          />

          {props.comments.chartData?.length > 1 && (
            <Chart chartData={props.comments.chartData} />
          )}
        </div>
      ) : props.comments?.hits?.length === 0 ? (
        <PageNotFound />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.commentReducer,
});

const mapDispatchToProps = {
  requestCommentAPI,
  voteIncrementPoint,
  removeNewsObject,
  localStorageNewsPageWise,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);