const url = 'http://localhost:5000';

export const getMovies = (category) => {
   const type = ((category && category !== 'undefined') ? `?category=${category}` : '');
   return fetch(`${url}/movies${type}`)
      .then(res => res.json())
      .catch(err => alert(err));
};

export const getMovieById = (id) => {
   return fetch(`${url}/movies/${id}`)
      .then(res => res.json())
      .catch(err => alert(err));
};


export const createMovie = (title, year, category, img, description, ownerId) => {
   const data = {
      title,
      year,
      category,
      img,
      description,
      ownerId
   }

   fetch(`${url}/movies`, {
      method: "POST",
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })
};

export const editMovie = (id, title, year, category, img, description, ownerId) => {

   const data = {
      title,
      year,
      category,
      img,
      description,
      ownerId
   }


   return fetch(`${url}/movies/${id}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })
}

export const deleteMovie = (id) => {
   return fetch(`${url}/movies/${id}`, {
      method: 'DELETE'
   });
}