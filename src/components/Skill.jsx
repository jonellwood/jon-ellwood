/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

import SkillCard from './SkillCard';

const skillItem = [
	{
		imgSrc: 'src/images/figma.svg',
		label: 'Figma',
		desc: 'Design tool',
	},
	{
		imgSrc: 'src/images/css3.svg',
		label: 'CSS',
		desc: 'User Interface',
	},
	{
		imgSrc: 'src/images/javascript.svg',
		label: 'JavaScript',
		desc: 'Interaction',
	},
	{
		imgSrc: 'src/images/nodejs.svg',
		label: 'NodeJS',
		desc: 'Web Server',
	},
	{
		imgSrc: 'src/images/expressjs.svg',
		label: 'ExpressJS',
		desc: 'Node Framework',
	},
	{
		imgSrc: 'src/images/mongodb.svg',
		label: 'MongoDB',
		desc: 'Database',
	},
	{
		imgSrc: 'src/images/react.svg',
		label: 'React',
		desc: 'Framework',
	},
	{
		imgSrc: 'src/images/tailwindcss.svg',
		label: 'TailwindCSS',
		desc: 'User Interface',
	},
];

const Skill = () => {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='headline-2'>An essential tool I am.</h2>
				<p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
					I use powerful tools like ChatGPT, and Google to do 99% of the work. I
					say, let the technology create exceptional, high-performing websites &
					applications; whilst I sit back and take the credit
				</p>

				<div className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
					{skillItem.map(({ imgSrc, label, desc }, key) => (
						<SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Skill;
