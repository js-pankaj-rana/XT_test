import React from 'react';

export const Loader = () => (
    <>
        <div className="overlay"></div>
        <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
    </div>
  </>
)