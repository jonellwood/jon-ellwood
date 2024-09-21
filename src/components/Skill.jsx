/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

import SkillCard from './SkillCard';

const skillItem = [
	{
		imgSrc: 'github.svg',
		label: 'GitHub',
		desc: 'Code Repository',
	},
	{
		imgSrc: 'css3.svg',
		label: 'CSS',
		desc: 'User Interface',
	},
	{
		imgSrc: 'javascript.svg',
		label: 'JavaScript',
		desc: 'Interaction',
	},
	{
		imgSrc: 'php.svg',
		label: 'PHP',
		desc: 'Server Side',
	},
	{
		imgSrc: 'nodejs.svg',
		label: 'NodeJS',
		desc: 'Web Server',
	},
	{
		imgSrc: 'expressjs.svg',
		label: 'ExpressJS',
		desc: 'Node Framework',
	},
	{
		imgSrc: 'mysql2.svg',
		label: 'MySQL',
		desc: 'Database',
	},
	{
		imgSrc: 'mongodb.svg',
		label: 'MongoDB',
		desc: 'Database',
	},
	{
		imgSrc: 'sqlite.svg',
		label: 'SQLite',
		desc: 'Database (Local)',
	},
	{
		imgSrc: 'react.svg',
		label: 'React',
		desc: 'Framework',
	},
	{
		imgSrc: 'svelte.svg',
		label: 'Svelte',
		desc: 'Framework',
	},
	{
		imgSrc: 'tailwindcss.svg',
		label: 'TailwindCSS',
		desc: 'User Interface',
	},
	{
		imgSrc: 'aws.svg',
		label: 'Amazon Web Services',
		desc: 'Cloud Suite',
	},
];

const Skill = () => {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='headline-2 reveal-up'>An essential tool I am.</h2>
				<p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
					I use powerful tools like ChatGPT, and Google to do 99% of the work. I
					say, let the technology create exceptional, high-performing websites &
					applications; whilst I sit back and take the credit
				</p>

				<div className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
					{skillItem.map(({ imgSrc, label, desc }, key) => (
						<SkillCard
							key={key}
							imgSrc={imgSrc}
							label={label}
							desc={desc}
							classes='reveal-up'
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skill;
