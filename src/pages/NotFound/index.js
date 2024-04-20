import {Link} from 'react-router-dom'
import {
  NotFoundPageContainer,
  NotFoundImage,
  NotFoundBtn,
} from './styledComponents'

const NotFound = () => (
  <NotFoundPageContainer>
    <NotFoundImage src="https://img.freepik.com/free-vector/404-error-web-template-flat-style_23-2147756791.jpg?t=st=1713531187~exp=1713534787~hmac=806d204995f55ce4d12cd9d4c800adec6119e107e3a3b69e340aefcf91e37023&w=740" />
    <Link to="/">
      <NotFoundBtn type="button">Back to Home</NotFoundBtn>
    </Link>
  </NotFoundPageContainer>
)

export default NotFound
