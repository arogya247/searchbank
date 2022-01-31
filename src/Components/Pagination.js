import React from 'react';

export const Pagination = ({totalPosts, postsPerPage, paginate}) => {

  const pageNumbers = []

  for(let i=1; i<=Math.ceil(totalPosts / postsPerPage);i++){
      pageNumbers.push(i)
  }
    
  return (<nav>
      <ul className='pagination d-flex flex-wrap p-4'>
        {pageNumbers.map(num => (
            <li key={num} className='page-item'>
                <a onClick={() => paginate(num)} className='m-1 bg-light shadow border border-dark border-3 rounded text-black page-link'>
                    {num}
                </a>
            </li>
        ))}
      </ul>
  </nav>);
};

