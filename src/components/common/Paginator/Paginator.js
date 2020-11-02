import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalItemsCount, currentPage, portionSize, onPageChange}) => {
  let pagesCount = Math.ceil(totalItemsCount / 6);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize;
  let rightPortionNumber = portionNumber * portionSize;
  let leftSingleArrow = "<";
  let rightSingleArrow = ">";
  let rightDoubleArrow = ">>";
  let leftDoubleArrow = "<<";

  return (
    <div className={s.pages_wrapper}>
     {portionNumber > 2 && <button onClick={() => {setPortionNumber(portionNumber = 1)}}>{leftDoubleArrow}</button>}
     {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber = portionNumber - 1)}}>{leftSingleArrow}</button>} 
      {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber )
      .map((p, i) => {
        return (
          <div
            key={i}
            className={p === currentPage ? s.active_page : s.page_item}
            onClick={() => onPageChange(p)}
          >
            {p}
          </div>
        );
      })}
      {portionsCount > portionNumber &&  <button onClick={() => {setPortionNumber(portionNumber = portionNumber + 1)}}>{rightSingleArrow}</button>}
      {(portionsCount - portionNumber) > 1 && <button onClick={() => {setPortionNumber(portionNumber = portionsCount)}}>{rightDoubleArrow}</button>}
    </div>
  );
};

export default Paginator;
