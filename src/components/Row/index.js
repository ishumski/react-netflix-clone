import React, { useState, useEffect } from 'react';
import api from '../../api/index';
import {
  Root,
  RowSlider,
  RowTitle,
  RowPosters,
  RowPoster,
  ArrowRight,
  ArrowLeft
} from "./style";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';



const Row = ({ title, request, id }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api.url(request).get().json();

      setMovies(response.results);
    };

    fetchMovies();
  }, [request]);


  const handleArrowRightClick = () => {
    document.getElementById(id).scrollLeft += window.innerWidth;
  }

  const handleArrowLeftClick = () => {
    document.getElementById(id).scrollLeft -= window.innerWidth;
  }

  return (

    <Root>
      <RowTitle>{title}</RowTitle>
      <RowSlider>
        <ArrowLeft onClick={handleArrowLeftClick}>
          <ChevronLeftIcon />
        </ArrowLeft>
        <RowPosters id={id}>
          {movies.map((movie) => (
            <RowPoster
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie.name}
              loading='lazy'
            />
          ))}
        </RowPosters>
        <ArrowRight onClick={handleArrowRightClick}>
          <ChevronRightIcon />
        </ArrowRight>

      </RowSlider>
    </Root>
  )
}

export default Row;