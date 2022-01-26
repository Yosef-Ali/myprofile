import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:+251944113998'>+251-944-113-998</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:yosethio@yahoo.com'>yosethio@yahoo.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>“Things aren’t always #000000 and #FFFFFF”</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/Yosef-Ali'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://www.linkedin.com/in/yosef-ali-07723516'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons href='#'>
						<AiFillInstagram size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
