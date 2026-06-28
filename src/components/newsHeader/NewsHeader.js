import React from "react";
import { TableHead } from "./TableHead";
const headerList = ["Comments", "Vote Count", "UpVote", "News Details"];

const NewsHeader = () => {
  return (
    <thead>
      <tr>
        {headerList.map((label, index) => (
          <TableHead
            key={index}
            className={index === 0 || index === 1 ? "w-10" : ""}
            label={label}
          />
        ))}
      </tr>
    </thead>
  );
};

export const NewsHeaderMemo = React.memo(NewsHeader);
