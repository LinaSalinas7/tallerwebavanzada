import './App.css';
import React from 'react';
import { AppContextWrapper } from './store/AppContext';
import Index from './components/Index/Index';

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
