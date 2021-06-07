import React, { useEffect, useState } from 'react';
import api from '../../api/index';
import Requests from '../../api/request'
import {
  Root,
  Content,
  MovieTitle,
  MovieOverwiew,
  ButtonBox,
  PlayButton,
  MoreInfoButton
} from './style';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';


const truncate = (str, n) => {
  return str?.length > n ? `${str.substring(0, n - 1)}...` : str;
}

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
          <MovieOverwiew>
            {truncate( movie?.overview, 200)}
          </MovieOverwiew>
          <ButtonBox>
            <PlayButton>
              <PlayArrowIcon style={{ marginRight: '10' }} />
            Play
          </PlayButton>
            <MoreInfoButton>
              <InfoIcon style={{ marginRight: '10' }} />
            More Info
          </MoreInfoButton>
          </ButtonBox>
        </Content>
     
    </Root>
  )
}

export default Banner;