import React from 'react'

const FilterList = ({suggestedList,setSearchInput}) => {

    const handleClick = id => {
        setSearchInput(id)
        console.log(id);
    }
    
  return (
    <ul className='suggested_list'>
        {
            suggestedList?.map(location => 
                (<li onClick={()=>handleClick(location.id)} key={location.id}>
                    <span>{location.id}</span> {location.name}
                </li>))
        }
    </ul>
  )
}

export default FilterList