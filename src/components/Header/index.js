import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'

import {RxVideo, RxHamburgerMenu} from 'react-icons/rx'
import {FaSearch} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import SearchContext from '../../context/SearchContext'
import {
  HeaderContainer,
  HeaderResponsiveContainer,
  AppLogoContainer,
  AppIconBgContainer,
  AppName,
  HeaderContentContainer,
  HeaderNavList,
  HeaderNavItems,
  MobileNavButton,
  MobileNavListContainer,
  MobileNavList,
  MobileNavItems,
  SearchBarContainer,
  SearchBarResponsiveContainer,
  SearchIconBtn,
  SearchBar,
  SearchBtn,
} from './styledComponents'
import './index.css'

const Header = props => {
  const [navItemState, setNavItemStatus] = useState({
    isMenuOpen: false,
    isSearchBarOpen: false,
    isFixed: false,
  })
  const [searchInput, setSearchInput] = useState('')
  const {setSearchContextInput} = useContext(SearchContext)
  const {isFixed, isMenuOpen, isSearchBarOpen} = navItemState

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100
      if (window.scrollY > threshold) {
        setNavItemStatus(prevState => ({
          ...prevState,
          isFixed: true,
        }))
      } else {
        setNavItemStatus(prevState => ({
          ...prevState,
          isFixed: false,
        }))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuIconClass = navItemState.isMenuOpen ? (
    <MdClose color="#ffffff" size={20} />
  ) : (
    <RxHamburgerMenu color="#ffffff" size={20} />
  )

  const onClickMenu = () =>
    setNavItemStatus(prevState => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }))
  const onClickSearch = () =>
    setNavItemStatus(prevState => ({
      ...prevState,
      isSearchBarOpen: !prevState.isSearchBarOpen,
    }))

  const onClickSearchBtn = () => {
    setSearchContextInput(searchInput)
  }
  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
    if (event.key === 'Enter' && searchInput.length > 0) {
      const {history} = props
      onClickSearchBtn()
      history.push('/search-result')
    }
  }
  return (
    <>
      <HeaderContainer>
        <HeaderResponsiveContainer>
          <Link to="/" className="link-style">
            <AppLogoContainer>
              <AppIconBgContainer>
                <RxVideo color="#ffffff" size={20} />
              </AppIconBgContainer>
              <AppName>movieDB</AppName>
            </AppLogoContainer>
          </Link>
          <HeaderContentContainer>
            <HeaderNavList>
              <Link to="/" className="link-style">
                <HeaderNavItems>Popular</HeaderNavItems>
              </Link>
              <Link to="/top-rated" className="link-style">
                <HeaderNavItems>Top Rated</HeaderNavItems>
              </Link>
              <Link to="/upcoming" className="link-style">
                <HeaderNavItems>Upcoming</HeaderNavItems>
              </Link>
            </HeaderNavList>
            <SearchIconBtn onClick={onClickSearch}>
              <FaSearch className="nav-search-icon" />
            </SearchIconBtn>
            <MobileNavButton type="button" onClick={onClickMenu}>
              {menuIconClass}
            </MobileNavButton>
          </HeaderContentContainer>
        </HeaderResponsiveContainer>
      </HeaderContainer>
      <MobileNavListContainer isMenuOpen={isMenuOpen}>
        <MobileNavList>
          <Link to="/" className="link-style">
            <MobileNavItems>Popular</MobileNavItems>
          </Link>
          <Link to="/top-rated" className="link-style">
            <MobileNavItems>Top Rated</MobileNavItems>
          </Link>
          <Link to="/upcoming" className="link-style">
            <MobileNavItems>Upcoming</MobileNavItems>
          </Link>
        </MobileNavList>
      </MobileNavListContainer>
      <SearchBarContainer isSearchBarOpen={isSearchBarOpen} isFixed={isFixed}>
        <SearchBarResponsiveContainer>
          <SearchBar
            type="search"
            placeholder="Search"
            onChange={onChangeSearchInput}
          />
          <Link to="/search-result" className="link-style">
            <SearchBtn
              onClick={onClickSearchBtn}
              disabled={!searchInput.length > 0}
            >
              Search
            </SearchBtn>
          </Link>
        </SearchBarResponsiveContainer>
      </SearchBarContainer>
    </>
  )
}

export default Header
