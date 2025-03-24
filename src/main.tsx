import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CommandContextProvider } from './contexts/CommandContext.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<CommandContextProvider>
			<App />
		</CommandContextProvider>
	</BrowserRouter>
);
