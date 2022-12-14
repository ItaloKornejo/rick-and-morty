import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import ErrorScreen from './components/ErrorScreen'
import Loader from './components/Loader'
import Pagination from './components/Pagination'

function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)
  const [loader, setLoader] = useState(true)
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(12)


  useEffect(() => {
    let idRandom = getRandomNumber()
    if (searchInput) { idRandom = searchInput }
    const URL = `https://rickandmortyapi.com/api/location/${idRandom}`
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)

      })
      .catch(err => setHasError(true))
  }, [searchInput])

  useEffect(() => {
    if (location) {
      setTimeout(() => {
        setLoader(false)
      }, 1000);
    }
  }, [location])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }

  const handleChange = event => {
    if (event.target.value === "") {
      setSuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
      axios.get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }

  const indexOfLastLocation = currentPage * postsPerPage
  const indexOfFirstLocation = indexOfLastLocation - postsPerPage
  const currentLocationPage = location?.residents.slice(indexOfFirstLocation,indexOfLastLocation)

  const paginate = (pageNumber) => setCurrentPage (pageNumber)
  
  return (
    <div className="App">
      {
        loader ? <Loader /> : <div>
          <header>
        <form onSubmit={handleSubmit} className='search-location'>
          <input id='idLocation' type="text" onChange={handleChange} placeholder='Select id location' />
          <button className='btn-search'><i className='bx bx-search' ></i></button>
          <FilterList
            suggestedList={suggestedList}
            setSearchInput={setSearchInput}
          />
        </form>
      </header>
      {
        hasError ? <ErrorScreen /> :
          <div>
            <LocationInfo location={location} />
            <div className='container'>
              <div className='container-card'>
                {
                 currentLocationPage?.map(url => (<CardResident key={url} url={url} />))
                }
              </div>
            </div>
            <Pagination postsPerPage={postsPerPage} location={location} paginate={paginate} currentPage={currentPage}/>
          </div>
      }
        </div>
      }
    </div>
  )
}

export default App
