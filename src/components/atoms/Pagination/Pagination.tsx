import React from 'react';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import './Pagination.scss';

type PaginationProps = {
  totalCount?: number;
  siblingCount?: number;
  currentPage?: number;
  pageSize?: number;
  className?: string;
  onPageChange?: any;
};
const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage = 0,
    pageSize,
    className,
  } = props;

  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || [];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = (e: any) => {
    e.preventDefault();
    onPageChange(currentPage + 1);
  };

  const onPrevious = (e: any) => {
    e.preventDefault();
    onPageChange(currentPage - 1);
  };

  const getSelected = (pageNumber: any): string => {
    return pageNumber === currentPage ? 'selected' : '';
  };
  const lastPage = paginationRange[paginationRange.length - 1];
  const disabled = currentPage === 1 ? 'disabled' : '';
  const paginationItemDisabled = currentPage === lastPage ? 'disabled' : '';
  return (
    <ul className={`pagination-container ${className}`}>
      <li
        className={`pagination-item ${disabled} arrow-left`}
        onClick={(e) => onPrevious(e)}
        key="arrow-left"
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={`pagination-item ${getSelected(pageNumber)}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(pageNumber);
            }}
            key={`pagination-item-${pageNumber}`}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${paginationItemDisabled} arrow-right`}
        onClick={(e) => onNext(e)}
        key="arrow-right"
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
