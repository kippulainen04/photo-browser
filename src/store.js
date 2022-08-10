import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from './reducers/imagesSlice';


export const store = configureStore ({
    reducer: {
      images: imagesReducer
    }
})