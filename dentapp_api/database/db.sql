USE dentapp_db;

-- Table usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT NOT NULL,
    cedula INT NOT NULL,
    nombre varchar(200) NOT NULL,
    nombre_emer varchar(200) NOT NULL,
    apellido_1 varchar(200) NOT NULL,
    apellido_2 varchar(200) NOT NULL,
    email VARCHAR(200) NULL,
    pass VARCHAR(200) NULL,
    fecha_nacimiento datetime NOT NULL,
    direccion varchar(200) NOT NULL,
    telefono int NOT NULL,
    telefono_emer int NOT NULL,
    genero_id int NOT NULL,
    tipo_usuario_id INT NULL,
    PRIMARY KEY (id),
    -- Fk tipo_usuario_id
    CONSTRAINT fk_tipo_usuario_id FOREIGN KEY (tipo_usuario_id) REFERENCES tipo_usuario(id),
    -- Fk genero_id
    CONSTRAINT fk_genero_id FOREIGN KEY (genero_id) REFERENCES generos(id)
);

-- Table pacientes
CREATE TABLE pacientes (
    id int NOT NULL,
    -- REFERENCES TABLE USUARIO ID
    tipo_sangre_id int NOT NULL,
    cita_id int NOT NULL,
    alergia_paciente_id int NOT NULL,
    enfermedad_paciente_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_usuario FOREIGN KEY (id) REFERENCES usuarios(id),
    -- Fk tipo_sangre_id
    CONSTRAINT fk_tipo_sangre_id FOREIGN KEY (tipo_sangre_id) REFERENCES tipo_sangre(id),
    -- Fk cita_id
    CONSTRAINT fk_cita_id FOREIGN KEY (cita_id) REFERENCES citas(id),
    -- Fk alergia_paciente_id
    CONSTRAINT fk_alergia_paciente_id FOREIGN KEY (alergia_paciente_id) REFERENCES alergia_paciente(id),
    -- Fk enfermedad_paciente_id
    CONSTRAINT fk_enfermedad_paciente_id FOREIGN KEY (enfermedad_paciente_id) REFERENCES enfermedad_paciente(id)
);

-- Table medicos
CREATE TABLE medicos (
    id INT NOT NULL,
    -- REFERENCES TABLE USUARIO ID
    especialidad_id INT NOT NULL,
    precio_consulta NOT NULL,
    horario_id INT NOT NULL,
    genero_id INT NOT NULL,
    PRIMARY KEY (id),
    -- Fk usuario
    CONSTRAINT fk_usuario FOREIGN KEY (id) REFERENCES usuarios(id),
    -- Fk especialidad_id
    CONSTRAINT fk_especialidad_id FOREIGN KEY (especialidad_id) REFERENCES especialidades(id),
    -- Fk horario_id
    CONSTRAINT fk_horario_id FOREIGN KEY (horario_id) REFERENCES horarios(id),
    -- Fk genero_id
    CONSTRAINT fk_genero_id FOREIGN KEY (genero_id) REFERENCES generos(id)
);

-- Table generos
CREATE TABLE generos (
    id INT NOT NULL,
    descripcion VARCHAR(200) NULL,
    PRIMARY KEY (id)
);

-- Table alergias
CREATE TABLE alergias (
    id int NOT NULL,
    nombre varchar(200) NOT NULL,
    descripcion varchar(200) NOT NULL,
    PRIMARY KEY (id)
);

-- Table enfermedades
CREATE TABLE enfermedades (
    id int NOT NULL,
    nombre varchar(200) NOT NULL,
    descripcion varchar(200) NOT NULL,
    PRIMARY KEY (id)
);

-- Table tipo_sangre
CREATE TABLE tipo_sangre (
    id int NOT NULL,
    tipo varchar(200) NOT NULL,
    PRIMARY KEY (id)
);

-- Table tipo_usuario
CREATE TABLE tipo_usuario (
    id int NOT NULL,
    tipo varchar(200) NOT NULL,
    PRIMARY KEY (id)
);

-- Table especialidades
CREATE TABLE especialidades (
    id int NOT NULL,
    nombre varchar(200) NOT NULL,
    descripcion varchar(200) NOT NULL,
    PRIMARY KEY (id)
);

-- Table citas
CREATE TABLE citas (
    id int NOT NULL,
    paciente_id int NOT NULL,
    fecha datetime NOT NULL,
    hora datetime NOT NULL,
    paciente_id int NOT NULL,
    medico_id int NOT NULL,
    PRIMARY KEY (id) -- Fk paciente_id
    CONSTRAINT fk_paciente_id FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    -- Fk medico_id
    CONSTRAINT fk_medico_id FOREIGN KEY (medico_id) REFERENCES medicos(id)
);

-- Table alergia_paciente
CREATE TABLE alergia_paciente (
    id int NOT NULL,
    alergia_id int DEFAULT NULL,
    paciente_id int DEFAULT NULL,
    PRIMARY KEY (id) -- Fk alergia_id
    CONSTRAINT fk_alergia_id FOREIGN KEY (alergia_id) REFERENCES alergias(id),
    -- Fk paciente_id
    CONSTRAINT fk_paciente_id FOREIGN KEY (paciente_id) REFERENCES pacientes(id)
);

-- Table enfermedad_paciente
CREATE TABLE enfermedad_paciente (
    id int NOT NULL,
    enfermedad_id int DEFAULT NULL,
    paciente_id int DEFAULT NULL,
    PRIMARY KEY (id) -- Fk enfermedad_id
    CONSTRAINT fk_enfermedad_id FOREIGN KEY (enfermedad_id) REFERENCES enfermedades(id),
    -- Fk paciente_id
    CONSTRAINT fk_paciente_id FOREIGN KEY (paciente_id) REFERENCES pacientes(id)
);

-- Table horarios
CREATE TABLE horarios (
    id int NOT NULL,
    hora_inicio datetime DEFAULT NULL,
    hora_fin datetime DEFAULT NULL,
    PRIMARY KEY (id)
);

-- -- USUARIOS
-- CREATE TABLE usuario (
--     id INT AUTO_INCREMENT NOT NULL,
--     cedula INT NOT NULL,
--     nombre varchar(200) DEFAULT NULL,
--     nombre_emer varchar(200) DEFAULT NULL,
--     apellido_1 varchar(200) DEFAULT NULL,
--     apellido_2 varchar(200) DEFAULT NULL,
--     correo VARCHAR(200) NULL,
--     contrasenna VARCHAR(200) NULL,
--     fecha_nacimiento datetime DEFAULT NULL,
--     residencia varchar(200) DEFAULT NULL,
--     telefono int DEFAULT NULL,
--     telefono_emer int DEFAULT NULL,
--     genero_id int DEFAULT NULL,
--     tipo_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE paciente (
--     id int NOT NULL, -- REFERENCES TABLE USUARIO ID
--     tipo_sangre_id int DEFAULT NULL,
--     cita_id int DEFAULT NULL,
--     alergia_paciente_id int DEFAULT NULL,
--     enfermedad_paciente_id int DEFAULT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE medico (
--     id INT NOT NULL, -- REFERENCES TABLE USUARIO ID
--     especialidad_id INT NULL,
--     precio_consulta FLOAT NULL,
--     horario_id INT NULL,
--     genero_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE genero (
--     id INT NOT NULL,
--     descripcion VARCHAR(200) NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE alergia (
--     id int NOT NULL,
--     nombre varchar(200) DEFAULT NULL,
--     descripcion varchar(200) DEFAULT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE alergia_paciente (
--     id INT NOT NULL,
--     paciente_id INT NULL,
--     alergia_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE cita (
--     id INT NOT NULL,
--     paciente_id INT NULL,
--     fecha DATETIME NOT NULL,
--     consultorio_id INT NULL,
--     confirmado BIT NULL,
--     finalizado BIT NULL,
--     tratamiento__cita_id INT NULL,
--     medico_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE consultorio (
--     id INT NOT NULL,
--     nombre VARCHAR(200) NULL,
--     ubicacion VARCHAR(200) NULL,
--     descripcion VARCHAR(200) NULL,
--     cedula_juridica TEXT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE enfermedad (
--     id INT NOT NULL,
--     nombre VARCHAR(200) NULL,
--     descripcion VARCHAR(200) NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE enfermedad_paciente (
--     id INT NOT NULL,
--     paciente_id INT NULL,
--     enfermedad_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE especialidad (
--     id INT NOT NULL,
--     desripcion VARCHAR(200) NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE factura_detalle (
--     id_factura INT NULL,
--     tratamiento_cita_id INT NULL,
--     cantidad INT NULL,
--     precio DECIMAL NULL,
--     PRIMARY KEY (id_factura, tratamiento_cita_id)
-- );
-- CREATE TABLE factura_encabezado (
--     id INT NOT NULL,
--     paciente_id INT NULL,
--     fecha DATETIME NULL,
--     monto DECIMAL NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE horario (
--     id INT NOT NULL,
--     dia DATE NULL,
--     hora_inicio DATETIME NULL,
--     hora_final DATETIME NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE horario_medico (
--     id INT NOT NULL,
--     medico_id INT NULL,
--     horario_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE medicamento (
--     id INT NOT NULL,
--     nombre VARCHAR(200) NULL,
--     descripcion VARCHAR(200) NULL,
--     precio FLOAT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE medicamento_tratamiento (
--     id INT NOT NULL,
--     medicamento_id INT NULL,
--     tratamiento_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE medico_consultorio (
--     id INT NOT NULL,
--     medico_id INT NULL,
--     horario_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE tipo (
--     id INT NOT NULL,
--     nombre NCHAR(10) NULL,
--     descripcion NCHAR(10) NULL,
--     precio NCHAR(10) NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE tipo_sangre (
--     id INT NOT NULL,
--     descripcion VARCHAR(200) NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE tipo_usuario (
--     id INT NOT NULL,
--     descripcion VARCHAR(200) NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE tipo_x_usuario (
--     id INT NOT NULL,
--     usuario_id INT NULL,
--     tipo_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE tratamiento (
--     id INT NOT NULL,
--     medico_id INT NULL,
--     medicamento_tratamiento_id INT NULL,
--     tipo_id INT NULL,
--     detalle VARCHAR(200) NULL,
--     total_medicamento FLOAT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE tratamiento_cita (
--     id INT NOT NULL,
--     tratamiento_id INT NULL,
--     cita_id INT NULL,
--     PRIMARY KEY (id)
-- );
-- ALTER TABLE
--     alergia_paciente
-- ADD
--     CONSTRAINT FK_Alergia_paciente_Alergia FOREIGN KEY (alergia_id) REFERENCES alergia (id);
-- ALTER TABLE
--     alergia_paciente
-- ADD
--     CONSTRAINT FK_Alergia_paciente_Paciente FOREIGN KEY (paciente_id) REFERENCES paciente (id);
-- ALTER TABLE
--     cita
-- ADD
--     CONSTRAINT FK_Cita_Consultorio FOREIGN KEY (consultorio_id) REFERENCES consultorio (id);
-- ALTER TABLE
--     cita
-- ADD
--     CONSTRAINT FK_Cita_Medico FOREIGN KEY (medico_id) REFERENCES medico (id);
-- ALTER TABLE
--     cita
-- ADD
--     CONSTRAINT FK_Cita_Paciente FOREIGN KEY (paciente_id) REFERENCES paciente (id);
-- ALTER TABLE
--     cita
-- ADD
--     CONSTRAINT FK_Cita_Tratamiento_Cita FOREIGN KEY (tratamiento_cita_id) REFERENCES tratamiento_cita (id);
-- ALTER TABLE
--     enfermedad_paciente
-- ADD
--     CONSTRAINT FK_Enfermedad_paciente_Enfermedad FOREIGN KEY (enfermedad_id) REFERENCES enfermedad (id);
-- ALTER TABLE
--     enfermedad_paciente
-- ADD
--     CONSTRAINT FK_Enfermedad_paciente_Paciente FOREIGN KEY (paciente_id) REFERENCES paciente (id);
-- ALTER TABLE
--     factura_detalle
-- ADD
--     CONSTRAINT FK_Factura_Detalle_Factura_Encabezado FOREIGN KEY (id_factura) REFERENCES factura_encabezado (id);
-- ALTER TABLE
--     factura_detalle
-- ADD
--     CONSTRAINT FK_Factura_Detalle_Tratamiento_Cita FOREIGN KEY (tratamiento_cita_id) REFERENCES tratamiento_cita (id);
-- ALTER TABLE
--     factura_encabezado
-- ADD
--     CONSTRAINT FK_Factura_Encabezado_Cita FOREIGN KEY (cita_id) REFERENCES cita (id);
-- ALTER TABLE
--     horario_medico
-- ADD
--     CONSTRAINT FK_Horario_Medico_Horario FOREIGN KEY (horario_id) REFERENCES horario (id);
-- ALTER TABLE
--     horario_medico
-- ADD
--     CONSTRAINT FK_Horario_Medico_Medico FOREIGN KEY (medico_id) REFERENCES medico (id);
-- ALTER TABLE
--     medicamento_tratamiento
-- ADD
--     CONSTRAINT FK_Medicamento_tratamiento_Medicamento FOREIGN KEY (medicamento_id) REFERENCES medicamento (id);
-- ALTER TABLE
--     medicamento_tratamiento
-- ADD
--     CONSTRAINT FK_Medicamento_tratamiento_Tratamiento FOREIGN KEY (tratamiento_id) REFERENCES tratamiento (id);
-- ALTER TABLE
--     medico
-- ADD
--     CONSTRAINT FK_Medico_Especialidad FOREIGN KEY (especialidad_id) REFERENCES especialidad (id);
-- ALTER TABLE
--     medico
-- ADD
--     CONSTRAINT FK_Medico_Genero FOREIGN KEY (genero_id) REFERENCES genero (id);
-- ALTER TABLE
--     medico_consultorio
-- ADD
--     CONSTRAINT FK_Medico_Consultorio_Consultorio FOREIGN KEY (consultorio_id) REFERENCES consultorio (id);
-- ALTER TABLE
--     medico_consultorio
-- ADD
--     CONSTRAINT FK_Medico_Consultorio_Medico FOREIGN KEY (medico_id) REFERENCES medico (id);
-- ALTER TABLE
--     paciente
-- ADD
--     CONSTRAINT FK_Paciente_Alergia_paciente FOREIGN KEY (alergia_paciente_id) REFERENCES alergia_paciente (id);
-- ALTER TABLE
--     paciente
-- ADD
--     CONSTRAINT FK_Paciente_Enfermedad_paciente FOREIGN KEY (enfermedad_paciente_id) REFERENCES enfermedad_paciente (id);
-- ALTER TABLE
--     paciente
-- ADD
--     CONSTRAINT FK_Paciente_Genero FOREIGN KEY (genero_id) REFERENCES genero (id);
-- ALTER TABLE
--     paciente
-- ADD
--     CONSTRAINT FK_Paciente_Tipo_Sangre FOREIGN KEY (tipo_sangre_id) REFERENCES tipo_sangre (id);
-- ALTER TABLE
--     tipo_x_usuario
-- ADD
--     CONSTRAINT FK_Tipo_x_usuario_Tipo_Usuario FOREIGN KEY (tipo_id) REFERENCES tipo_usuario (id);
-- ALTER TABLE
--     tipo_x_usuario
-- ADD
--     CONSTRAINT FK_Tipo_x_usuario_Usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id);
-- ALTER TABLE
--     tratamiento
-- ADD
--     CONSTRAINT FK_Tratamiento_Medico FOREIGN KEY (medico_id) REFERENCES medico (id);
-- ALTER TABLE
--     tratamiento
-- ADD
--     CONSTRAINT FK_Tratamiento_Tipo FOREIGN KEY (tipo_id) REFERENCES tipo (id);
-- ALTER TABLE
--     tratamiento_cita
-- ADD
--     CONSTRAINT FK_Tratamiento_Cita_Cita FOREIGN KEY (cita_id) REFERENCES cita (id);