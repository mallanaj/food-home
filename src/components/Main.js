import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import food from '../assets/resources/food.png';
import { Stack } from '@mui/system';

const Main = () => {
	return (
		<Box sx={{ px: { xs: 1, sm: 2, md: 12 }, py: 10 }}>
			<Grid container>
				<Grid item xs={12} sm={6}>
					<Typography
						variant="h1"
						sx={{
							color: 'text.secondary',
							fontWeight: '600',
							opacity: '0.15',
						}}
					>
						Food
					</Typography>
					<Typography
						variant="h3"
						color="initial"
						sx={{
							color: '#2e266f',
							fontWeight: '600',
						}}
					>
						Discover Restaurant <br /> & Delicious Food
					</Typography>
					<Box sx={{ pt: 4 }}>
						<Stack
							direction="row"
							sx={{
								width: '80%',
								height: '50px',
								justifyContent: 'space-around',
								alignItems: 'center',
							}}
							bgcolor="white"
						>
							<Box sx={{ opacity: '0.75', flexGrow: 1, marginLeft: '20px' }}>
								Search restaurant, food
							</Box>
							<Box
								bgcolor="red"
								justifySelf="flex-end"
								sx={{
									width: '100px',
									height: '40px',
									color: 'white',
									paddingRight: '5px',
									textAlign: 'center',
									borderTopLeftRadius: '50px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Typography variant="h5">GO</Typography>
							</Box>
						</Stack>
					</Box>
					<Box
						mt={10}
						sx={{
							position: 'absolute',
							left: '0',
							bgcolor: 'red',
							color: 'white',
							width: '200px',
							height: '50px',
							borderTopRightRadius: '25px',
							borderBottomRightRadius: '25px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							zIndex: 999,
						}}
					>
						<PlaceIcon fontSize="large" />
						<h5>Hydrabad</h5>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={food}
						alt="App store"
						width="500px"
						height="450px"
						style={{ position: 'relative', zIndex: 99, objectFit: '' }}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Main;
