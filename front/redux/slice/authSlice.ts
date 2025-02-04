import { AUTH_STATUS } from "@/constants/enums/AuthStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserInfo {
    userEmail?: string;
    userLastName?: string;
    userName?: string;
}

export interface AuthState {
    status: AUTH_STATUS;
    user: UserInfo;
    token?: string;
    errorMessage: string | undefined;
}

const initialState: AuthState = {
    status: AUTH_STATUS.checking,
    user: {},
    token: undefined,
    errorMessage: undefined,
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        onChecking: (state) => {
            state.status = AUTH_STATUS.checking;
            state.user = {};
            state.token = undefined;
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }: { payload: {token?:string, user:UserInfo} }) => {
            state.status = AUTH_STATUS.authenticated;
            state.user = payload.user;
            state.token = payload.token;
            state.errorMessage = undefined;
        },
        onBadLogin: (state, action) => {
            (state.status = AUTH_STATUS.not_authenticated), (state.user = {}), (state.token = undefined);
            state.errorMessage = action.payload;
        },
        clearErrormessage: (state) => {
            state.errorMessage = undefined;
        },
        onLogOut: (state) => {
            state.status = AUTH_STATUS.not_authenticated;
            state.user = {};
            state.token = undefined;
            state.errorMessage = undefined;
        },
    },
});

export const { onChecking, onLogin, onBadLogin, clearErrormessage, onLogOut } =
    authSlice.actions;