import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getMovieById } from '../../services/services';
import style from './Details.module.css';


const DetailsPage = ({ match }) => {

   const [movie, setMovie] = useState([]);

   const id = match.params.id;

   useEffect(() => {
      getMovieById(id)
         .then(data => setMovie(data));
   }, [id])

   return (
      <div className={style.movieContainer}>
         <img src={movie.img} alt="movie-img" />

         <div className={style.movieDetails}>
            <h2>
               <span>Title: </span>{movie.title}
            </h2>
            <p>
               <span>Category: </span> {movie.category}
            </p>
            <p>
               <span>Year: </span> {movie.year}
            </p>
            <p className={style.movieDescription}>
               <span>Description: </span> {movie.description}
            </p>
            <NavLink className={style.deleteBtn} to="/movie/delete">Delete</NavLink>
            <NavLink className={style.editBtn} to="/movie/edit">Edit</NavLink>
         </div>
      </div>
   );
}


export default DetailsPage;