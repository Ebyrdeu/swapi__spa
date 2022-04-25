import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import AppHeader from "../appHeader/AppHeader";
import AppCharacters from "../appCharacters/AppCharacters";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import AppMoreInfo from "../appMoreInfo/appMoreInfo";


function App() {
	const [learnMore, setLearnMore] = useState({
		name: null,
		height: null,
		mass: null,
		hair_color: null,
		skin_color: null,
		eye_color: null,
		birth_year: null,
		gender: null,
		homeworld: null,
		films: null
	});

	const onLearMore = (data) => setLearnMore({...data})

	return (
		<Router>
			<div className="App">
				<AppHeader/>
				<Routes>
					<Route exact path="/" element={<ErrorBoundary childElement={<AppCharacters onLearMore={onLearMore}/>}/>}/>
					<Route exact path='/person' element={<ErrorBoundary childElement={<AppMoreInfo learnMore={learnMore}/>}/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
