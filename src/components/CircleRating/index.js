import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {styled} from 'styled-components'

const CircularProgressBarContainer = styled.div`
  background-color: #fff;
  font-weight: bold;
  font-family: 'Roboto';
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  top: 90%;
  left: 5%;
  z-index: 1;
`
const CircleRating = ({rating}) => {
  const ratingColor = rating < 5 ? 'red' : 'orange'
  return (
    <CircularProgressBarContainer>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 7 ? ratingColor : 'green',
          textColor: '#04152d',
          textSize: '36px',
        })}
      />
    </CircularProgressBarContainer>
  )
}

export default CircleRating
