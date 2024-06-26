import {useState, useEffect, useContext} from 'react'

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import SearchContext from '../../context/SearchContext'
import LoaderComponent from '../../components/Loader'
import FailureView from '../../components/FailureView'
import {getFormattedMovieListData} from '../../utils/utils'
import Footer from '../../components/Footer'

import {
  SearchResultPageContainer,
  SearchResultContainer,
  SearchResultListContainer,
  SearchResultHeading,
  SearchResultList,
  NoSearchResultContainer,
  NoSearchResultDescription,
} from './styledComponents'

const searchResultApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}
const Search = () => {
  const {searchValue} = useContext(SearchContext)
  const [searchResultData, setSearchResult] = useState([])
  const [searchResultApiStatus, setSearchResultApiStatus] = useState(
    searchResultApiStatusConstants.initial,
  )

  const getSearchResultData = async () => {
    setSearchResultApiStatus(searchResultApiStatusConstants.in_progress)
    const searchApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=${searchValue}&page=1`
    const searchApiResponse = await fetch(searchApiUrl)
    if (searchApiResponse.ok) {
      const searchApiResponseData = await searchApiResponse.json()
      const formattedSearchApiResponseData = searchApiResponseData.results.map(
        data => getFormattedMovieListData(data),
      )
      setSearchResult(formattedSearchApiResponseData)
      setSearchResultApiStatus(searchResultApiStatusConstants.success)
    } else {
      setSearchResultApiStatus(searchResultApiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getSearchResultData()
  }, [searchValue])

  const onRetry = () => {
    getSearchResultData()
  }

  const renderSearchResultContainer = () => {
    if (searchResultData.length > 0) {
      return (
        <SearchResultContainer>
          <SearchResultListContainer>
            <SearchResultHeading>{`Search results of '${searchValue}'`}</SearchResultHeading>
            <SearchResultList>
              {searchResultData.map(eachData => (
                <MovieList key={eachData.id} popularMovieDetails={eachData} />
              ))}
            </SearchResultList>
          </SearchResultListContainer>
        </SearchResultContainer>
      )
    }
    return (
      <NoSearchResultContainer>
        <NoSearchResultDescription>
          {searchValue.length > 0
            ? `We didn't find any matches for "${searchValue}". Try using another key word.`
            : 'Please enter something to Search'}
        </NoSearchResultDescription>
      </NoSearchResultContainer>
    )
  }

  const renderSearchResultView = () => {
    switch (searchResultApiStatus) {
      case searchResultApiStatusConstants.in_progress:
        return <LoaderComponent />
      case searchResultApiStatusConstants.success:
        return renderSearchResultContainer()
      case searchResultApiStatusConstants.failure:
        return <FailureView onClickRetry={onRetry} />
      default:
        return null
    }
  }

  return (
    <SearchResultPageContainer>
      <Header />
      {renderSearchResultView()}
      <Footer />
    </SearchResultPageContainer>
  )
}

export default Search
