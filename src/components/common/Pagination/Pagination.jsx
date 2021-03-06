import s from "./Pagination.module.css";
import React, { useState } from "react";
import cn from "classnames";
import arrow from "./../../../assets/icons/arrow.svg";
import doubleArrow from "./../../../assets/icons/double-arrow.svg";

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
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination}>
      {portionNumber > 1 && (
        <div
          className={s.doubleArrowLeft}
          onClick={() => {
            setPortionNumber(1);
            onPageChanged(1);
          }}
        >
          <img src={doubleArrow} alt="" />
        </div>
      )}
      {portionNumber > 1 && (
        <div
          className={s.arrowLeft}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            onPageChanged((portionNumber - 1) * portionSize);
          }}
        >
          <img src={arrow} alt="" />
        </div>
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
        <div
          className={s.arrowRight}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onPageChanged(portionNumber * portionSize + 1);
          }}
        >
          <img src={arrow} alt="" />
        </div>
      )}
      {portionCount !== portionNumber && (
        <div
          className={s.doubleArrowRight}
          onClick={() => {
            setPortionNumber(Math.ceil(pagesCount / portionSize));
            onPageChanged(pagesCount);
          }}
        >
          <img src={doubleArrow} alt="" />
        </div>
      )}
    </div>
  );
};

export default Pagination;
