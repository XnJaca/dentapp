import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        // si no existe el usuario en localstorage entonces logout
        // Revisa si existe un usuario en sesión local
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            // Si existe, inicia sesión automáticamente
            const user = JSON.parse(storedUser);
            dispatch(login(user));
        } else {
            dispatch(logout());
        }
    }, [dispatch])

    return {
        status
    }
}
