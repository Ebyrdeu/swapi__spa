import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import AppHeader from "../appHeader/AppHeader";
import AppCharacters from "../appCharacters/AppCharacters";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppMovies from "../appMovies/AppMovies";
import AppInfo from "../appInfo/AppInfo";



function App() {

	return (
		<Router>
			<div className="App">
				<AppHeader/>
				<Routes>
					<Route path="/" element={<ErrorBoundary childElement={<AppCharacters/>}/>}/>
					<Route path="/movies" element={<ErrorBoundary childElement={<AppMovies/>}/>}/>
					<Route path="/info/:type/:id" element={<ErrorBoundary childElement={<AppInfo/>}/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
