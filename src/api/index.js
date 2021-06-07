import wretch from 'wretch';

const instance = wretch().url('https://api.themoviedb.org/3');

export default instance;