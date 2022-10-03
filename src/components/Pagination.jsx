import React from 'react'

const Pagination = ({postsPerPage,location, paginate}) => {
    const pageNumbers = []

if(location){
    for (let i = 1; i <= Math.ceil(location.residents.length / postsPerPage ); i++) {
        pageNumbers.push(i)
    }
}

console.log('XX>>>>>>',pageNumbers);

  return (
    <nav>
        <ul className='pagination'>
        {
           (pageNumbers.length > 1) ? <> {pageNumbers.map( number => (
            <li key={number} className='page__item'>
                <a onClick={() => paginate(number)} className='page__link'>
                    {number}
                </a>
            </li>
        ))}</> : <div></div>
        }
        </ul>
    </nav>
  )
}

export default Pagination