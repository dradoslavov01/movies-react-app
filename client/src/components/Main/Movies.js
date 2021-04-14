import { useState, useEffect } from 'react';
import style from './Movies.module.css';
import * as moviesService from '../../services/moviesService';

const Movies = () => {

   const [movies, setMovies] = useState([]);

   useEffect(() => {
      moviesService.getMovies()
         .then(data => setMovies(data))

   }, []);

   return (
      <div className={style.container}>
         {movies.map(movie => {
            return (
               <section key={movie.id} className={style.moviesSection}>
                  <img src={movie.img} alt="movie-img" />
                  <p>{movie.title}</p>
                  <p>{movie.year}</p>
               </section>
            );
         })}
      </div >
   );
}


export default Movies;