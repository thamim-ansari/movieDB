import {styled} from 'styled-components'

export const PaginationContainer = styled.nav`
  margin-top: 25px;
`
export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
`
export const PaginationListItem = styled.li`
  list-style-type: none;
  margin: 0px 5px;
`
export const PaginationNextAndPrevBtn = styled.button`
  color: ${props => (props.isButtonActive ? '#03ac13' : '#fff')};
  background-color: ${props =>
    props.isButtonActive ? 'transparent' : '#03ac13'};
  font-family: 'Roboto';
  padding: 8px 12px;
  border-radius: 3px;
  border: ${props => (props.isButtonActive ? '1px solid #03ac13' : 'none')};
  outline: none;
  cursor: pointer;
  ${props => props.isLastPage && 'background-color: transparent;'}
  ${props => props.isLastPage && 'color: #03ac13;'}
  ${props => props.isLastPage && 'border: 1px solid #03ac13;'}
`
export const PaginationPageNumberBtn = styled.button`
  color: ${props => (props.activePageNumber ? '#fff' : '#03ac13')};
  font-family: 'Roboto';
  background-color: ${props =>
    props.activePageNumber ? '#03ac13' : 'transparent'};
  border: ${props => (props.activePageNumber ? 'none' : '1px solid #03ac13')};
  border-radius: 3px;
  padding: 8px 12px;
  outline: none;
  cursor: pointer;
`
