import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: 193, text: 'Badges From Teamtreehouse.com' },
	{ number: 50, text: 'Certification from Linkedin learning' },
	{ number: 140, text: 'Github contributions in the last year' },
	{ number: 2, text: 'Projects under construction' },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
);

export default Acomplishments;
