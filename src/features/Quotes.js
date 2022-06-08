import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = null;

export const quotesSlice = createSlice({
	name: 'quotes',
	initialState: { value: initialStateValue },
	reducers: {
		changeQuotes: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeQuotes } = quotesSlice.actions;
export default quotesSlice.reducer;
