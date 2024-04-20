import {styled} from 'styled-components'

export const CastCardContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 0px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CastCardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0px 20px;
`

export const CastImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px 20px;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 175px;
    height: 175px;
  }
`

export const CastImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CastName = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const CastCharacterName = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 20px;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const CastDetailsUnavailable = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 20px;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`
