import {useState} from 'react'
import {
  CastCardContainer,
  CastCardItem,
  CastImageContainer,
  CastImage,
  CastName,
  CastCharacterName,
  CastDetailsUnavailable,
} from './styledComponents'

const CastSlider = props => {
  const {castDetails} = props
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = e => {
    setIsMouseDown(true)
    setStartX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = e => {
    if (!isMouseDown) return
    e.preventDefault()
    const x = e.pageX - e.currentTarget.offsetLeft
    const walk = (x - startX) * 2
    e.currentTarget.scrollLeft = scrollLeft - walk
  }
  return (
    <>
      {castDetails && castDetails.length > 0 ? (
        <CastCardContainer
          className="cast-card-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {castDetails.map(Cast => (
            <CastCardItem key={Cast.castId} className="cast-card-item">
              <CastImageContainer>
                {Cast.castImage.slice(-4) === 'null' ? (
                  <CastImage
                    src="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                    alt="cast-pic"
                    className="profile-pic"
                  />
                ) : (
                  <CastImage
                    src={Cast.castImage}
                    alt="cast-pic"
                    className="profile-pic"
                  />
                )}
              </CastImageContainer>

              <CastName>{Cast.name}</CastName>
              <CastCharacterName>{Cast.character}</CastCharacterName>
            </CastCardItem>
          ))}
        </CastCardContainer>
      ) : (
        <CastDetailsUnavailable>
          Cast Details Unavailable
        </CastDetailsUnavailable>
      )}
    </>
  )
}

export default CastSlider
