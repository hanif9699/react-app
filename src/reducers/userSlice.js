import { createSlice } from '@reduxjs/toolkit'
const initialState={userId:undefined,empName:undefined,email:undefined,isAuthenticated:false}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state,action){
            const {userId,empName,email}=action.payload;
            return Object.assign({},state,{
                isAuthenticated:true,
                userId,
                email,
                empName
            });
        },
        logoutUser(state,action){
            return Object.assign({},state,{
                isAuthenticated:false,
                userId:undefined,
                email:undefined,
                empName:undefined
            })
        }
    }
});
export const {setUser}=userSlice.actions;
export default userSlice.reducer