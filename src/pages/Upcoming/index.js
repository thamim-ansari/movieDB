import {useState, useEffect} from 'react'

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import LoaderComponent from '../../components/Loader'
import FailureView from '../../components/FailureView'
import {getFormattedMovieListData} from '../../utils/utils'
import Pagination from '../../components/pagination'
import Footer from '../../components/Footer'

import {
  UpcomingMoviesPageContainer,
  UpcomingMoviesContainer,
  UpcomingMoviesListContainer,
  UpcomingMoviesHeading,
  UpcomingMoviesList,
} from './styledComponents'

const upcomingMoviesApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const Upcoming = () => {
  const [upcomingMoviesData, setUpcomingMoviesData] = useState([])
  const [upcomingMoviesApiStatus, setUpcomingMoviesApiStatus] = useState(
    upcomingMoviesApiStatusConstants.initial,
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(12)
  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
  const currentMovies = upcomingMoviesData.slice(
    indexOfFirstMovie,
    indexOfLastMovie,
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const handleNextPage = () => setCurrentPage(prevPage => prevPage + 1)
  const handlePrevPage = () => setCurrentPage(prevPage => prevPage - 1)

  const getUpcomingMovieData = async () => {
    setUpcomingMoviesApiStatus(upcomingMoviesApiStatusConstants.in_progress)
    const upcomingMoviesApiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`
    const upcomingMoviesApiResponse = await fetch(upcomingMoviesApiUrl)
    if (upcomingMoviesApiResponse.ok) {
      const upcomingMoviesApiResponseData = await upcomingMoviesApiResponse.json()
      const formattedUpcomingMoviesData = upcomingMoviesApiResponseData.results.map(
        data => getFormattedMovieListData(data),
      )
      setUpcomingMoviesData(formattedUpcomingMoviesData)
      setUpcomingMoviesApiStatus(upcomingMoviesApiStatusConstants.success)
    } else {
      setUpcomingMoviesApiStatus(upcomingMoviesApiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getUpcomingMovieData()
  }, [])

  const onRetry = () => {
    getUpcomingMovieData()
  }

  const renderUpcomingMoviesContainer = () => (
    <UpcomingMoviesContainer>
      <UpcomingMoviesListContainer>
        <UpcomingMoviesHeading>Upcoming</UpcomingMoviesHeading>
        <UpcomingMoviesList>
          {currentMovies.map(eachData => (
            <MovieList key={eachData.id} popularMovieDetails={eachData} />
          ))}
        </UpcomingMoviesList>
      </UpcomingMoviesListContainer>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={moviesPerPage}
        totalItems={upcomingMoviesData.length}
        paginate={paginate}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </UpcomingMoviesContainer>
  )

  const renderUpcomingMoviesView = () => {
    switch (upcomingMoviesApiStatus) {
      case upcomingMoviesApiStatusConstants.in_progress:
        return <LoaderComponent />
      case upcomingMoviesApiStatusConstants.success:
        return renderUpcomingMoviesContainer()
      case upcomingMoviesApiStatusConstants.failure:
        return <FailureView onClickRetry={onRetry} />
      default:
        return null
    }
  }

  return (
    <UpcomingMoviesPageContainer>
      <Header />
      {renderUpcomingMoviesView()}
      <Footer />
    </UpcomingMoviesPageContainer>
  )
}
export default Upcoming
