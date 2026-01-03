import { create } from 'zustand'
import { createUserWithEmailAndPassword, EmailAuthProvider, onAuthStateChanged, reauthenticateWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/firebase.js'
import Cookies from "js-cookie";
import { toast } from 'react-toastify';


export const useFirebaseAuthStore = create((set) => ({
    isLoggedIn: false,
    user: null,
    loading: true,
    error: null,
    message: null,

    initialLoginCheck: () => {
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    set({ isLoggedIn: true, user: user })
                    Cookies.set("auth_data", user.uid, {
                        expires: 7,
                        secure: true,
                        sameSite: "strict",
                    });
                }
            })
            toast.success("Authentication state checked successfully!")
        } catch (error) {
            toast.error(error.message)
        } finally {
            set({ loading: false })
        }
    },
    registerByEmail: async (email, password) => {
        try {
            const userRegister = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userRegister)
            set({ isLoggedIn: true, user: userRegister.user })
            Cookies.set("auth_data", userRegister.user.uid, {
                expires: 7,
                secure: true,
                sameSite: "strict",
            });
            toast.success("Registered successfully!")
            return true
        } catch (error) {
            toast.error(error.message)
            return false
        }
    },
    loginByEmail: async (email, password) => {
        try {
            const userLogin = await signInWithEmailAndPassword(auth, email, password)
            console.log(userLogin)
            set({ isLoggedIn: true, user: userLogin.user })
            Cookies.set("auth_data", userLogin.user.uid, {
                expires: 7,
                secure: true,
                sameSite: "strict",
            });
            toast.success("Logged in successfully!")
            return true
        } catch (error) {
            toast.error(error.message)
            return false
        }
    },
    logout: async () => {
        try {
            await signOut(auth)
            set({ isLoggedIn: false, user: null })
            Cookies.remove("auth_data")
            toast.success("Logged out successfully!")
        } catch (error) {
            toast.error(error.message)

        }
    },
    loginByGoogle: async () => {
        try {
            const userLogin = await signInWithPopup(auth, googleProvider)
            console.log(userLogin)
            set({ isLoggedIn: true, user: userLogin.user })
            Cookies.set("auth_data", userLogin.user.uid, {
                expires: 7,
                secure: true,
                sameSite: "strict",
            });
            toast.success("Logged in with Google successfully!")
            return true

        } catch (error) {
            toast.error(error.message)
            return false
        }
    },
    forgotPasswordByLink: async (email) => {
        set({ loading: true, error: null, message: null });
        try {
            await sendPasswordResetEmail(auth, email);
            set({
                loading: false,
                message: "Password reset link sent to your email",
            });
            toast.success("Password reset link sent to your email")
        } catch (error) {
            set({
                loading: false,
                error: error.message,
            });
            console.log(error)
        }
    },
    changePassword: async (currentPassword, newPassword) => {
        set({ loading: true, error: null, message: null });
        try {
            const user = auth.currentUser;
            if (!user) throw new Error("Not authenticated");

            // 🔁 Re-authentication (Firebase requirement)
            const credential = EmailAuthProvider.credential(
                user.email,
                currentPassword
            );
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);
            set({
                loading: false,
                message: "Password updated successfully",
            });
            toast.success("Password updated successfully")
        } catch (error) {
            set({
                loading: false,
                error: error.message || "Password update failed",
            });
            toast.error(error.message)
        }
    }
}))