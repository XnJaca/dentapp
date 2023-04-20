export const UserService = {
    getUsersData() {
        return [
            {
                "id": 1,
                "cedula": 1340000120210,
                "nombre": "Jonathan",
                "nombre_emer": "Mi mama",
                "apellido_1": "Cruz",
                "apellido_2": "Ayala",
                "email": "xnjaca@gmail.com",
                "pass": "$2y$10$ukxcY91QkDe2yqEagQh3CuHykD/ku4R29ZW6lJvP/OsmtNlPR/IyG",
                "fecha_nacimiento": "2001-08-09 00:00:00",
                "direccion": "San Ramon, Alajuela, Costa Rica.",
                "telefono": 85082921,
                "telefono_emer": 85082921,
                "genero_id": 1,
                "estado": 1,
            },
        
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getUsers() {
        return Promise.resolve(this.getUsersData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

