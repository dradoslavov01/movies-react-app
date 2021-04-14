import { useState, useEffect } from 'react';
import style from './Movies.module.css';
import * as moviesService from '../../services/moviesService';

const Movies = (props) => {

   const [movies, setMovies] = useState([]);

   const category = props.match.params.category;

   useEffect(() => {
      moviesService.getMovies()
         .then(data => setMovies(data))
   }, []);

   useEffect(() => {
      moviesService.getMovies(category)
         .then(data => setMovies(data))

   }, [category]);


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