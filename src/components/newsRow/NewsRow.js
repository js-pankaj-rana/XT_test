import React from 'react';
import moment from 'moment';

export const NewsRow = ({value, voteIncrement, removeNewsObject }) => {
    
    let {num_comments, created_at, title, url, author, points, objectID } = value;
    return (
        <tr id={objectID}>
        <td className="news-cell text-center">
            {num_comments ? num_comments : '-'}
        </td>
        <td className="news-cell text-center">
            {points? points: '-'}
        </td>
        <td className="news-cell text-center">
            <i className="icon icon-upward" data-objectid={objectID} onClick={
                voteIncrement
            }></i>
        </td>
        <td className="news-cell">
            <a href={url} className="text-normal text-default">{
                title
            }</a> {' '}
            {title && <span className="text-grey text-small">by</span>}{' '}
            {author ? author : ' - '} {' '}
            <span className="text-grey text-small">{moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>{' '}
            [<button className="button-link" data-objectid={objectID} onClick={removeNewsObject}>hide</button>]
        </td>
        </tr>
    )
}