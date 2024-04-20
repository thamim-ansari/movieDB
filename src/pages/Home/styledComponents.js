import {styled} from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #00010e;
  min-height: 100vh;
`
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GreetingContainer = styled.div`
  width: 90%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: 'Roboto';
  z-index: 1;
`
export const GreetingHeading = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 90px;
  }
`
export const Greeting = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const PopularMovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 82%;
  }
`
export const PopularMovieList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`
export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`

export const PopularPicks = styled.p`
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
