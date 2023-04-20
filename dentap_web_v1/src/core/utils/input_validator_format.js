export const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(value)) {
        return 'Ingrese un número de teléfono válido.';
    }
    return null;
};

export const validateEmail = (value) => {
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    return regex.test(value);
};