import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    //theme: 'light',
    theme: localStorage.getItem("theme") || 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';

             // Update <body> class dynamically
             document.body.classList.remove('light', 'dark');
             document.body.classList.add(state.theme);
 
             // Save theme preference
             localStorage.setItem("theme", state.theme);

        },
    }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;