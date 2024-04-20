import {styled} from 'styled-components'

export const UpcomingMoviesPageContainer = styled.div`
  background-color: #00010e;
  min-height: 100vh;
`
export const UpcomingMoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
`
export const UpcomingMoviesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 82%;
  }
`
export const UpcomingMoviesList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const UpcomingMoviesHeading = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 20px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
