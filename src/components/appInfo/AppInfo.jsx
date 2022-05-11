import useSwApiService from "../../services/SwApiService";
import {useParams} from "react-router-dom";
import {Skeleton, Container, Card, CardContent, Typography, Button} from "@mui/material";
import withInfoCard from "../../withInfoCard/withInfoCard";

const AppInfoMovieCard = ({click, loading, infoData, setClick, View}) => {
	const {title, episode_id, director, producer, release_date, characters} = infoData;

	const items = click ? <View info={characters} type={'people'}/> : null;
	const loaded = loading ? <Skeleton variant="rectangular" width={210} height={118}/> : (
		<CardContent>
			<Typography variant="h5" component="div">{title}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Episode: {episode_id}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Director: {director}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Producer: {producer}</Typography>
			<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>Release
				Date: {release_date}</Typography>
			<Button onClick={() => setClick(!click)}>Show List of Chars</Button>
			{items}
		</CardContent>
	);

	return <Card sx={{minWidth: 275}}>{loaded}</Card>

};

const AppInfoCharCard = ({click, loading, infoData, setClick, View}) => {
	const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films} = infoData;

	const items = click ? <View info={films} type={'films'}/> : null;
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
			<Button onClick={() => setClick(!click)}>Show List of Movies</Button>
			{items}
		</CardContent>
	)

	return <Card sx={{minWidth: 275}}>{loaded}</Card>

};

const WithInfoCharCard = withInfoCard(AppInfoCharCard, true);
const WithInfoMovieCard = withInfoCard(AppInfoMovieCard, false);

const AppInfo = () => {
	const {type} = useParams()
	const {loading} = useSwApiService();
	const contentMovie = !loading ? <WithInfoMovieCard/> : null;
	const contentChar = !loading ? <WithInfoCharCard/> : null;
	const loaded = loading ? <Skeleton variant="rectangular" width={210} height={118}/> : null;
	return <Container>{loaded}{(type === 'films') ? contentMovie : contentChar}</Container>
};


export default AppInfo;