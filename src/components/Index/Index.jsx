import React from 'react';
import './Index.css';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

const Index = () => {
	return (
		<section className="section">
			<article className="cv">
				<header className="leftPanel">
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
		</section>
	);
};

export default Index;
