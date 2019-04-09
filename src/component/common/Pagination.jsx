import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  let { pageSize, onPageChange, itemsCount, currentPageNo } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;
  let pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">Previous</a>
        </li>
        {pages.map(pageNo => (
          <li
            key={pageNo}
            className={
              pageNo === currentPageNo ? "page-item active" : "page-item"
            }
          >
            <a className="page-link" onClick={() => onPageChange(pageNo)}>
              {pageNo}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

/**
 *
 * 类型检查
 **/
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPageNo: PropTypes.number.isRequired
};

export default Pagination;
