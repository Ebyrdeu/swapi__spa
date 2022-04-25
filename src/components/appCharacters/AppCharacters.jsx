import useSwApiService from "../../services/SwApiService";
import {Button, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PersonSkeleton from "../skeleton/PersonSkeleton";
import CardListSkeleton from "../skeleton/CardListSkeleton";


const AppCharacters = ({onLearMore}) => {

	// States
	const [charList, setCharList] = useState([]);
	const [offset, setOffset] = useState(1);
	const {getAllCharacters, loading} = useSwApiService();


	// Effect
	useEffect(() => onRequest, [])


	//  Query
	const onRequest = () => {

		setOffset(offset + 1);
		getAllCharacters(offset).then(onCharListLoaded);
	}


	const onCharListLoaded = (newCharList) => {
		setCharList(charList => [...charList, ...newCharList])
	}


	const renderCards = (arr) => {
		const cards = arr.map(({
			                       name,
			                       height,
			                       mass,
			                       hair_color,
			                       skin_color,
			                       eye_color,
			                       birth_year,
			                       gender,
			                       homeworld,
			                       films
		                       }, id) => {
			return (
				<Card sx={{minWidth: 200, display: 'inline-block', margin: 1}} key={id}>
					<CardContent>

						<Typography sx={{fontSize: 24,}} color="text.primary" gutterBottom>
							{name}
						</Typography>
						<Typography sx={{fontSize: 14}} color="text.primary" gutterBottom>
							Height:{height}
						</Typography>
						<Typography sx={{fontSize: 14}} color="text.primary" gutterBottom>
							Mass:{mass}
						</Typography>
					</CardContent>
					<CardActions>
						<Link to='/person' onClick={() => {
							onLearMore({
								name,
								height,
								mass,
								hair_color,
								skin_color,
								eye_color,
								birth_year,
								gender,
								homeworld,
								films
							});
						}}>Learn More</Link>
					</CardActions>
				</Card>
			)
		})
		return <div>{cards}</div>

	}

	const cards = renderCards(charList);

	const items = loading
		?  <CardListSkeleton/>
		:  <div style={{display: 'flex', justifyContent: "center"}}>{cards}</div>

	return (
		<Container>
			{items}
			<Button style={{
				width: 400,
				maxWidth: "100%",
				margin: "0 auto",
				display: 'block'
			}} variant="contained" onClick={onRequest}>Load More</Button>
		</Container>
	);

};

export default AppCharacters;