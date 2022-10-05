import React from 'react';

import googlePlay from '../../assets/resources/googlePlay.png';
import mobileApp from '../../assets/resources/mobileApp.png';
import appStore from '../../assets/resources/appStore.png';

import { Box, Grid, Paper, Stack, Typography } from '@mui/material';

// import classes from './Footer.module.css';

const Footer = () => {
	return (
		<Box
			elevation={0}
			bgcolor="#FFEDDE"
			sx={{ px: { xs: 1, sm: 2, md: 12 }, pb: 3 }}
		>
			<Grid
				container
				spacing={4}
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid item xs={12} sm={6}>
					<Stack direction="row">
						<Box>
							<Typography
								variant="h3"
								color="initial"
								sx={{
									color: '#2e266f',
									fontWeight: '600',
									borderLeft: '20px solid red',
									paddingLeft: '20px',
								}}
							>
								Download app for <br /> Exciting Deals
							</Typography>
							<Typography sx={{ color: 'text.secondary', pt: 2 }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus totam nostrum fugiat harum aut mollitia asperiores
								enim sequi neque necessitatibus!
							</Typography>
							<Grid
								container
								justifyContent="flex-start"
								alignItems="center"
								spacing={1}
								pt={3}
							>
								<Grid item xs={6}>
									<img
										src={googlePlay}
										alt="Google play store"
										width="261px"
										height="101px"
										style={{ objectFit: 'cover', marginLeft: '-16px' }}
									/>
								</Grid>
								<Grid item>
									<img
										src={appStore}
										alt="App store"
										width="227px"
										height="67px"
										style={{ objectFit: 'cover' }}
									/>
								</Grid>
							</Grid>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Grid container justifyContent="center" alignItems="center">
						{/* <Box className={classes.absolute1}>
							<img
								src={vegitable2}
								alt="Google play store"
								width="400px"
								height="200px"
								// style={{ borderRadius: '6%', margin: '5px' }}
							/>
						</Box> */}
						<Paper
							elevation={2}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '235px',
								height: '515px',
								borderRadius: '50px',
								backgroundColor: '#eeeeee',
							}}
						>
							<img
								src={mobileApp}
								alt="Google play store"
								width="205px"
								height="475px"
								style={{ borderRadius: '30px', margin: '5px' }}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
