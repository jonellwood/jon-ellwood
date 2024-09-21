/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

import ProjectCard from './ProjectCard';

const works = [
	{
		imgSrc: 'src/images/markscustoms.jpg',
		title: 'Custom Made Furniture',
		tags: ['eCommerce', 'Client Project'],
		projectLink: 'https://marklinscustommade.com/',
	},
	{
		imgSrc: 'src/images/pocketmonsters.jpg',
		title: 'Portfolio site based on popular game',
		tags: ['Top Down', 'Intro Site'],
		// projectLink: 'https://pixstock-official.vercel.app/',
	},
	{
		imgSrc: 'src/images/project-3.jpg',
		title: 'Recipe app',
		tags: ['Development', 'API'],
		projectLink: '',
	},
	{
		imgSrc: 'src/images/project-4.jpg',
		title: 'Real state website',
		tags: ['Web-design', 'Development'],
		projectLink: 'https://github.com/codewithsadee-org/wealthome',
	},
	{
		imgSrc: 'src/images/project-5.jpg',
		title: 'eCommerce website',
		tags: ['eCommerce', 'Development'],
		projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
	},
	{
		imgSrc: 'src/images/project-6.jpg',
		title: 'vCard Personal portfolio',
		tags: ['Web-design', 'Development'],
		projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
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
