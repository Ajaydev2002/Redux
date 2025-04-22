import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './postRedux';


const store = configureStore({
    reducer: {
        post : postSlice
    }
})

export default store;