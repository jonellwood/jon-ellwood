/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Work from './components/Work.jsx';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Skill />
				<Work />
			</main>
		</>
	);
};

export default App;
