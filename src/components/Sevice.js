import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

import bike from '../assets/resources/bike.png';
import dish from '../assets/resources/dish.png';

const Sevice = () => {
	return (
		<Box color="neutral" sx={{ px: { xs: 1, sm: 2, md: 12 } }}>
			<Grid
				container
				spacing={4}
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid item xs={12} sm={6}>
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
						Our <br />
						Services
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography sx={{ color: 'text.secondary', pt: { xs: 3 } }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
						delectus recusandae, perferendis eligendi incidunt ut tenetur
						accusamus perspiciatis ipsa quis velit dignissimos, culpa inventore
						voluptas. Inventore porro corporis ab magni laboriosam, repudiandae
						placeat, optio sit, non autem saepe nostrum earum.
					</Typography>
				</Grid>
			</Grid>
			<Box pt={10}>
				<Grid
					container
					spacing={4}
					justifyContent="space-between"
					alignItems="stretch"
				>
					<Grid item xs={12} md={6}>
						<Grid
							container
							spacing={4}
							justifyContent="space-between"
							alignItems="stretch"
						>
							<Grid item xs={6}>
								<Box
									bgcolor="#FFEDDE"
									sx={{
										p: 5,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<img
										src={dish}
										alt="Google play store"
										width="191px"
										height="191px"
									/>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box>
									<Typography
										variant="h6"
										sx={{
											color: '#2e266f',
											fontWeight: '600',
											pt: 4,
											textAlign: 'center',
										}}
									>
										advanced table <br /> booking
										{/* <Box
											sx={{
												borderBottom: '4px solid red',
												position: 'relative',
											}}
										>
											booking
										</Box> */}
									</Typography>

									<Typography
										sx={{
											color: 'text.secondary',
											textAlign: 'center',
										}}
									>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
										provident distinctio porro commodi totam beatae?
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box>
									<Typography
										variant="h6"
										sx={{
											color: '#2e266f',
											fontWeight: '600',
											pt: 4,
											textAlign: 'center',
										}}
									>
										Food for Free <br />
										24/7
									</Typography>

									<Typography
										sx={{
											color: 'text.secondary',
											textAlign: 'center',
										}}
									>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
										provident distinctio porro commodi totam beatae?
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box
									bgcolor="#FFEDDE"
									sx={{
										p: 5,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<img
										src={dish}
										alt="Google play store"
										width="191px"
										height="191px"
									/>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack
							bgcolor="#FFEDDE"
							justifyContent="center"
							alignItems="center"
							p={12}
						>
							<img
								src={bike}
								alt="Google play store"
								width="273px"
								height="203px"
							/>
							<Typography
								variant="h6"
								sx={{
									color: '#2e266f',
									fontWeight: '600',
									pt: 4,
									textAlign: 'center',
								}}
							>
								free home delivery <br />
								at your door steps
							</Typography>
							<Typography
								sx={{
									color: 'text.secondary',
									textAlign: 'center',
									borderBottom: '2px solid red',
									paddingBottom: '10px',
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
								delectus recusandae, perferendis eligendi incidunt ut tenetur
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Sevice;
