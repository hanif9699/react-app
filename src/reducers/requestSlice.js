import { createSlice } from "@reduxjs/toolkit";
const initialState = { sendingRequest: false, inProgress: [] };
const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        requestStarted: (state, action) => {
            const { requestFrom } = action.payload;
            return Object.assign({},state, {
                sendingRequest: true,
                inProgress: state.inProgress.concat([requestFrom])
            });
        },
        requestFinished: (state, action) => {
            const { requestFrom } = action.payload;
            let stillProgress = state.inProgress.filter(obj => { return obj !== requestFrom });
            return Object.assign({},state, {
                sendingRequest: stillProgress.length > 0,
                inProgress: stillProgress
            })
        }
    }
});
export const {requestStarted, requestFinished}=requestSlice.actions;
export default requestSlice.reducer;