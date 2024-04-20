import {styled} from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3.5px);
  padding: 8px 0px;
  width: 100%;
  position: absolute;
  z-index: 2;
`
export const HeaderResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AppLogoContainer = styled.div`
  display: flex;
  align-items: center;
`
export const AppIconBgContainer = styled.div`
  background-image: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  padding: 5px 5px 1px 5px;
  border-radius: 50%;
`
export const AppName = styled.div`
  background: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`
export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderNavList = styled.ul`
  display: flex;
  padding: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeaderNavItems = styled.li`
  display: flex;
  font-family: 'Roboto';
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin: 0px 15px;
  &:hover {
    color: #da2f68;
  }
`
export const MobileNavButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileNavListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  display: ${props => (props.isMenuOpen ? 'block' : 'none')};
`
export const MobileNavList = styled.ul`
  background-image: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  background-color: red;
  margin-top: 12%;
  width: 100vw;
  padding: 15px;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileNavItems = styled.li`
  list-style: none;
  font-family: 'Roboto';
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  &:hover {
    color: #da2f68;
  }
`
export const SearchBarContainer = styled.div`
  position: ${props => (props.isFixed ? 'fixed' : 'absolute')};
  top: ${props => {
    if (props.isFixed && props.isSearchBarOpen) {
      return '0'
    }
    if (props.isSearchBarOpen) {
      return '60px'
    }
    return '-60px'
  }};
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 999;
  transition: top 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    top: ${props => {
      if (props.isFixed && props.isSearchBarOpen) {
        return '0'
      }
      if (props.isSearchBarOpen) {
        return '45px'
      }
      return '-60px'
    }};
  }
`
export const SearchBarResponsiveContainer = styled.form`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`
export const SearchBar = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  width: 60%;
  @media screen and (max-width: 768px) {
    flex-grow: 1;
    padding-left: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const SearchIconBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-right: 15px;
  }
  &:hover {
    color: #da2f68;
  }
`
export const SearchBtn = styled.button`
  color: #fff;
  font-family:'Roboto'
  font-size:14px;
  background-image: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 24px;
   @media screen and (min-width: 768px) {
    font-size:18px;
   }
`
