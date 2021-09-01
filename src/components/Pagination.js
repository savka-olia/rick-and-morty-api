import React from "react";
const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = []

  for (let i = 1; i <= pages; i++) {
    pageButtons.push(<button className="btn btn-outline-secondary" key={i} onClick={() => goToPage(i)}>{i}</button>);
  }

  return (

    <div className="p-3 d-flex flex-row justify-content-center">
      {prevPage && (<button className="btn btn-outline-secondary" onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button className="btn btn-outline-secondary" onClick={nextPage}>Next</button>)}
    </div>

  )
}
export default Pagination;

