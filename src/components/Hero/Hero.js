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
					I am <span style={{ fontWight: 'bold', color: '#fff' }}> Yosef Ali </span>
					Over 10+years IT and Graphic Design experience which includes 3+ years of
					Extensive ReactJsDeveloper and 2years of Experience as UI/UX developer and
					FullStack Developer.
				</SectionText>
				<Button onClick={props.handleClick}>Learn More</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
