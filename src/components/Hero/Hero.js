import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>
					My name is{' '}
					<span style={{ fontWight: 'bold', color: '#fff' }}> Yosef Ali. </span>I
					have over 10+years IT and Graphic Design experience which includes 3+ years
					of extensive ReactJs Developer and 2years of experience as UI/UX developer
					and FullStack developer.
				</SectionText>
				<Button onClick={props.handleClick}>Learn More</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
