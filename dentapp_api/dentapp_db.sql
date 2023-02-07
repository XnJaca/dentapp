USE dentapp_db;

-- ! Table tipo_usuario
CREATE TABLE IF NOT EXISTS tipo_usuario (
    id INT NOT NULL,
    descripcion VARCHAR(200) NULL,
    PRIMARY KEY (id)
);

-- ! Table generos
CREATE TABLE IF NOT EXISTS generos (
    id INT NOT NULL,
    descripcion VARCHAR(200) NULL,
    PRIMARY KEY (id)
);

-- ! TABLE CONSULTORIOS
CREATE TABLE IF NOT EXISTS consultorios (
    id INT NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    ubicacion VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    cedula_juridica TEXT NOT NULL,
    PRIMARY KEY (id)
);

-- ! TABLE ESPECIALIDADES
CREATE TABLE IF NOT EXISTS especialidades(
    id INT NOT NULL,
    desripcion VARCHAR(200) NULL,
    PRIMARY KEY (id)
);

-- ! TABLE HORARIO
CREATE TABLE IF NOT EXISTS horario (
    id INT NOT NULL,
    dia DATE NULL,
    hora_inicio DATETIME NULL,
    hora_final DATETIME NULL,
    PRIMARY KEY (id)
);

-- ! TABLE TIPO_SANGRE
CREATE TABLE IF NOT EXISTS tipo_sangre (
    id INT NOT NULL,
    descripcion VARCHAR(200) NULL,
    PRIMARY KEY (id)
);

-- ! TABLE CITAS
DROP TABLE citas;

CREATE TABLE IF NOT EXISTS citas (
    id INT NOT NULL,
    fecha DATETIME NOT NULL,
    -- ESTO ES SI EL CLIENTE A CONFIRMADO LA CITA.
    confirmado BIT NOT NULL,
    -- ESTO ES SI EL MEDICO A DADO POR FINALIZADA LA CITA.
    finalizado BIT NOT NULL,
    consultorio_id INT NOT NULL,
    -- POR DEFECTO ES NULO, ya que se puede asignar el medico cuando se hace la cita, o bien asignarlo despues de tomar la cita.
    medico_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    -- Fk medico_id
    CONSTRAINT fk_medico_id FOREIGN KEY (medico_id) REFERENCES medicos(id),
    -- Fk consultorio_id
    CONSTRAINT fk_consultorio_id FOREIGN KEY (consultorio_id) REFERENCES consultorios(id)
);

-- ! TABLE USUARIOS
CREATE TABLE IF NOT EXISTS usuarios (
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
    estado 
    PRIMARY KEY (id),
    -- Fk genero_id
    CONSTRAINT fk_genero_id FOREIGN KEY (genero_id) REFERENCES generos(id)
);

-- ! TABLE MEDICOS
CREATE TABLE IF NOT EXISTS medicos (
    -- REFERENCES TABLE USUARIO ID
    id INT NOT NULL,
    especialidad_id INT NOT NULL,
    precio_consulta FLOAT NOT NULL,
    horario_id INT NOT NULL,
    PRIMARY KEY (id),
    -- Fk usuario DELETE CASCADE
    CONSTRAINT fk_usuario_id FOREIGN KEY (id) REFERENCES usuarios(id),
    -- Fk especialidad_id
    CONSTRAINT fk_especialidad_id FOREIGN KEY (especialidad_id) REFERENCES especialidades(id),
    -- Fk horario_id
    CONSTRAINT fk_horario_id FOREIGN KEY (horario_id) REFERENCES horario(id)
);

-- ! TABLE PACIENTES
CREATE TABLE IF NOT EXISTS pacientes (
    id INT NOT NULL,
    -- REFERENCES TABLE USUARIO ID
    tipo_sangre_id int NOT NULL,
    alergia_paciente_id int NOT NULL,
    enfermedad_paciente_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_usuario_id FOREIGN KEY (id) REFERENCES usuarios(id),
    -- Fk tipo_sangre_id
    CONSTRAINT fk_tipo_sangre_id FOREIGN KEY (tipo_sangre_id) REFERENCES tipo_sangre(id)
);

CREATE TABLE tipo_x_usuario (
    id INT NOT NULL,
    usuario_id INT NULL,
    tipo_id INT NULL,
    PRIMARY KEY (id),
    -- Fk usuario_id
    CONSTRAINT fk_tipo_usuario_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    -- Fk tipo_usuari_id
    CONSTRAINT fk_tipo_usuario_id FOREIGN KEY (tipo_id) REFERENCES tipo_usuario(id)
);

-- ! TABLE CONSULTORIO X USUARIO
CREATE TABLE IF NOT EXISTS consultorio_x_usuario (
    id INT NOT NULL,
    consultorio_id INT NOT NULL,
    usuario_id INT NOT NULL,
    PRIMARY KEY (id),
    -- Fk consultorio_id
    CONSTRAINT fk_consultorio_usuario_consultorio FOREIGN KEY (consultorio_id) REFERENCES consultorios(id),
    -- Fk usuario_id
    CONSTRAINT fk_consultorio_usuario_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);



CREATE TABLE medicamento (
    id INT NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    precio FLOAT NOT NULL,
    PRIMARY KEY (id)
);



CREATE TABLE tipo_tratamiento (
    id INT NOT NULL,
    nombre NCHAR(10) NOT NULL,
    descripcion NCHAR(10) NOT NULL,
    precio NCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE tratamiento (
    id INT NOT NULL,
    medico_id INT NOT NULL,
    tipo_id INT NOT NULL,
    detalle VARCHAR(200) NOT NULL,
    total_medicamento FLOAT NOT NULL,
    PRIMARY KEY (id),
    -- Fk medico_id
    CONSTRAINT fk_tratamiento_medico_id FOREIGN KEY (medico_id) REFERENCES medicos(id),
    -- Fk tipo_id
    CONSTRAINT fk_tratamiento_tipo_id FOREIGN KEY (tipo_id) REFERENCES tipo_tratamiento(id)
);

CREATE TABLE medicamento_tratamiento (
    id INT NOT NULL,
    medicamento_id INT NOT NULL,
    tratamiento_id INT NOT NULL,
    PRIMARY KEY (id)
);



-- ! TABLE CITA_PACIENTE
CREATE TABLE IF NOT EXISTS cita_paciente(
    id INT NOT NULL,
    cita_id INT NOT NULL,
    paciente_id INT NOT NULL,
    tratamiento_id INT NOT NULL,
    medicamento_tratamiento_id INT NOT NULL,
    PRIMARY KEY (id),
    -- Fk cita_id
    CONSTRAINT fk_cita_paciente_id FOREIGN KEY (cita_id) REFERENCES citas(id),
    -- Fk paciente_id
    CONSTRAINT fk_paciente_cita_id FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    -- Fk tratamiento_id
    CONSTRAINT fk_tratamiento_cita_id FOREIGN KEY (tratamiento_id) REFERENCES tratamiento(id),
    -- Fk medicamento_tratamiento_id
    CONSTRAINT fk_medicamento_tratamiento_cita_id FOREIGN KEY (medicamento_tratamiento_id) REFERENCES medicamento_tratamiento(id)
);




-- CREATE TABLE tratamiento_cita (
--     id INT NOT NULL,
--     tratamiento_id INT NOT NULL,
--     cita_id INT NULL,
--     medicamento_id INT NOT NULL,
--     PRIMARY KEY (id),
--     -- Fk tratamiento_id
--     CONSTRAINT fk_tratamiento_cita_tratamiento_id FOREIGN KEY (tratamiento_id) REFERENCES tratamiento(id),
--     -- Fk cita_id
--     CONSTRAINT fk_tratamiento_cita_cita_id FOREIGN KEY (cita_id) REFERENCES citas(id),
--     -- Fk medicamento_id
--     CONSTRAINT fk_tratamiento_cita_medicamento_id FOREIGN KEY (medicamento_id) REFERENCES medicamento_tratamiento(id)
-- );

