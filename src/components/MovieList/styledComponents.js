import {styled} from 'styled-components'

export const MovieItems = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0px 8px 20px;
  width: 45%;
  @media screen and (min-width: 768px) {
    width: 22%;
  }
  @media screen and (min-width: 1024px) {
    width: 15%;
  }
`
export const MovieImageAndRatingContainer = styled.div`
  position: relative;
  margin-bottom: 25px;
  flex-grow: 1;
`
export const MoviePosterImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
  z-index: 1;
`
export const MovieTitle = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
  line-height: 24px;
`
export const MovieReleaseDate = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 14px;
  opacity: 0.5;
  margin-bottom: 10px;
`
export const ViewDetailsBtn = styled.button`
  color: #fff;
  background-color: #03ac13;
  font-size: 14px;
  padding: 10px 0px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #03ac13;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: transparent;
  }
`
