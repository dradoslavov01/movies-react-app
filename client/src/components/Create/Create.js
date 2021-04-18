import { useContext } from 'react';
import style from './Create.module.css';
import { createMovie } from '../../services/services'
import { AuthContext } from '../../App';


const CreatePage = ({
   history
}) => {

   const loggedInUser = useContext(AuthContext);
   const ownerId = loggedInUser.uid;

   const onCreateSubmitHanler = (e) => {
      e.preventDefault();
      const { title, year, category, img, description } = e.target;

      createMovie(title.value, year.value, category.value, img.value, description.value, ownerId)

      history.push('/');

   };

   return (
      <form onSubmit={onCreateSubmitHanler} className={style.createForm} autoComplete="off">
         <label>Title</label>
         <input type="text" name="title" placeholder="Home Alone" />
         <label>Year</label>
         <input type="text" name="year" placeholder="2016" />
         <label>Category</label>
         <input type="text" name="category" placeholder="comedy" />
         <label>Image</label>
         <input type="text" name="img" placeholder="https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200" />
         <label>Description</label>
         <textarea rows="6" cols="30" type="text" name="description" />
         <button name="addBtn">Add Movie</button>
      </form>
   );
}

export default CreatePage;