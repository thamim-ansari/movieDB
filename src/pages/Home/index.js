import {useState, useEffect} from 'react'

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import HomeSlider from '../../components/HomeSlider'
import LoaderComponent from '../../components/Loader'
import FailureView from '../../components/FailureView'
import {getFormattedMovieListData} from '../../utils/utils'
import Pagination from '../../components/pagination'
import Footer from '../../components/Footer'

import {
  HomeContainer,
  HomeMainContainer,
  PopularMovieList,
  PopularMovieListContainer,
  SliderContainer,
  GreetingContainer,
  GreetingHeading,
  Greeting,
  PopularPicks,
} from './styledComponents'

const homeApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const Home = () => {
  const [popularMovieData, setPopularMovie] = useState([])
  const [homeApiStatus, setHomeApiStatus] = useState(
    homeApiStatusConstants.initial,
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(12)
  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
  const currentMovies = popularMovieData.slice(
    indexOfFirstMovie,
    indexOfLastMovie,
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const handleNextPage = () => setCurrentPage(prevPage => prevPage + 1)
  const handlePrevPage = () => setCurrentPage(prevPage => prevPage - 1)

  const getPopularMovieData = async () => {
    setHomeApiStatus(homeApiStatusConstants.in_progress)
    const popularMovieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`
    const popularMovieResponse = await fetch(popularMovieUrl)
    if (popularMovieResponse.ok) {
      const popularMovieResponseData = await popularMovieResponse.json()

      const formattedPopularMovieData = popularMovieResponseData.results.map(
        data => getFormattedMovieListData(data),
      )
      setPopularMovie(formattedPopularMovieData)
      setHomeApiStatus(homeApiStatusConstants.success)
    } else {
      setHomeApiStatus(homeApiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getPopularMovieData()
  }, [])

  const onRetry = () => {
    getPopularMovieData()
  }

  const getRandomMovies = () => {
    const shuffledMovies = popularMovieData.sort(() => Math.random() - 0.5)
    const randomMovies = shuffledMovies.slice(0, 3)
    const randomMovieDetails = randomMovies.map(movie => ({
      id: movie.id,
      backdropImage: movie.backdropImage,
    }))
    return randomMovieDetails
  }

  const randomThreeMovies = getRandomMovies()

  const renderCarouselContainer = () => (
    <SliderContainer>
      <HomeSlider images={randomThreeMovies} />
      <GreetingContainer>
        <GreetingHeading>Welcome</GreetingHeading>
        <Greeting>
          Millions of movies, TV shows and people to discover. Explore now.
        </Greeting>
      </GreetingContainer>
    </SliderContainer>
  )

  const renderPopularMovieListContainer = () => (
    <PopularMovieListContainer>
      <PopularPicks>Popular Picks for you</PopularPicks>
      <PopularMovieList>
        {currentMovies.map(eachData => (
          <MovieList key={eachData.id} popularMovieDetails={eachData} />
        ))}
      </PopularMovieList>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={moviesPerPage}
        totalItems={popularMovieData.length}
        paginate={paginate}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </PopularMovieListContainer>
  )

  const renderMainContainer = () => (
    <HomeMainContainer>
      {renderCarouselContainer()}
      {renderPopularMovieListContainer()}
    </HomeMainContainer>
  )

  const popularMoviePageView = () => {
    switch (homeApiStatus) {
      case homeApiStatusConstants.in_progress:
        return <LoaderComponent />
      case homeApiStatusConstants.success:
        return renderMainContainer()
      case homeApiStatusConstants.failure:
        return <FailureView onClickRetry={onRetry} />
      default:
        return null
    }
  }

  return (
    <HomeContainer>
      <Header />
      {popularMoviePageView()}
      <Footer />
    </HomeContainer>
  )
}

export default Home
