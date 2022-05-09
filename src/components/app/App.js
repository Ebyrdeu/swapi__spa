import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {CircularProgress} from "@mui/material";

const AppInfo = lazy(() => import('../appInfo/AppInfo'))
const AppMovies = lazy(() => import('../appMovies/AppMovies'))
const AppCharacters = lazy(() => import('../appCharacters/AppCharacters'))

function App() {

	return (
		<Router>
			<div className="App">
				<AppHeader/>
			<Suspense fallback={<CircularProgress />}>
				<Routes>
					<Route path="/" element={<ErrorBoundary childElement={<AppCharacters/>}/>}/>
					<Route path="/movies" element={<ErrorBoundary childElement={<AppMovies/>}/>}/>
					<Route path="/info/:type/:id" element={<ErrorBoundary childElement={<AppInfo/>}/>}/>
				</Routes>
			</Suspense>
			</div>
		</Router>
	);
}

export default App;
