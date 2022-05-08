import { createSlice } from '@reduxjs/toolkit';


const initialFavorites: string[] = [];
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data: initialFavorites
    },
    reducers: {
        addFavorit: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        deleteFavorit: (state, action) => {
            var deletedIndex = state.data.indexOf(action.payload);
            state.data.splice(deletedIndex);
        }
    }
})