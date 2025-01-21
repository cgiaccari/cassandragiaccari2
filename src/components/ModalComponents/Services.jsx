import React, { useContext } from "react";
import styled from "styled-components";

import { AboutContext } from "../../contexts/AboutContext";
import { ModalContext } from "../../contexts/ModalContext";

const ServicesContainer = styled.div`
	min-width: 20%;
	max-width: 25%;
`;
const ServicesHeader = styled.div`
	font-weight: 600;
	margin-bottom: 10%;

	@media (max-width: 1024px) {
		margin-top: 40%;
	}
`;
const IndividualSericeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const Service = styled.span`
	padding-bottom: 3%;
`;

const Services = () => {
	const { services } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const servicesList = services?.services[language];

	return (
		<ServicesContainer>
			<ServicesHeader>{services?.header[language]}</ServicesHeader>
			<IndividualSericeContainer>
				{servicesList?.map((ele, index) => (
					<Service key={`service_${index}`}>{ele}</Service>
				))}
			</IndividualSericeContainer>
		</ServicesContainer>
	);
};

export default Services;
