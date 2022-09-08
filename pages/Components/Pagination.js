import React, { useState } from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const [pageToggle, setPageToggle] = useState();



  return (
    <nav className="flex justify-center text-center mt-16">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className="page"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
