import {styled} from 'styled-components'

export const SearchResultPageContainer = styled.div`
  background-color: #00010e;
  min-height: 100vh;
`
export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
`
export const SearchResultListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 82%;
  }
`
export const SearchResultList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const SearchResultHeading = styled.p`
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
export const NoSearchResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const NoSearchResultDescription = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
