import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAll from "../services/images";

const initialState = {
    images: [],
    status: 'idle',
    error: null
}

export const getImages = createAsyncThunk('images/getImages', async () => {
   const res = await getAll()
   return res
})

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(getImages.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(getImages.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.images = action.payload
        })
        .addCase(getImages.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const getAllImages = (state) => state.images.images;
export const getImagesStatus = (state) => state.images.status;
export const getImagesError = (state) => state.images.error;

export default imagesSlice.reducer;