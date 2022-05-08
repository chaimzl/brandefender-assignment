import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { favoritesSlice } from './slices/favorites.slice';


export const store = configureStore({
	reducer: combineReducers({
		 favorites: favoritesSlice.reducer
	})
});