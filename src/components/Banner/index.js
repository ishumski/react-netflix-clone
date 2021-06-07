import React, { useEffect, useState } from 'react';
import api from '../../api/index';
import Requests from '../../api/request'
import { Root, Content, MovieTitle, MoviePlot, ButtonBox, PlayButton, MoreInfoButton } from './style';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.url(Requests.NETFLIX_ORIGINALS).get().json();


      setMovie(response.results[Math.floor(Math.random() * response.results.length - 1)])

      console.log(response)
    };

    fetchMovie();
  }, [])

  return (
    <Root backgroundImage={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}>
      <Content>
        <MovieTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </MovieTitle>
        <MoviePlot>
          {movie?.overview}
        </MoviePlot>
        <ButtonBox>
          <PlayButton>
            <PlayArrowIcon style={{ marginRight: '10' }} />
            Play
          </PlayButton>
          <MoreInfoButton>
            <InfoIcon style={{ marginRight: '10' }}/>
            More Info
          </MoreInfoButton>
        </ButtonBox>
      </Content>
    </Root>
  )
}

export default Banner;