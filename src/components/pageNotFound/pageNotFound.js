import React from 'react'
import {resetNews} from './../../utils';

export const PageNotFound = () => {
    return (
        <div className="container text-center">
            <p>Something went wrong...</p>
            <button className="btn btn-link button-counter" onClick={ resetNews }>Go back</button>
        </div>
    )
}