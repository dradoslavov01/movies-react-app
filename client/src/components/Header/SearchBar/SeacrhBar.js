import style from './SearchBar.module.css';

const SearchBar = () => {
   return (
      <form className={style.form}>
         <input className={style.searchInput} type="text" name="searchInput" placeholder="Search..." />
         <input className={style.seacrhBtn} type="submit" name="seacrhBtn" value="search" />
      </form>
   );
}

export default SearchBar;