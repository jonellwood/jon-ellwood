/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'lenis/dist/lenis.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
