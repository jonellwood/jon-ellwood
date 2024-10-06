/**
 * @copyright Copyright (c) 2024 Jon Ellwood (jonellwood.dev)
 * @author Jon Ellwood
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from './ReviewCard.jsx';
const reviews = [
	{
		content:
			'Amazing mobile app development! Intuitive interface and lightning-fast performance. Highly impressed.',
		name: 'Olivia Martinez',
		imgSrc: 'people-1.jpg',
		company: 'AppAlchemy',
	},
	{
		content:
			'Incredible UI/UX design! Visually stunning and easy to navigate. Exceeded expectations.',
		name: 'Ella Crawford',
		imgSrc: 'people-2.jpg',
		company: 'PixelCraft',
	},
	{
		content:
			'Exceptional e-commerce solution! Optimized for conversions and seamless checkout. Highly recommend.',
		name: 'Liam Carter',
		imgSrc: 'people-3.jpg',
		company: 'CommerceEngine',
	},
	{
		content:
			'Brilliant SEO services! Increased organic traffic and improved search rankings. Fantastic results.',
		name: 'Noah Thompson',
		imgSrc: 'people-4.jpg',
		company: 'SEOPro',
	},
	{
		content:
			'Top-notch digital marketing campaign! Effective strategy and measurable results. Great developer to work with.',
		name: 'David Kornahrens',
		imgSrc: 'people-5.jpg',
		company: 'Sitekings, LLC',
	},
	{
		content:
			'Outstanding cloud infrastructure implementation! Scalable, reliable, and cost-effective. Highly satisfied.',
		name: 'Jonathan',
		imgSrc: 'people-6.jpg',
		company: 'CloudExperts',
	},
];

const Review = () => {
	useGSAP(() => {
		gsap.to('.scrub-slide', {
			scrollTrigger: {
				trigger: '.scrub-slide',
				start: '-200% 80%',
				end: '400% 80%',
				scrub: true,
			},
			x: '-1000',
		});
	});

	return (
		<section className='section overflow-hidden' id='reviews'>
			<div className='container'>
				<h2 className='headline-2 mb-8 reveal-up'>Fake Client Reviews</h2>

				<p className='text-sm text-gray-500 py-2 my-2 '>
					Below are some fake reviews from made up clients. I hope to get some
					friends someday though
				</p>

				<div className='scrub-slide flex items-stretch gap-3 w-fit'>
					{reviews.map(({ content, name, imgSrc, company }, key) => (
						<ReviewCard
							key={key}
							content={content}
							name={name}
							imgSrc={imgSrc}
							company={company}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Review;
