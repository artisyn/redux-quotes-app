import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/Theme';
import { changeQuotes } from '../features/Quotes';
import { useSelector } from 'react-redux';
import Quote from '../components/Quote';
import Nav from './Nav';

const Container = styled.div`
	padding: 1rem;
	flex: 1;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	@media only screen and (max-width: 1100px) {
		z-index: 10;
		position: absolute;
		width: 550px;
		left: 0;
		height: 90%;
	}
	@media only screen and (max-width: 700px) {
		position: static;
		width: fit-content;
	}
`;
const ButtonContainer = styled.div`
	width: 100%;
`;
const Button = styled.button`
	border: none;
	padding: 1rem 2rem;
	border-radius: 1rem;
	background-color: #6ea257;
	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 0.08rem;
	cursor: pointer;
	color: white;
	transition: all ease 0.4s;

	&:hover {
		background-color: #6da2577a;
	}
`;

const QuotesContainer = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme.value);
	const quotes = useSelector((state) => state.quotes.value);
	const createRandomNum = (max = 0) => {
		return Math.floor(Math.random() * max);
	};

	const [random, setRandom] = useState(createRandomNum(quotes?.length));
	const handleClick = () => {
		setRandom(createRandomNum(quotes.length));
	};

	useEffect(() => {
		(async () => {
			try {
				await axios
					.get('https://type.fit/api/quotes')
					.then((response) => {
						dispatch(changeQuotes(response.data));
					})
					.finally((response) => console.log(quotes));
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	return (
		<Container>
			<Nav />
			{quotes ? <Quote props={quotes[random]} /> : ''}
			<ButtonContainer>
				<Button onClick={handleClick}>Get a quote</Button>{' '}
			</ButtonContainer>
		</Container>
	);
};

export default QuotesContainer;
