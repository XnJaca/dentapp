const headers_usuarios = [
    { field: "id", header: "Id" },
    { field: "cedula", header: "Cedula" },
    { field: "nombre", header: "Nombre" },
    { field: "apellido_1", header: "Apellidos" },
    { field: "email", header: "Email" },
    { field: "telefono", header: "Telefono" },
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

const headers_tipos_tratamientos = [
    { field: "id", header: "Id" },
    { field: "nombre", header: "Nombre" },
    { field: "descripcion", header: "Descripcion" },
    { field: "precio", header: "Precio" },
];

const headers_tratamientos = [
    { field: "id", header: "Id" },
    { field: "medico_id", header: "Medico" },
    { field: "tipo_id", header: "Tipo tratamiento" },
    { field: "detalle", header: "Detalle" },
    { field: "total_medicamento", header: "Total Medicamento" },
];  

const headers_pacientes = [
    { field: "id", header: "Id" },
    { field: "cedula", header: "Cedula" },
    { field: "nombre", header: "Nombre" },
    { field: "apellido_1", header: "Apellidos" },
    { field: "email", header: "Email" },
    { field: "telefono", header: "Telefono" },
    // { field: "estado", header: "Estado" },
];

const headers_citas = [
    { field: "id", header: "Id" },
    { field: "medico_id", header: "Medico" },
    { field: "paciente_id", header: "Paciente" },
    { field: "fecha", header: "Fecha" },
    { field: "hora", header: "Hora" },
    { field: "estado", header: "Estado" },
]


export { 
    headers_usuarios, headers_enfermedades, 
    headers_alergia, headers_medicamentos, 
    headers_horarios, headers_tipos_tratamientos,
    headers_tratamientos, headers_pacientes,
    headers_citas
};