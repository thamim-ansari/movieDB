import {styled} from 'styled-components'

export const MovieDetailsPageContainer = styled.div`
  background-color: #00010e;
  min-height: 100vh;
`
export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 120px;
  }
`
export const MovieDetailResponsiveContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`

export const MovieImageAndDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const BackDropContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  overflow: hidden;
  pointer-events: none;
`
export const BackDropImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export const MovieImageContainer = styled.div`
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`
export const MovieImage = styled.img`
  width: 100%;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`
export const MovieDetailContainer = styled.div`
  font-family: 'Roboto';
  color: #fff;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
`
export const MovieTitle = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 28px;
  line-height: 40px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 44px;
  }
`
export const MovieTagLine = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
  font-style: italic;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`
export const MovieGenreList = styled.ul`
  padding-left: 0px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 25px;
`
export const MovieGenre = styled.li`
  color: #fff;
  background-color: #da2f68;
  list-style-type: none;
  margin-right: 5px;
  padding: 3px 5px;
  font-size: 12px;
  border-radius: 4px;
  font-weight: 500;
`
export const MovieRatingAndVideoContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
`
export const MoviePlayIconContainer = styled.div`
  border: 3px solid #fff;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`
export const MovieVideoBtn = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 25px;
  &:hover {
    color: #da2f68;

    .play-icon {
      color: #da2f68;
    }

    ${MoviePlayIconContainer} {
      border-color: #da2f68;
    }
  }
`
export const MovieVideoCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`
export const VideoPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const MovieOverviewContainer = styled.div`
  margin-bottom: 25px;
`
export const MovieOverviewHeading = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  color: '#fff';
`
export const MovieOverview = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto';
  color: '#fff';
  @media screen and (min-width: 768px) {
    padding-right: 100px;
  }
`
export const MovieInfoContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 0;
  display: flex;
`
export const MovieStatsContainer = styled.div`
  display: flex;
  margin-right: 10px;
  flex-wrap: wrap;
`
export const MovieInfosHeading = styled.p`
  font-weight: 600;
  line-height: 24px;
  margin-right: 10px;
`
export const MovieInfos = styled.p`
  margin-right: 10px;
  opacity: 0.5;
  line-height: 24px;
`
export const MovieCastContainer = styled.div`
  margin-bottom: 25px;
`
export const CastContainerHeading = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #fff;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const MovieDetailsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const CastDetailsLoaderContainer = styled(MovieDetailsLoaderContainer)`
  height: 30vh;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
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
export const CastDetailsFailureViewContainer = styled(FailureViewContainer)`
  height: 30vh;
`
export const UnavailableVideoContainer = styled.div`
  background-color: #fff;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
export const UnavailableVideo = styled.p`
  color: #000;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const MovieDetailCircularProgressBarContainer = styled.div`
  background-color: #041226;
  font-weight: bold;
  font-family: 'Roboto';
  width: 60px;
  height: 60px;
  border-radius: 100%;
  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`
