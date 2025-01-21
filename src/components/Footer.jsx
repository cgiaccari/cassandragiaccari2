import React, { useContext } from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";

import { AboutContext } from "../contexts/AboutContext";
import { ModalContext } from "../contexts/ModalContext";

const FooterContainer = styled.div`
	position: fixed;
	z-index: 100;
	width: 100%;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.4) 100%
	);

	height: 110px;
`;

const FooterText = styled.div`
	color: white;
	padding-top: 20px;
	text-align: center;
	white-space: nowrap;
	font-size: 12px;
`;

const JobTitleText = styled.div`
	font-weight: 400;
	line-height: 33.6px;
	text-align: left;
	text-underline-position: from-font;
	text-decoration-skip-ink: none;
	white-space: nowrap;
	color: rgba(255, 255, 255, 1);
`;

const LeftContainer = styled.div`
	margin-left: 5%;
`;
const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 5%;
	gap: 20px;
	align-items: center;
	overflow-x: auto;

	@media (max-width: 600px) {
		gap: 10px;
	}
`;
const SocialMediaContainer = styled.div`
	font-size: 16px;
	margin-top: 5%;
`;

const SocialMediaLink = styled.a`
	color: inherit;
	text-decoration: none;
`;

const renderSocialMedia = (socialMedia) => {
	return (
		<SocialMediaContainer key={socialMedia?.name}>
			<SocialMediaLink
				href={socialMedia?.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{socialMedia?.name}
			</SocialMediaLink>
		</SocialMediaContainer>
	);
};

const JobTitleComponent = {
	block: {
		normal: ({ children }) => (
			<p style={{ margin: 0, padding: 0 }}>{children}</p>
		),
	},
};

const Footer = () => {
	const { footerData } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const { title, copyright, socialMediaLinks } = footerData;

	console.log(title);
	return (
		<FooterContainer>
			<LeftContainer>
				<JobTitleText>
					<PortableText
						value={title[language]}
						components={JobTitleComponent}
					/>
				</JobTitleText>
				<FooterText>{copyright[language]}</FooterText>
			</LeftContainer>
			<RightContainer>
				{socialMediaLinks[language].map((ele) => {
					return renderSocialMedia(ele);
				})}
			</RightContainer>
		</FooterContainer>
	);
};

export default Footer;
