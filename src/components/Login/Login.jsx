import React from 'react';
import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
							id="userName"
							label="Nombre de usuario"
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
