import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserType {
    login: string;
    password: string;
}

const initialState: UserType[] = [];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        cadastrar: (state, action: PayloadAction<UserType>) => {
            const userExist = state.find((user) => user.login === action.payload.login)
            if(userExist) {
                return state
            }

            state.push(action.payload)
        }
    }
})

export const {cadastrar} = userSlice.actions
export default userSlice.reducer