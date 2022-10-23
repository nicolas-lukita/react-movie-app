import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	ListItemIcon,
} from "@mui/material";

import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<Box flex={1} p={10} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed">
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					MOVIE APP
				</Typography>
				<List>
					<ListItem disablePadding>
						<ListItemButton component={Link} to="/">
							{/* <ListItemIcon>
								<Home />
							</ListItemIcon> */}
							<ListItemText primary="Homepage" />
						</ListItemButton>

						<ListItemButton component={Link} to="/mywatchlist">
							<ListItemText primary="My Watchlist" />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
