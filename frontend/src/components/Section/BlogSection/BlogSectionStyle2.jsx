"use client";

import React, { useState, useEffect } from "react";
import Pagination from "../../Pagination";
import Post from "../../Post";
import Spacing from "../../Spacing";

export default function BlogSectionStyle2({ data, view = "grid" }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ data가 바뀌면 페이지를 1로 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHospitals = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container">
      <div
        className={`row ${view === "grid" ? "cs_row_gap_50" : "cs_row_gap_30"}`}
      >
        {currentHospitals?.map((item, index) => (
          <div
            key={index}
            className={view === "grid" ? "col-xl-4 col-md-6" : "col-12"}
          >
            <Post {...item} view={view} />
          </div>
        ))}
      </div>

      <Spacing md="110" lg="70" />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}
