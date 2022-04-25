import {Button, Card, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useSwApiService from "../../services/SwApiService";
import PersonSkeleton from "../skeleton/PersonSkeleton";

const AppMoreInfo = ({learnMore}) => {

	const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films} = learnMore;
	const {getPlanet, getMovie, loading} = useSwApiService();
	const [homeWorld, setHomeWorld] = useState({})
	const [movie, setMovie] = useState([])

	useEffect(() => {

		const offset = homeworld.match(/\d+/)[0];
		getPlanet(offset).then(e => setHomeWorld(e));
		return () => films.map(e => getMovie(e.match(/\d+/)[0]).then(onCharListLoaded));
	}, [learnMore]);


	const onCharListLoaded = (newMovie) => setMovie(movie => [...movie, newMovie])


	const renderFilms = () => {
		return movie.map(({title, episode_id},i) => {
			return <Typography key={i} variant="body2" color="text.secondary">Movie: Episode {episode_id} {title}</Typography>;
		})

	}



	const View = () => {
		return (
			<div>
				<Typography gutterBottom variant="h5" component="div">{name}</Typography>
				<Typography variant="body2" color="text.secondary">Height: {height}</Typography>
				<Typography variant="body2" color="text.secondary">Mass: {mass}</Typography>
				<Typography variant="body2" color="text.secondary">Hair Color: {hair_color}</Typography>
				<Typography variant="body2" color="text.secondary">Skin Color: {skin_color}</Typography>
				<Typography variant="body2" color="text.secondary">Eye Color: {eye_color}</Typography>
				<Typography variant="body2" color="text.secondary">Birth Year: {birth_year}</Typography>
				<Typography variant="body2" color="text.secondary">Gender: {gender}</Typography>
				<Typography variant="body2" color="text.secondary">Home world: {homeWorld.name}</Typography>
				{renderMovieList}
			</div>
		)
	}

	const renderMovieList = renderFilms();
	const items = loading ? <PersonSkeleton/> : <View/>;


	return (
		<div>
			<Card sx={{width: 400, margin: '0 auto', marginTop: 40}}>
				<Link to='/'><Button>Back</Button></Link>
				<CardContent>{items}</CardContent>
			</Card>
		</div>
	);

};

export default AppMoreInfo;