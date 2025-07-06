export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <ul className="cs_pagination_box">
      <li>
        <button
          className="cs_pagination_arrow cs_center"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={`/images/icons/left_arrow_blue.svg`} alt="Prev" />
        </button>
      </li>

      {pages.map((page) => (
        <li key={page}>
          <button
            className={`cs_pagination_item cs_center ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}

      {endPage < totalPages && (
        <>
          <li>
            <span className="cs_pagination_item cs_center">...</span>
          </li>
          <li>
            <button
              className="cs_pagination_item cs_center"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </li>
        </>
      )}

      <li>
        <button
          className="cs_pagination_arrow cs_center"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={`/images/icons/right_arrow_blue.svg`} alt="Next" />
        </button>
      </li>
    </ul>
  );
}
