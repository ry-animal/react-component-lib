import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import * as Styled from "./index.styled";

/**
 * Pagination component
 *
 * Used to  paginate long lists
 *
 * for full option props
 * https://www.npmjs.com/package/react-paginate
 *
 */

export interface PaginationProps extends ReactPaginateProps {
  /**
   * The total number of pages.
   */
  pageCount: number;
  /**
   * The range of pages displayed.
   * Default to 1.
   */
  pageRangeDisplayed?: number;
  /**
   * The number of pages to display for margins.
   * Default to 2.
   */
  marginPagesDisplayed?: number;
}

export function Pagination({
  pageCount,
  pageRangeDisplayed = 1,
  marginPagesDisplayed = 2,
  ...otherProps
}: PaginationProps) {
  return (
    <Styled.Pagination>
      <ReactPaginate
        pageCount={pageCount}
        previousClassName="arrow"
        previousLabel=""
        nextClassName="arrow arrowNext"
        nextLabel=""
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        {...otherProps}
      />
    </Styled.Pagination>
  );
}

export default Pagination;
