import React from 'react';
import './Users.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

const Users = () => {
	return (
		<section className="cv">
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
						<ListItemText primary="User" />
						<ListItemText primary="User2" />
						<ListItemText primary="User3" />
						<ListItemText primary="User4" />
					</List>
				</div>
			</header>
		</section>
	);
};

export default Users;
