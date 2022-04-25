import {useHttp} from "../hooks/http.hook";

const useSwApiService = () => {
	const {request, error, clearError, loading} = useHttp();
	const _apiBase = 'https://swapi.dev/api';
	const _offset = 1;
	const getAllCharacters = async (offset = _offset) => {
		const res = await request(`${_apiBase}/people/?page=${offset}`);
		return res.results.map(_transformCharacter);
	}
	const getChar = async (id, offset = _offset) => {
		const res = await request(`${_apiBase}/people/?page=${offset}`);
		return res.results[id];
	}
	const getPlanet =  async (offset = _offset) => {
		const res =  await request(`${_apiBase}/planets/${offset}`);
		return res;
	}
	const getMovie =  async (offset = _offset) => {
		const res =  await request(`${_apiBase}/films/${offset}`);
		return res;
	}
	const _transformCharacter = (char) => {
		return {
			name: char.name,
			height: char.height,
			mass: char.mass,
			hair_color: char.hair_color,
			skin_color: char.skin_color,
			eye_color: char.eye_color,
			birth_year: char.birth_year,
			gender: char.gender,
			homeworld: char.homeworld,
			films: char.films
		}
	}


	return {
		error,
		clearError,
		loading,
		getAllCharacters,
		getChar,
		getPlanet,
		getMovie
	}
}
export default useSwApiService;
