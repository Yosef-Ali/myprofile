import styled from 'styled-components';

export const ImgWrapper = styled.div`
width: 100%;
height: 40%;
overflow: hidden;
` 

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top center;
    transition: all 1s ease-in-out;
	&:hover {
		object-position: bottom center;
	}
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	border-radius: 10px;
	background: #121d32;
	overflow: hidden;
	box-shadow: -1px 3px 52px 16px rgba(0, 0, 0, 0.2);
	text-align: center;
	width: 400px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const TitleContent = styled.div`
	text-align: left;
	padding-top: 50px;
	padding-left: 50px;
	color: #9cc9e3;

	font-size: 2rem;
	z-index: 20;
	width: 100%;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
	width: 50px;
	height: 1.5px;
	margin: 10px 0px 20px 0px;
	border: 0;
	background: #d0bb57;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 3rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;

	background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
	border-radius: 50px;
	transition: 0.5s;
	&:hover {
		//background: #801414;
		background: linear-gradient(270deg, #945dd6 0%, #13adc7 100%);
	}
`;

export const TagList = styled.ul`
	display: flex;
	justify-content: left;
	padding-top: 2rem;
	padding-left: 50px;
	padding-right: 50px;
`;
export const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
`;
