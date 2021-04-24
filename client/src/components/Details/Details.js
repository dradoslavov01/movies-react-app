import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import { getMovieById, deleteMovie } from '../../services/services';
import style from './Details.module.css';


const DetailsPage = ({ match, history }) => {

   const [movie, setMovie] = useState([]);

   const loggedInUser = useContext(AuthContext);
   let userId = null;
   if (loggedInUser != null) {
      userId = loggedInUser.uid;
   }

   const id = match.params.id;

   useEffect(() => {
      getMovieById(id)
         .then(data => setMovie(data));
   }, [id]);


   const onClickDeleteMovieHandler = () => {
      if (window.confirm('Are you sure you want to delete this movie?')) {
         deleteMovie(id)
            .then(() => {
               history.push('/');
            })
      }
   }

   const logoutPath = `/movie/details/edit/${id}`;

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
            <button className={style.likeBtn}>Like</button>
            {userId === movie.ownerId
               ? <>
                  <button onClick={onClickDeleteMovieHandler} className={style.deleteBtn} to="#">Delete</button>
                  <Link className={style.editBtn} to={logoutPath}>Edit</Link>
               </>
               : ''
            }
         </div>
      </div>
   );
}


export default DetailsPage;