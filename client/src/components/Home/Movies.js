import { useState, useEffect } from 'react';
import style from './Movies.module.css';
import { getMovies } from '../../services/services';
import FavoriteIcon from '@material-ui/icons/Favorite';


const HomePage = ({
   match,
   history
}) => {

   const [movies, setMovies] = useState([]);

   const category = match.params.category;

   useEffect(() => {
      getMovies(category)
         .then(data => setMovies(data))

   }, [category]);

   return (
      <div className={style.container}>
         {movies.map(movie => {
            return (
               <section onClick={() => history.push(`/movie/details/${movie.id}`)} key={movie.id} className={style.moviesSection}>
                  <FavoriteIcon className={style.likeIcon} />
                  <img src={movie.img} alt="movie-img" />
                  <p>{movie.title}</p>
                  <p>{movie.year}</p>
               </section>
            );
         })}
      </div >
   );
}


export default HomePage;