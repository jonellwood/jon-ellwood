/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

import ProjectCard from './ProjectCard';

const works = [
	{
		imgSrc: 'markscustoms.jpg',
		title: 'Custom Made Furniture',
		tags: ['eCommerce', 'Client Project'],
		projectLink: 'https://marklinscustommade.com/',
	},
	{
		imgSrc: 'pocketmonsters.jpg',
		title: 'Portfolio site based on popular game',
		tags: ['Top Down', 'Intro Site'],
		// projectLink: '',
	},
	{
		imgSrc: 'complex-data-query.jpg',
		title: 'Bespoke Complex Data Access App',
		tags: ['Development', 'API', 'SQL', 'Internal Tool'],
		// projectLink: '',
	},
	{
		imgSrc: 'internal-store.jpg',
		title: 'Internal Employee Store',
		tags: ['Web-design', 'Development', 'Internal Tool', 'eCommerce'],
		//projectLink: '',
	},
	{
		imgSrc: 'chat-bot.jpg',
		title: 'Chatbot for Call for Service Requests',
		tags: ['AWS', 'Development', 'Chatbot', 'Public Safety'],
		projectLink: 'https://sheriff.berkeleycountysc.gov/animal-control-chatbot/',
	},
	{
		imgSrc: 'practice-test-app.png',
		title: 'Practice Test App',
		tags: ['Web-design', 'Development', 'Svelte'],
		projectLink: 'https://test.jonellwood.dev/',
	},
];

// import PropTypes from 'prop-types';

const Work = () => {
	return (
		<section className='section' id='work'>
			<div className='container'>
				<h2 className='headline-2 reveal-up'>My portfolio highlights</h2>

				<div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]'>
					{works.map(({ imgSrc, title, tags, projectLink }, key) => (
						<ProjectCard
							key={key}
							imgSrc={imgSrc}
							title={title}
							tags={tags}
							projectLink={projectLink}
							classes='reveal-up'
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Work;
