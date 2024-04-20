import {useState, useEffect} from 'react'

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import LoaderComponent from '../../components/Loader'
import FailureView from '../../components/FailureView'
import Pagination from '../../components/pagination'
import {getFormattedMovieListData} from '../../utils/utils'
import Footer from '../../components/Footer'

import {
  TopRatedPageContainer,
  TopRatedContainer,
  TopRatedMovieListContainer,
  TopRatedHeading,
  TopRatedMovieList,
} from './styledComponents'

const topRatedApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const TopRated = () => {
  const [topRatedMovieData, setTopRatedMovieData] = useState([])
  const [topRatedApiStatus, setTopRatedApiStatus] = useState(
    topRatedApiStatusConstants.initial,
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(12)
  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
  const currentMovies = topRatedMovieData.slice(
    indexOfFirstMovie,
    indexOfLastMovie,
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const handleNextPage = () => setCurrentPage(prevPage => prevPage + 1)
  const handlePrevPage = () => setCurrentPage(prevPage => prevPage - 1)

  const getTopRatedMovieData = async () => {
    setTopRatedApiStatus(topRatedApiStatusConstants.in_progress)
    const topRatedMovieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`
    const topRatedMovieResponse = await fetch(topRatedMovieUrl)
    if (topRatedMovieResponse.ok) {
      const topRatedMovieResponseData = await topRatedMovieResponse.json()
      const formattedTopRatedMovieData = topRatedMovieResponseData.results.map(
        data => getFormattedMovieListData(data),
      )
      setTopRatedMovieData(formattedTopRatedMovieData)
      setTopRatedApiStatus(topRatedApiStatusConstants.success)
    } else {
      setTopRatedApiStatus(topRatedApiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getTopRatedMovieData()
  }, [])

  const onRetry = () => {
    getTopRatedMovieData()
  }

  const renderTopRatedMovies = () => (
    <TopRatedContainer>
      <TopRatedMovieListContainer>
        <TopRatedHeading>Top Rated</TopRatedHeading>
        <TopRatedMovieList>
          {currentMovies.map(eachData => (
            <MovieList key={eachData.id} popularMovieDetails={eachData} />
          ))}
        </TopRatedMovieList>
      </TopRatedMovieListContainer>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={moviesPerPage}
        totalItems={topRatedMovieData.length}
        paginate={paginate}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </TopRatedContainer>
  )

  const renderTopRatedMoviesView = () => {
    switch (topRatedApiStatus) {
      case topRatedApiStatusConstants.in_progress:
        return <LoaderComponent />
      case topRatedApiStatusConstants.success:
        return renderTopRatedMovies()
      case topRatedApiStatusConstants.failure:
        return <FailureView onClickRetry={onRetry} />
      default:
        return null
    }
  }

  return (
    <TopRatedPageContainer>
      <Header />
      {renderTopRatedMoviesView()}
      <Footer />
    </TopRatedPageContainer>
  )
}

export default TopRated
