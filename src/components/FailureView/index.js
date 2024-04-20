import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewContentContainer,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewBtn,
} from './styledComponents'

const FailureView = props => {
  const {onClickRetry} = props
  const onClickRetryBtn = () => {
    onClickRetry()
  }
  return (
    <FailureViewContainer>
      <FailureViewContentContainer>
        <FailureViewImage
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="cake-list-failure-img"
        />
        <FailureViewHeading>Oops Something Went Wrong</FailureViewHeading>
        <FailureViewDescription>
          We are having some trouble processing your request. Please try again.
        </FailureViewDescription>
        <FailureViewBtn type="button" onClick={onClickRetryBtn}>
          Retry
        </FailureViewBtn>
      </FailureViewContentContainer>
    </FailureViewContainer>
  )
}

export default FailureView
