import './App.css';
import { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changeTheme } from './features/Theme';
import { changeQuotes } from './features/Quotes';
import { useSelector } from 'react-redux';
import Quote from './components/Quote';
import QuotesContainer from './components/QuotesContainer';
import Nav from './components/Nav';
import PictureContainer from './components/PictureContainer';

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: ${(props) =>
		props.theme === 'light' ? 'white' : 'black'};
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
`;
const Wrapper = styled.div`
	position: relative;
	padding: 1rem;
	display: flex;
	width: 100%;
	flex: 3;
	@media only screen and (max-width: 1100px) {
		padding: 3rem;
	}
`;

function App() {
	const theme = useSelector((state) => state.theme.value);
	return (
		<Container className="App" theme={theme}>
			<Wrapper>
				<QuotesContainer />
				<PictureContainer />
			</Wrapper>
		</Container>
	);
}

export default App;
