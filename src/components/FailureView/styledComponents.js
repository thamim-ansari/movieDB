import {styled} from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
export const FailureViewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  color: #fff;
  font-family: 'Roboto';
  text-align: center;
`
export const FailureViewImage = styled.img`
  width: 90%;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    width: 500px;
    max-width: 550px;
  }
`
export const FailureViewHeading = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`
export const FailureViewDescription = styled.p`
  opacity: 0.5;
  font-size: 16px;
  margin-bottom: 25px;
`
export const FailureViewBtn = styled.button`
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
