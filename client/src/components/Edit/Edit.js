import { useEffect, useState, useContext } from 'react';
import style from './Edit.module.css';
import {getMovieById, editMovie } from '../../services/services';
import { AuthContext } from '../../App';

const EditPage = ({
   match,
   history
}) => {

   const [movieData, setMovieData] = useState([]);

   const loggedInUser = useContext(AuthContext);
   const ownerId = loggedInUser.uid;

   const id = match.params.id;
   useEffect(() => {
      getMovieById(id)
         .then(res => setMovieData(res))
         .catch(err => alert(err));

   }, [id]);

   const onEditSubmitHandler = (e) => {
      e.preventDefault();

      const { title, year, category, img, description } = e.target;
   
      editMovie(id, title.value, year.value, category.value, img.value, description.value, ownerId)
         .then(() => {
            history.push(`/movie/details/${id}`);
            return;
         });
   };

   return (
      <form onSubmit={onEditSubmitHandler} className={style.createForm} autoComplete="off">
         <label>Title</label>
         <input type="text" name="title" defaultValue={movieData.title} />
         <label>Year</label>
         <input type="text" name="year" defaultValue={movieData.year} />
         <label>Category</label>
         <input type="text" name="category" defaultValue={movieData.category} />
         <label>Image</label>
         <input type="text" name="img" defaultValue={movieData.img} />
         <label>Description</label>
         <textarea rows="6" cols="30" type="text" name="description" defaultValue={movieData.description} />
         <button name="addBtn">Save Changes</button>
      </form>
   );
};


export default EditPage;