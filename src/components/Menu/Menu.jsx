import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router-dom';

export default function IconMenu() {
	const history = useHistory();

	function handleClick() {
		history.push('../Users/Users');
	}

	return (
		<Paper sx={{ width: 320, maxWidth: '100%' }}>
			<MenuList>
				<MenuItem>
					<ListItemText>Usuarios</ListItemText>
					<button type="button" onClick={handleClick}>
						Usuarios
					</button>
				</MenuItem>

				<Divider />
				<MenuItem>
					<ListItemText>Foro</ListItemText>
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemText>Mi perfil</ListItemText>
				</MenuItem>
				<Divider />
			</MenuList>
		</Paper>
	);
}
