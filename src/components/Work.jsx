/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

import ProjectCard from './ProjectCard';

const works = [
	{
		imgSrc: 'src/images/project-1.jpg',
		title: 'Full stack music app',
		tags: ['API', 'MVC', 'Development'],
		projectLink: 'https://musify-5al0.onrender.com/',
	},
	{
		imgSrc: 'src/images/project-2.jpg',
		title: 'Free stock photo app',
		tags: ['API', 'SPA'],
		projectLink: 'https://pixstock-official.vercel.app/',
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

import PropTypes from 'prop-types';

const Work = () => {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='headline-2'>My portfolio highlights</h2>

				<div className=''>
					{works.map(({ imgSrc, title, tags, projectLink }, key) => (
						<ProjectCard
							key={key}
							imgSrc={imgSrc}
							title={title}
							tags={tags}
							projectLink={projectLink}
							classes='mt-8'
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Work;
