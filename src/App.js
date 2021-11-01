import './App.css';
import React from 'react';
import { AppContextWrapper } from './store/AppContext';
import Index from './components/Index/Index';
import Users from './components/Users/Users';

function App() {
	return (
		<AppContextWrapper>
			<div>
				<Users />
			</div>
		</AppContextWrapper>
	);
}

export default App;
