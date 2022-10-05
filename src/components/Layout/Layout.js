import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Service from '../Sevice';
import Main from '../Main';
import Banner from '../Banner';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		neutral: {
			main: '#fff5ec',
		},
	},
});
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		neutral: {
			main: '#fff5ec',
		},
	},
});
const Layout = (props) => {
	const isdark = false;

	return (
		<ThemeProvider theme={isdark ? darkTheme : lightTheme}>
			<CssBaseline />
			{/* sx={{
					px: { xs: 1, sm: 2, md: 12 },
					pb: 3,
				}} */}
			<Box>
				<CssBaseline />
				<Navbar />
				<Box bgcolor="#fff5ec" sx={{ minHeight: '87vh', pb: 12 }}>
					<Main />
					<Service />
				</Box>
				<Footer />
			</Box>
			<Banner />
		</ThemeProvider>
	);
};

export default Layout;
