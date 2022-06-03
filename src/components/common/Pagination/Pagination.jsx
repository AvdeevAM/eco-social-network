import s from "./Pagination.module.css";
import React, { useState } from "react";
import cn from "classnames";

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(1);
            onPageChanged(1);
          }}
        >
          FIRST
        </button>
      )}
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            onPageChanged((portionNumber - 1) * portionSize);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                {
                  [s.selectedPage]: currentPage === p,
                },
                s.pageNumber
              )}
              key={p}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onPageChanged(portionNumber * portionSize + 1);
          }}
        >
          NEXT
        </button>
      )}
      {portionCount !== portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(Math.ceil(pagesCount / portionSize));
            onPageChanged(pagesCount);
          }}
        >
          LAST
        </button>
      )}
    </div>
  );
};

export default Pagination;
