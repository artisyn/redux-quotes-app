import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = 'light';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: { value: initialStateValue },
	reducers: {
		changeTheme: (state, action) => {
			if (state.value == 'light') {
				state.value = 'dark';
				return;
			}
			if (state.value == 'dark') {
				state.value = 'light';
				return;
			}
		},
	},
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
