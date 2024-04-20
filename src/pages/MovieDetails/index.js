import {useState, useEffect} from 'react'
import {TfiControlPlay} from 'react-icons/tfi'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import Popup from 'reactjs-popup'
import Loader from 'react-loader-spinner'

import Header from '../../components/Header'
import VideoPlayer from '../../components/VideoPopup'
import CastSlider from '../../components/CastSlider'
import {
  getFormattedMovieDetails,
  getFormattedCastDetails,
} from '../../utils/utils'
import Footer from '../../components/Footer'

import {
  MovieDetailsPageContainer,
  MovieDetailsContainer,
  MovieDetailResponsiveContainer,
  MovieImageAndDetailContainer,
  BackDropContainer,
  BackDropImg,
  MovieImageContainer,
  MovieImage,
  MovieDetailContainer,
  MovieTitle,
  MovieTagLine,
  MovieGenreList,
  MovieGenre,
  MovieRatingAndVideoContainer,
  MovieVideoBtn,
  MovieVideoCloseBtn,
  MoviePlayIconContainer,
  VideoPopupContainer,
  VideoPlayerContainer,
  MovieOverviewContainer,
  MovieOverviewHeading,
  MovieOverview,
  MovieInfoContainer,
  MovieStatsContainer,
  MovieInfosHeading,
  MovieInfos,
  MovieCastContainer,
  CastContainerHeading,
  MovieDetailsLoaderContainer,
  CastDetailsLoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewContentContainer,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewBtn,
  CastDetailsFailureViewContainer,
  UnavailableVideoContainer,
  UnavailableVideo,
  MovieDetailCircularProgressBarContainer,
} from './styledComponents'
import 'react-circular-progressbar/dist/styles.css'
import 'reactjs-popup/dist/index.css'
import './index.css'

const movieDetailsPageApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const MovieDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  const [movieDetails, setMovieDetails] = useState({
    movieData: [],
    castData: [],
  })
  const [movieDetailsPageApiStatus, setMovieDetailsPageApiStatus] = useState({
    movieDetailsApiStatus: movieDetailsPageApiStatusConstants.initial,
    castDetailsApiStatus: movieDetailsPageApiStatusConstants.initial,
  })
  const {movieData, castData} = movieDetails
  const {
    title,
    tagline,
    posterImg,
    backdropImage,
    genres,
    rating,
    overview,
    status,
    releaseDate,
    runtime,
    movieTrailer,
  } = movieData
  const {cast, director, writers} = castData
  const moviePosterImage =
    posterImg && posterImg.slice(-4) === 'null'
      ? 'https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg'
      : posterImg

  const getMovieDetails = async () => {
    setMovieDetailsPageApiStatus(prevState => ({
      ...prevState,
      movieDetailsApiStatus: movieDetailsPageApiStatusConstants.in_progress,
    }))
    const movieDetailsApiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API}&append_to_response=videos&language=en-US`
    const movieDetailsResponse = await fetch(movieDetailsApiUrl)
    if (movieDetailsResponse.ok) {
      const fetchedMovieDetailsResponse = await movieDetailsResponse.json()
      const formattedMovieDetails = getFormattedMovieDetails(
        fetchedMovieDetailsResponse,
      )
      setMovieDetails(prevState => ({
        ...prevState,
        movieData: formattedMovieDetails,
      }))
      setMovieDetailsPageApiStatus(prevState => ({
        ...prevState,
        movieDetailsApiStatus: movieDetailsPageApiStatusConstants.success,
      }))
    } else {
      setMovieDetailsPageApiStatus(prevState => ({
        ...prevState,
        movieDetailsApiStatus: movieDetailsPageApiStatusConstants.failure,
      }))
    }
  }

  const getCastDetails = async () => {
    setMovieDetailsPageApiStatus(prevState => ({
      ...prevState,
      castDetailsApiStatus: movieDetailsPageApiStatusConstants.in_progress,
    }))
    const castDetailsApiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
    const castDetailsResponse = await fetch(castDetailsApiUrl)
    if (castDetailsResponse.ok) {
      const fetchedCastDetailsResponse = await castDetailsResponse.json()
      const formattedCastDetails = getFormattedCastDetails(
        fetchedCastDetailsResponse,
      )
      setMovieDetails(prevState => ({
        ...prevState,
        castData: formattedCastDetails,
      }))
      setMovieDetailsPageApiStatus(prevState => ({
        ...prevState,
        castDetailsApiStatus: movieDetailsPageApiStatusConstants.success,
      }))
    } else {
      setMovieDetailsPageApiStatus(prevState => ({
        ...prevState,
        castDetailsApiStatus: movieDetailsPageApiStatusConstants.failure,
      }))
    }
  }

  useEffect(() => {
    getMovieDetails()
    getCastDetails()
  }, [])

  const renderMoviePosterContainer = () => (
    <MovieImageContainer>
      <MovieImage src={moviePosterImage} alt={`${title}-movie-poster`} />
    </MovieImageContainer>
  )

  const renderCircularRating = () => {
    const ratingColor = rating < 5 ? 'red' : 'orange'
    return (
      <MovieDetailCircularProgressBarContainer>
        <CircularProgressbar
          value={rating}
          maxValue={10}
          text={rating}
          styles={buildStyles({
            pathColor: rating < 7 ? ratingColor : 'green',
            textColor: '#fff',
            textSize: '36px',
          })}
        />
      </MovieDetailCircularProgressBarContainer>
    )
  }

  const renderVideoPlayer = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <MovieVideoBtn type="button">
            <MoviePlayIconContainer>
              <TfiControlPlay className="play-icon" />
            </MoviePlayIconContainer>
            Watch Trailer
          </MovieVideoBtn>
        }
      >
        {close => (
          <VideoPopupContainer>
            <MovieVideoCloseBtn onClick={() => close()}>
              Close
            </MovieVideoCloseBtn>
            {!movieTrailer ? (
              <UnavailableVideoContainer>
                <UnavailableVideo>Unavailable video</UnavailableVideo>
              </UnavailableVideoContainer>
            ) : (
              <VideoPlayerContainer>
                <VideoPlayer videoId={movieTrailer.key} />
              </VideoPlayerContainer>
            )}
          </VideoPopupContainer>
        )}
      </Popup>
    </div>
  )

  const renderMovieDetailsContainer = () => (
    <MovieDetailContainer>
      {title && (
        <MovieTitle>{`${title} (${releaseDate.slice(-4)})`}</MovieTitle>
      )}

      <MovieTagLine>{tagline}</MovieTagLine>

      <MovieGenreList>
        {genres &&
          genres.map(eachItem => (
            <MovieGenre key={eachItem.id}>{eachItem.name}</MovieGenre>
          ))}
      </MovieGenreList>

      <MovieRatingAndVideoContainer>
        {renderCircularRating()}
        {renderVideoPlayer()}
      </MovieRatingAndVideoContainer>

      <MovieOverviewContainer>
        <MovieOverviewHeading>Overview</MovieOverviewHeading>
        <MovieOverview>{overview}</MovieOverview>
      </MovieOverviewContainer>

      <MovieInfoContainer>
        <MovieStatsContainer>
          <MovieInfosHeading>Status: </MovieInfosHeading>
          <MovieInfos>{status}</MovieInfos>
        </MovieStatsContainer>

        <MovieStatsContainer>
          <MovieInfosHeading>Release Date: </MovieInfosHeading>
          <MovieInfos>{releaseDate}</MovieInfos>
        </MovieStatsContainer>

        <MovieStatsContainer>
          <MovieInfosHeading>Runtime: </MovieInfosHeading>
          <MovieInfos>{runtime}</MovieInfos>
        </MovieStatsContainer>
      </MovieInfoContainer>

      {director && (
        <MovieInfoContainer>
          <MovieInfosHeading className="text bold">
            Director:{' '}
          </MovieInfosHeading>
          <MovieInfos>
            {director?.map((d, i) => (
              <span key={d.id}>
                {d.name}
                {director.length - 1 !== i && ', '}
              </span>
            ))}
          </MovieInfos>
        </MovieInfoContainer>
      )}

      {writers && (
        <MovieInfoContainer>
          <MovieInfosHeading className="text bold">Writer: </MovieInfosHeading>
          <MovieInfos>
            {writers?.map((d, i) => (
              <span key={d.id}>
                {d.name}
                {writers.length - 1 !== i && ', '}
              </span>
            ))}
          </MovieInfos>
        </MovieInfoContainer>
      )}
    </MovieDetailContainer>
  )

  const renderMovieCastList = () => <CastSlider castDetails={cast} />

  const renderMoviePosterAndDetails = () => (
    <MovieImageAndDetailContainer>
      <BackDropContainer>
        <BackDropImg
          src={backdropImage}
          alt={`${title}-movie-backdrop-image`}
          className="back-drop-img"
        />
      </BackDropContainer>
      {renderMoviePosterContainer()}
      {renderMovieDetailsContainer()}
    </MovieImageAndDetailContainer>
  )

  const renderMovieDetailsLoader = () => (
    <MovieDetailsLoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </MovieDetailsLoaderContainer>
  )

  const renderCastDetailsLoader = () => (
    <CastDetailsLoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </CastDetailsLoaderContainer>
  )

  const onMovieRetry = () => {
    getMovieDetails()
  }

  const onCastRetry = () => {
    getCastDetails()
  }

  const renderMovieDetailsFailureView = () => (
    <FailureViewContainer>
      <FailureViewContentContainer>
        <FailureViewImage
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="cake-list-failure-img"
        />
        <FailureViewHeading>Oops Something Went Wrong</FailureViewHeading>
        <FailureViewDescription>
          We are having some trouble processing your request. Please try again.
        </FailureViewDescription>
        <FailureViewBtn type="button" onClick={onMovieRetry}>
          Retry
        </FailureViewBtn>
      </FailureViewContentContainer>
    </FailureViewContainer>
  )

  const renderCastDetailsFailureView = () => (
    <CastDetailsFailureViewContainer>
      <FailureViewContentContainer>
        <FailureViewHeading>Oops Something Went Wrong</FailureViewHeading>
        <FailureViewDescription>
          We are having some trouble processing your request. Please try again.
        </FailureViewDescription>
        <FailureViewBtn type="button" onClick={onCastRetry}>
          Retry
        </FailureViewBtn>
      </FailureViewContentContainer>
    </CastDetailsFailureViewContainer>
  )

  const renderMovieDetailsView = () => {
    const {movieDetailsApiStatus} = movieDetailsPageApiStatus
    switch (movieDetailsApiStatus) {
      case movieDetailsPageApiStatusConstants.in_progress:
        return renderMovieDetailsLoader()
      case movieDetailsPageApiStatusConstants.success:
        return renderMoviePosterAndDetails()
      case movieDetailsPageApiStatusConstants.failure:
        return renderMovieDetailsFailureView()
      default:
        return null
    }
  }

  const renderCastDetailsView = () => {
    const {castDetailsApiStatus} = movieDetailsPageApiStatus
    switch (castDetailsApiStatus) {
      case movieDetailsPageApiStatusConstants.in_progress:
        return renderCastDetailsLoader()
      case movieDetailsPageApiStatusConstants.success:
        return renderMovieCastList()
      case movieDetailsPageApiStatusConstants.failure:
        return renderCastDetailsFailureView()
      default:
        return null
    }
  }

  return (
    <MovieDetailsPageContainer>
      <Header />
      <MovieDetailsContainer>
        <MovieDetailResponsiveContainer>
          {renderMovieDetailsView()}
          <MovieCastContainer>
            <CastContainerHeading>Cast</CastContainerHeading>
            {renderCastDetailsView()}
          </MovieCastContainer>
        </MovieDetailResponsiveContainer>
      </MovieDetailsContainer>
      <Footer />
    </MovieDetailsPageContainer>
  )
}

export default MovieDetails
