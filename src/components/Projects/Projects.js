import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
	ImgWrapper,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map((p, i) => {
				return (
					<BlogCard key={i}>
						<ImgWrapper>
						<Img src={p.image} />
						</ImgWrapper>
						<TitleContent>
							<HeaderThree title>{p.title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo className='card-info'>{p.description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{p.tags.map((t, i) => {
									return (
										<Tag key={i} style={{ marginRight: '16px' }}>
											{t}
										</Tag>
									);
								})}
							</TagList>
						</div>
						<Hr style={{ width: '100%', background: 'rgb(33 41 58)' }} />
						<UtilityList>
							<ExternalLinks href={p.source}>Code</ExternalLinks>
							<ExternalLinks href={p.visit}>Preview</ExternalLinks>
						</UtilityList>
					</BlogCard>
				);
			})}
		</GridContainer>
	</Section>
);

export default Projects;
