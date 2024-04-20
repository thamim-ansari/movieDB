import Loader from 'react-loader-spinner'
import {styled} from 'styled-components'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoaderComponent = () => (
  <LoaderContainer>
    <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </LoaderContainer>
)

export default LoaderComponent
