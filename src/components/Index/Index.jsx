import React from 'react';
import './Index.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

const index = () => {
	return (
		<section className="section">
			<article className="cv">
				<header className="leftPanel">
					<div className="search">
						<Box
							component="form"
							sx={{
								'& > :not(style)': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								id="search"
								label="Buscar usuario"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon />
										</InputAdornment>
									),
								}}
								variant="outlined"
								size="small"
							/>
						</Box>
					</div>
					<Divider />
					<div className="listUsers">
						<List>
							<ListItemText primary="Message" />
							<ListItemText primary="Message2" />
							<ListItemText primary="Message3" />
							<ListItemText primary="Message4" />
						</List>
					</div>
				</header>
				<header className="rigthPanel"></header>
			</article>
			<header className="buttonRegis">
				<div>
					<Button className="button" variant="contained">
						Registrar
					</Button>
				</div>
			</header>
		</section>
	);
};

export default index;
