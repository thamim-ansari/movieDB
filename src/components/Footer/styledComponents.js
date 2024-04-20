import {styled} from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #000000;
  padding: 50px 0;
  color: white;
  position: relative;
  margin-top: 50px;
`
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`
export const FooterListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`
export const FooterListItems = styled.li`
  transition: all ease 0.3s;
  cursor: pointer;
  font-size: 12px;
  margin: 0 8px;
  &:hover {
    color: #da2f68;
  }
  @media screen and (min-width: 768px) {
    margin: 0px 30px;
    font-size: 16px;
  }
`
export const FooterDescription = styled.p`
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`
export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SocialIconContainer = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #04152d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 0 0 0.625em #da2f68;
    color: #da2f68;
  }
`
