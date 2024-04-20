import {
  PaginationContainer,
  PaginationList,
  PaginationListItem,
  PaginationNextAndPrevBtn,
  PaginationPageNumberBtn,
} from './styledComponents'

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
  handleNextPage,
  handlePrevPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleClick = pageNumber => {
    scrollToTop()
    paginate(pageNumber)
  }
  const handlePrevClick = () => {
    handlePrevPage()
    setTimeout(scrollToTop, 100)
  }
  const handleNextClick = () => {
    handleNextPage()
    setTimeout(scrollToTop, 100)
  }
  return (
    <PaginationContainer>
      <PaginationList>
        <PaginationListItem>
          <PaginationNextAndPrevBtn
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            type="button"
            isButtonActive={currentPage === 1}
          >
            Prev
          </PaginationNextAndPrevBtn>
        </PaginationListItem>
        {pageNumbers.map(number => (
          <PaginationListItem key={number}>
            <PaginationPageNumberBtn
              onClick={() => handleClick(number)}
              type="button"
              activePageNumber={currentPage === number}
            >
              {number}
            </PaginationPageNumberBtn>
          </PaginationListItem>
        ))}
        <PaginationListItem>
          <PaginationNextAndPrevBtn
            onClick={handleNextClick}
            disabled={currentPage === pageNumbers.length}
            type="button"
            isLastPage={currentPage === pageNumbers.length}
          >
            Next
          </PaginationNextAndPrevBtn>
        </PaginationListItem>
      </PaginationList>
    </PaginationContainer>
  )
}

export default Pagination
