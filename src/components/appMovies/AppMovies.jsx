import {useEffect, useState} from "react";
import useSwApiService from "../../services/SwApiService";
import {Card, CardActionArea, CardContent, Container, Typography} from "@mui/material";
import CardListSkeleton from "../skeleton/CardListSkeleton";
import {Link} from "react-router-dom";
import {grey} from "@mui/material/colors";

const AppMovies = () => {
	const mainColor = grey[900];
	const [moviesData, setMoviesData] = useState([]);
	const {getAllMovies, loading} = useSwApiService();

	useEffect(() => onRequest, [])

	const onRequest = () => getAllMovies().then(onMovieLoaded);


	const onMovieLoaded = movie => setMoviesData(movie);


	const renderMovies = (arr) => {

		const movies = arr.map((
			{title, episode_id, director, producer, release_date},i) => {
			i++;
			return (
				<Card sx={{width: 300, margin: '8px'}}
				      key={episode_id}
				      style={{textDecoration: "none"}}
				      as={Link}
				      to={`/info/films/${i}`}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" style={{color: mainColor}}>{title}</Typography>
							<Typography variant="body2" color="text.secondary">Episode: {episode_id}</Typography>
							<Typography variant="body2" color="text.secondary">Director: {director}</Typography>
							<Typography variant="body2" color="text.secondary">Producer: {producer}</Typography>
							<Typography variant="body2" color="text.secondary">Release Date: {release_date}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			)
		});

		return <div style={{display: "flex", flexWrap: "wrap"}}>{movies}</div>
	}

	const movies = renderMovies(moviesData);

	const skeleton = loading ? <CardListSkeleton/> : null;

	return (
		<Container>
			{skeleton}
			{movies}
		</Container>
	);
};

export default AppMovies;