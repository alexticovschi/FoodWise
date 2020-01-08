import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import StoryCard from '../../StoryCard/StoryCard';
import './Stories.scss';

const getStoryImages = graphql`
	query storyImages {
		story1: file(relativePath: { eq: "events/corporate/stories/story1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		story2: file(relativePath: { eq: "events/corporate/stories/story2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		story3: file(relativePath: { eq: "events/corporate/stories/story3.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Stories = () => {
	const { story1, story2, story3 } = useStaticQuery(getStoryImages);

	return (
		<section className='event-stories'>
			<h1 className='event-stories__title'>Experience a Story</h1>
			<div className='event-stories__cards'>
				<StoryCard
					url='/events/corporate'
					imgSrc={story1}
					name='Uncontainable Fun'
					text='Creativity was key at a super-organized and festive celebration at The Container Store.'
				/>
				<StoryCard
					url='/events/corporate'
					imgSrc={story2}
					name='Deliciously Healthy'
					text='The best way to welcome a new health center? Design a menu with good-for-you cuisine.'
				/>
				<StoryCard
					url='/events/corporate'
					imgSrc={story3}
					name='A Business Birthday'
					text='After 50 years of business, employees deserve a big ol’ party and a good ol’ time.'
				/>
			</div>
		</section>
	);
};

export default Stories;
