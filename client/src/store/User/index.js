import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            console.log('Current state:', state )
            console.log('Action:', action)
            state.currentUser = action.payload;
            state.isLoggedIn = true;
            console.log('New state:', state)
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export const userSliceName = userSlice.name;
export default userSlice.reducer;