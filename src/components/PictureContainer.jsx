import React from 'react';
import styled from 'styled-components';
import picture from '../picture.png';
console.log(picture);

const Container = styled.div`
	overflow: hidden;
	flex: 1;
	width: 100%;
	border-radius: 1rem;
	@media only screen and (max-width: 1100px) {
		position: absolute;
		max-width: 550px;
		right: 1rem;
		height: 90%;
	}
	@media only screen and (max-width: 700px) {
		display: none;
	}
`;
const Picture = styled.img`
	min-height: 100%;
	width: 100%;
	object-fit: cover;
`;

const PictureContainer = () => {
	return (
		<Container>
			<Picture src={picture} alt="woman reading" />
		</Container>
	);
};

export default PictureContainer;
