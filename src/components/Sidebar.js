import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	ListItemIcon,
} from "@mui/material";

const Sidebar = () => {
	return (
		<Box flex={1} p={10} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed">
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					MOVIE APP
				</Typography>
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a" href="/">
							{/* <ListItemIcon>
								<Home />
							</ListItemIcon> */}
							<ListItemText primary="Homepage" />
						</ListItemButton>
						<ListItemButton component="a" href="/mywatchlist">
							<ListItemText primary="My Watchlist" />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
