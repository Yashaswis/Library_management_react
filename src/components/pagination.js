import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BPagination() {
  return (
    <div className="pagination">
      <div className="perpageFilter">
        <span>Rows per page:</span>
        <select className="perpageFilter__select">
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
      <div className="currentPageItems"><span className="currentPageItems--bold">1-10</span> of 15</div>
      <div className="pagination__butons">
        <a href="#" className="pagination__butons left">&lt;</a>
        <a href="#" className="pagination__butons right">&gt;</a>
      </div>
    </div>
  );
}