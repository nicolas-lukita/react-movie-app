import "./App.css";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import DetailsPage from "./components/DetailsPage";
import WatchlistPage from "./components/WatchlistPage";

function App() {
	return (
		<Stack direction="row" spacing={20} justifyContent="flex-end">
			<Sidebar />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/mywatchlist" element={<WatchlistPage />} />
				<Route path="/movie/:id" element={<DetailsPage />} />
			</Routes>
		</Stack>
	);
}

export default App;
