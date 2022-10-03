import React from 'react'

const LocationInfo = ({ location }) => {
  return (
      <div className='container-location'> 
        <div className='location'>
          <h1>{location?.name}</h1>
          <div className='location-info'>
          <p><span>Dimension: </span>{location?.dimension}</p>
          <p><span>Type: </span>{location?.type}</p>
          <p><span>Population: </span>{location?.residents.length}</p>
        </div>
        </div>
        
      </div>
  )
}

export default LocationInfo