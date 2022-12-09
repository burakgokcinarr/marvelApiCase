import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './FetchCharacterSlice';
import comicsSlice from './FetchComicsSlice';

export const store = configureStore({
    reducer: {
        characters: characterSlice,
        comics: comicsSlice
    },
})