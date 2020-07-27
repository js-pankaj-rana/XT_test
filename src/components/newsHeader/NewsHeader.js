import React  from 'react';

const NewsHeader = () => {
        return (
            <thead>
            <tr>
            <th className="comments-header w-10">
                Comments
            </th>
            <th className="comments-header w-10">
                Vote Count
            </th>
            <th className="comments-header">
                UpVote
            </th>
            <th className="comments-header">
                News Details
            </th>
            </tr>
        </thead>
        )
    }


export const NewsHeaderMemo = React.memo(NewsHeader); 