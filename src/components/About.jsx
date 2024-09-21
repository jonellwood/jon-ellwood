/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

const aboutItems = [
	{
		label: 'Project count',
		number: 6,
	},
	{
		label: 'Years of experience',
		number: 3,
	},
];

const About = () => {
	return (
		<section id='about' className='section'>
			<div className='container'>
				<div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
					<p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
						Welcome! I&apos;m Jon, a professional web developer with a very few
						skills and a low track record of success. Those two reasons are YOU
						want to hire ME. &#129776; Going with low expectations you are
						guaranteed *NO DISAPPOINTMENT* !{' '}
					</p>
					<small>*That is not a guarantee</small>
					<div className='flex flex-wrap items-center gap-4 md:gap-7'>
						{aboutItems.map(({ label, number }, key) => (
							<div key={key}>
								<div className='flex items-center md:mb-2'>
									<span className='text-2xl font-semibold md:text-4xl'>
										{number}
									</span>
									<span className='text-green-400 font-semibold md:text-3xl'>
										+
									</span>
								</div>

								<p className='text-sm text-zinc-400'>{label}</p>
							</div>
						))}
						<img
							src='/src/images/jonellwood.svg'
							alt='Logo'
							width={130}
							// height={30}
							className='ml-auto hover:blur-sm transition-all'
						/>
						{/* <img
							src='/src/images/jd_pixel.png'
							alt='Logo'
							width={130}
							// height={30}
							className='ml-auto md:hidden'
						/> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

// # Skill  # Work My
// portfolio highlights # Review What our customers say # Contact
// Contact me for collaboration Reach out today to discuss your project
// needs and start collaborating on something amazing! # Footer
// Let&apos;s work together today!
