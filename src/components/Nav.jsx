import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/Theme';
import { FaLightbulb } from 'react-icons/fa';

import { useSelector } from 'react-redux';

const Container = styled.div`
	position: relative;
	width: 100%;
	padding: 1rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	@media only screen and (max-width: 700px) {
		flex-direction: column-reverse;
	}
`;
const Text = styled.span`
	font-size: 1.4rem;
	font-weight: bold;
`;
const Button = styled.button`
	min-width: 10rem;
	font-weight: bold;
	font-size: 1.3rem;
	background-color: transparent;
	border: none;
	border-bottom: 2px solid
		${(props) => (props.theme === 'light' ? 'black' : 'white')};
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
	cursor: pointer;
	@media only screen and (max-width: 700px) {
		min-width: auto;
		font-size: 1rem;
	}
	transition: all ease 0.4s;
	&:hover {
		color: grey;
	}
`;
const Icon = styled.span`
	position: absolute;
	top: 1rem;
	right: 0;
`;

const Nav = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme.value);
	return (
		<Container>
			<Icon>
				{theme === 'dark' ? (
					<FaLightbulb style={{ color: 'yellow' }} />
				) : (
					<FaLightbulb style={{ color: 'black' }} />
				)}
			</Icon>
			<Text>Inspiration at your fingertips</Text>
			<Button
				theme={theme}
				onClick={() => {
					dispatch(changeTheme());
				}}
			>
				{theme === 'light'
					? ' I prefer Darkness !'
					: ' I prefer Light !'}
			</Button>
		</Container>
	);
};

export default Nav;
