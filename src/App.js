import './App.css';
import React from 'react';
import { AppContextWrapper } from './store/AppContext';
import Index from './components/Index/Index';
import Users from './components/Users/Users';
import Menu from './components/Menu/Menu';

function App() {
	return (
		<AppContextWrapper>
			<div>
				<Index />
			</div>
		</AppContextWrapper>
	);
}

export default App;
