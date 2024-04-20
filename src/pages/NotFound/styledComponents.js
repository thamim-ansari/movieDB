import {styled} from 'styled-components'

export const NotFoundPageContainer = styled.div`
  background-color: #00010e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  width: 90%;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    width: 500px;
    max-width: 550px;
  }
`
export const NotFoundBtn = styled.button`
  color: #fff;
  font-size: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  border-radius: 16px;
  padding: 10px 24px;
  background-image: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  border: none;
  outline: none;
  cursor: pointer;
`
