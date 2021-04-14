const url = 'http://localhost:5000';

export const getMovies = (category) => {
    const type = ((category && category !== undefined) ? `?category=${category}` : '');
    return fetch(`${url}/movies${type}`)
        .then(res => res.json())
        .catch(err => alert(err));
}