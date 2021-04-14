const url = 'http://localhost:5000';

export const getMovies = () => {
    return fetch(`${url}/movies`)
        .then(res => res.json())
        .catch(err => alert(err));
}