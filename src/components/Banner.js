import { Box } from '@mui/system';
import React from 'react';

const Banner = () => {
	return (
		<Box
			mt={10}
			sx={{
				position: 'absolute',
				right: '0',
				top: '-100px',
				bgcolor: 'red',
				color: 'white',
				width: '30%',
				height: '700px',
				zIndex: 1,
				// display: 'flex',
				// alignItems: 'center',
				// justifyContent: 'center',
				// textAlign: 'center',
			}}
		>
			{/* <PlaceIcon fontSize="large" />
    <h5>Hydrabad</h5> */}
		</Box>
	);
};

export default Banner;
