import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;

	height: 70%;
	width: 70%;
	@media only screen and (max-width: 700px) {
		height: 80%;
		width: 100%;
		padding: 0.1rem;
	}
`;
const Author = styled.h3`
	font-size: 2rem;
	font-weight: 500;
	letter-spacing: 0.08;
`;
const Text = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	letter-spacing: 0.08;
	@media only screen and (max-width: 700px) {
		font-size: 1.2rem;
	}
`;
const IconTop = styled.span`
	font-size: 2rem;
	position: absolute;
	top: -0.5rem;
	left: -1.5rem;
`;
const IconBottom = styled.span`
	font-size: 2rem;
	position: absolute;
	bottom: -0.5rem;
	right: -1.5rem;
`;
const Quote = ({ props }) => {
	return (
		<Container>
			<IconTop>
				<FaQuoteLeft />
			</IconTop>
			<Author>{props.author}</Author>
			<Text>{props.text}</Text>
			<IconBottom>
				<FaQuoteRight />
			</IconBottom>
		</Container>
	);
};

export default Quote;
