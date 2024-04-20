import {Link} from 'react-router-dom'
import {
  MovieItems,
  MoviePosterImage,
  MovieImageAndRatingContainer,
  MovieTitle,
  MovieReleaseDate,
  ViewDetailsBtn,
} from './styledComponents'

import CircleRating from '../CircleRating'

const MovieList = props => {
  const {popularMovieDetails} = props
  const {id, posterImage, title, rating, releaseDate} = popularMovieDetails
  const maskedTitle = title.length > 15 ? `${title.slice(0, 15)} -...` : title
  const posterImg =
    posterImage.slice(-4) === 'null'
      ? 'https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg'
      : posterImage
  return (
    <MovieItems>
      <MovieImageAndRatingContainer>
        <MoviePosterImage src={posterImg} alt={`${title}-movie-poster`} />
        <CircleRating rating={rating} />
      </MovieImageAndRatingContainer>
      <MovieTitle>{maskedTitle}</MovieTitle>
      <MovieReleaseDate>{releaseDate}</MovieReleaseDate>
      <Link to={`/movie-details/${id}`}>
        <ViewDetailsBtn type="button">View Details</ViewDetailsBtn>
      </Link>
    </MovieItems>
  )
}

export default MovieList
