import React from 'react';
import './Pagination.css';

type Props = {
  postPerPage: number
  totalPosts: number
  paginate: (params: number) => void
}

const Pagination = ({ postPerPage, totalPosts, paginate }: Props): JSX.Element => {

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    console.log(i)
    pageNumber.push(i)
  }

  return (
    <ul className='paginationContainer'>
      {pageNumber.map(number => (
        <li key={number}>
          <a className='pagination' onClick={() => paginate(number)} href='#'>{number}</a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination