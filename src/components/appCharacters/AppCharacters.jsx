import useSwApiService from "../../services/SwApiService";
import {useEffect, useState} from "react";
import {Card, CardActionArea, CardContent, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import CardListSkeleton from "../skeleton/CardListSkeleton";
import {grey} from "@mui/material/colors";
import {LoadingButton} from "@mui/lab";

const AppCharacters = () => {
	const [charData, setCharData] = useState([]);
	const [offset, setOffset] = useState(1);
	const mainColor = grey[900];


	const {getAllCharacters, loading} = useSwApiService();

	useEffect(() => onRequest, []);

	const onRequest = () => getAllCharacters(offset).then(onCharLoaded);


	const onCharLoaded = (newCharList) => {
		setCharData((charData) => [...charData, ...newCharList]);
		setOffset(offset => offset + 1);
	}

	const renderChars = (arr) => {
		let count = 0;
		const chars = arr.map(({name, height, mass, birth_year, gender}, i) => {
			i++;
			if (count === 16) return count = 17
			count++;
			return (
				<Card sx={{width: 300, margin: '8px', color: mainColor}}
				      key={i}
				      style={{textDecoration: "none"}}
				      as={Link}
				      to={`/info/people/1`}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">{name}</Typography>
							<Typography variant="body2" color="text.secondary">Height: {height}</Typography>
							<Typography variant="body2" color="text.secondary">Mass: {mass}</Typography>
							<Typography variant="body2" color="text.secondary">Birth year: {birth_year}</Typography>
							<Typography variant="body2" color="text.secondary">Gender: {gender}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			)
		})

		return <div style={{display: "flex", flexWrap: "wrap"}}>{chars}</div>

	}
	const items = renderChars(charData);
	const whileLoading = loading ? <CardListSkeleton/> : null;

	return (
		<Container>
			{items}
			{whileLoading}
			<LoadingButton
				style={{
					display: "block",
					width: 250,
					fontSize: 20,
					margin: '0 auto'
				}}
				size="small"
				onClick={() => onRequest(offset)}
				loading={loading}
				variant="outlined"
				disabled={loading}>
				Load More
			</LoadingButton>
		</Container>
	)

};

export default AppCharacters;