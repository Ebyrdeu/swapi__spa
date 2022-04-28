import {useEffect, useState} from "react";
import useSwApiService from "../../services/SwApiService";
import {Link, useParams} from "react-router-dom";
import {Skeleton, Container, Card, CardContent, Typography, Button} from "@mui/material";


const AppInfo = () => {
	const {type} = useParams()
	const {loading} = useSwApiService();



	const contentMovie =  !loading ? <AppInfoMovieCard/> : null;
	const contentChar = !loading ? <AppInfoCharCard/> : null;
	const loaded = loading ? <Skeleton variant="rectangular" width={210} height={118}/> : null;

	return <Container>{loaded}{(type === 'films') ? contentMovie : contentChar}</Container>
};



const AppInfoMovieCard = () => {
	const { id } = useParams();
	const {getMovie, loading} = useSwApiService();

	const [movieData, setMovieata] = useState({});
	const [click, setClick] = useState(false);

	const onMovieRequest = () => {
		getMovie(id).then(onMovieLoaded)
	};
	const onMovieLoaded = char => setMovieata(char);

	useEffect(() => onMovieRequest(), []);

	const {title,episode_id,director,producer,release_date, characters} = movieData;

	const View = ({films}) => {
		const links =  films.map((e, i) => {return <div key={i}><Link  to={`/info/people/${e.match( /\d+/)[0]}`} >{e}</Link></div>})
		return <div>{links}</div>
	}

	const items = click ? <View films={characters}/> : null;
	const loaded = loading ? <Skeleton variant="rectangular" width={210} height={118}/> : (
		<CardContent>
			<Typography variant="h5" component="div">{title}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Episode: {episode_id}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Director: {director}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Producer: {producer}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Release Date: {release_date}</Typography>
			<Button onClick={() => {setClick(true)}}>Show List of Chars</Button>
			{items}
		</CardContent>
	);

	return <Card sx={{minWidth: 275}}>{loaded}</Card>

};

const AppInfoCharCard = () => {
	const {getChar, loading} = useSwApiService();
	const {id} = useParams();

	const [click, setClick] = useState(false);
	const [charData, setChardata] = useState([])

	const onCharRequest = () => {
		getChar(id).then(onCharLoaded);
	}
	const onCharLoaded = char => setChardata(char);

	useEffect(() => onCharRequest(), []);

	const {name, height, mass,  hair_color, skin_color, eye_color, birth_year, gender,films} = charData;

	const View = ({films}) => {
		const links =  films.map((e, i) => {return <div key={i}><Link  to={`/info/films/${e.match( /\d+/)[0]}`} >{e}</Link></div>})
		return <div>{links}</div>
	}
	const items = click ? <View films={films}/> : null

	const loaded = loading ? <Skeleton variant="rectangular" width={210} height={118}/> : (
		<CardContent>
			<Typography variant="h5" component="div">{name}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>height: {height}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>mass: {mass}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>hair_color: {hair_color}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>skin_color:{skin_color}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>eye_color: {eye_color}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>birth_year: {birth_year}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>gender: {gender}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom></Typography>
			<Button onClick={() => {setClick(true)}}>Show List of Movies</Button>
			{items}
		</CardContent>
	)

	return <Card sx={{minWidth: 275}}>{loaded}</Card>

};

export default AppInfo;