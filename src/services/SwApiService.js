import {useHttp} from "../hooks/http.hook";

const useSwApiService = () => {
	const {request, error, clearError, loading} = useHttp();
	const _apiBase = 'https://swapi.dev/api';
	const _offset = 1;

	const getAllCharacters = async (offset = _offset) => {
		const res = await request(`${_apiBase}/people/?page=${offset}`);
		return res.results.map(_transformCharacter);
	}

	const getAllMovies = async () => {
		const res = await request(`${_apiBase}/films/`);
		return res.results.map(_transformMovie);
	}

	const getMovie = async (offset = _offset) => await request(`${_apiBase}/films/${offset}`);


	const getChar = async (offset = _offset) => await request(`${_apiBase}/people/${offset}`);


	const _transformCharacter = (char) => {
		return {
			name: char.name,
			height: char.height,
			mass: char.mass,
			birth_year: char.birth_year,
			gender: char.gender,
		}
	}
	const _transformMovie = (movie) => {
		return {
			title: movie.title,
			episode_id: movie.episode_id,
			director: movie.director,
			producer: movie.producer,
			release_date: movie.release_date,
		}
	}

	return {
		error,
		clearError,
		loading,
		getAllCharacters,
		getAllMovies,
		getMovie,
		getChar
	}
}
export default useSwApiService;
