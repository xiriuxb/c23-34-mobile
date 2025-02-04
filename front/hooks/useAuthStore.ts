import { useDispatch, useSelector } from "react-redux";
import {
    clearErrormessage,
    onBadLogin,
    onBadRegister,
    onChecking,
    onLogin,
    onLogOut
} from "../redux/slice/authSlice";
import { RootState } from "@/redux/store";
import { apiLogin, apiRegister, LoginForm, RegDataVals } from "@/api/auth.service";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_STATUS } from "@/constants/enums/AuthStatus";

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(
        (state: RootState) => state.authSlice
    );
    const dispatch = useDispatch();

    const startLogin = async (loginData: LoginForm) => {
        dispatch(onChecking());
        dispatch(clearErrormessage());
        const { data, ok } = await apiLogin(loginData);
        if (ok) {
            try {
                await AsyncStorage.setItem('token', data.token);
                await AsyncStorage.setItem("user", JSON.stringify(data.user));
                await AsyncStorage.setItem("token-init-date", new Date().getTime().toString());
            } catch (e) {
                console.log(e)
            }
            dispatch(onLogin({ token: data.token, user: data.user }));
            router.replace("/dashboard/home");
            return;
        }
        dispatch(onBadLogin({ on: "auth", message: data.message ? data.message : "Server Error" }));
    }

    const startRegister = async (registerData: RegDataVals) => {
        dispatch(onChecking());
        const { data, ok } = await apiRegister(registerData);
        if (ok) {
            dispatch(onLogOut())
            router.replace("/auth/confirm-mail");
            return;
        }
        dispatch(onBadRegister({ on: "reg", message: data.message ? data.message : "Server Error" }));
    }

    const checkAuthToken = async () => {
        if (status === AUTH_STATUS.authenticated) {
            return;
        }
        try {
            const token = await AsyncStorage.getItem("token");
            const user = await AsyncStorage.getItem("user")
            if (!token) {
                dispatch(onBadLogin({}));
                router.replace("/auth/login");
                return;
            }
            dispatch(onLogin({ token: token, user: token && user ? JSON.parse(user) : {} }));
            router.replace("/dashboard/home")
        } catch (error) {
            console.log(error);
            dispatch(onBadLogin({ on: "auth", message: "Error Checking auth" }));
            router.push("/auth/login")
        }
    };

    const startLogout = async () => {
        await AsyncStorage.clear();
        dispatch(onLogOut());
        router.replace('/')
    };

    return {
        // All properties
        status,
        errorMessage,
        user,
        // All methods
        startLogin,
        checkAuthToken,
        startLogout,
        startRegister
    };
};