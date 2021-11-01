import React from 'react';
import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const login = () => {
	return (
		<section className="cv">
			<article>
				<div className="contentInfoUser">
					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="name"
							label="Nombre"
							variant="outlined"
						/>
					</Box>
					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="lastName"
							label="Apellido"
							variant="outlined"
						/>
					</Box>
					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="email"
							label="Email"
							variant="outlined"
						/>
					</Box>
					<Box
						className="box"
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="password"
							label="Contraseña"
							type="password"
							autoComplete="current-password"
						/>
					</Box>
				</div>
				<div>
					<InputLabel id="inputlabel">Activo</InputLabel>
					<Select labelId="label" id="select" label="Activo">
						<MenuItem value={10}>Si</MenuItem>
						<MenuItem value={20}>No</MenuItem>
					</Select>
				</div>
				<div className="b">
					<Button className="button" variant="contained">
						Registrarse
					</Button>
				</div>
			</article>
		</section>
	);
};
export default login;
