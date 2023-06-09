import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import classes from "./Pagination.module.css";

function Pagination({ totalPages, currentPage }) {
  const router = useRouter();
  return (
    <div className={classes.pagination}>
      <p className={classes.pagination_heading}>
        page {router.query.page || 1} out of {totalPages}
      </p>
      <div className={classes.paginateLinks_container}>
        {currentPage > 1 && (
          <Link
            href={`/blog/?page=${currentPage - 1}`}
            className={classes.paginateLinks}
          >
            Prev
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/blog/?page=${currentPage + 1}`}
            className={classes.paginateLinks}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

export default Pagination;
