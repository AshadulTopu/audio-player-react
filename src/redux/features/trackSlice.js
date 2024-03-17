import { createSlice } from '@reduxjs/toolkit'

export const trackSlice = createSlice({
    name: 'track',
    initialState: {
        url: '',
        isPlaying: false
    },
    reducers: {
        setTrack: (state, action) => {
            state.url = action.payload.url
            state.isPlaying = action.payload.isPlaying
        }
    }
})

export const { setTrack } = trackSlice.actions

export default trackSlice.reducer