const headers_usuarios = [
    { field: "cedula", header: "Cedula" },
    { field: "nombre", header: "Nombre" },
    { field: "apellido_1", header: "Apellidos" },
    { field: "email", header: "Email" },
    { field: "telefono", header: "Telefono" },
    { field: "estado", header: "Estado" },
];

const headers_enfermedades = [
    { field: "id", header: "Id" },
    { field: "nombre", header: "Nombre" },
    { field: "descripcion", header: "Descripcion" },
];

const headers_alergia = [
    { field: "id", header: "Id" },
    { field: "nombre", header: "Nombre" },
    { field: "descripcion", header: "Descripcion" },
];

const headers_medicamentos = [
    { field: "id", header: "Id" },
    { field: "nombre", header: "Nombre" },
    { field: "descripcion", header: "Descripcion" },
    { field: "precio", header: "Precio" },
];

const headers_horarios = [
    {field: "id", header: "Id"},
    { field: "dia", header: "Dia" },
    { field: "hora_inicio", header: "Hora Inicio" },
    { field: "hora_final", header: "Hora Final" },

]

export { headers_usuarios, headers_enfermedades, headers_alergia, headers_medicamentos, headers_horarios};