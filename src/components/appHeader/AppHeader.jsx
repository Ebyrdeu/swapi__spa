import {AppBar, Button, Container, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Link} from "react-router-dom";


// Styled
const appBarrColor = grey[900];
const ButtonColor = grey["A100"]

const AppHeader = () => {

	return (
		<AppBar position='static' style={{background: appBarrColor}}>
			<Container>
				<div style={{display: "flex"}}>
					<Typography variant="h6" component="div" sx={{flexGrow: 1}}>Swapi</Typography>
					<Link to='/' style={{color: ButtonColor, marginLeft: '20px'}}>
						<Button style={{color: ButtonColor}}>Characters</Button>
					</Link>
					<Link to='/movies' style={{color: ButtonColor, marginLeft: '20px'}}>
						<Button style={{color: ButtonColor}}>Movies</Button>
					</Link>
				</div>
			</Container>
		</AppBar>
	);
};

export default AppHeader;