import {styled} from 'styled-components'

export const TopRatedPageContainer = styled.div`
  background-color: #00010e;
  min-height: 100vh;
`
export const TopRatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
`
export const TopRatedMovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 82%;
  }
`
export const TopRatedMovieList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const TopRatedHeading = styled.p`
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
