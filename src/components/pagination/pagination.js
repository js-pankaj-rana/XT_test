import React from 'react'

export const Pagination = ({pageState, pageDecrement, pageIncrement, nbPages}) => {
return (
        <div className="pagination-wrap text-right">
            <button 
                className="btn btn-link button-counter"
                disabled={pageState === 0}
                onClick={pageDecrement}>
                    Previous
            </button>
            |
            <button 
                className="btn btn-link button-counter"
                disabled={pageState > nbPages}
                onClick={pageIncrement}>
                    Next
            </button>
        </div>
    )    
}
