import React from 'react'

const Pagination = ({postsPerPage,location, paginate,currentPage}) => {
    const pageNumbers = []

if(location){
    for (let i = 1; i <= Math.ceil(location.residents.length / postsPerPage ); i++) {
        pageNumbers.push(i)
    }
}

const handleBC = (page) => {
    if(page===currentPage)
    return ({backgroundColor : 'var(--color5)'})
    else return ({backgroundColor : 'var(--color6)'})
}

  return (
    <nav>
        <ul className='pagination'>
        {
           (pageNumbers.length > 1) ? <> {pageNumbers.map( number => (
            <li key={number} className='page__item' style={handleBC(number)}>
                <a onClick={() => paginate(number)} className='page__link' >
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