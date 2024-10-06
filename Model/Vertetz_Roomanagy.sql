-- Crear la base de datos y usarla
CREATE DATABASE IF NOT EXISTS vertetz_roomanagy;
USE vertetz_roomanagy;

-- Crear la tabla Institucion
CREATE TABLE IF NOT EXISTS Institucion (
    nombre VARCHAR(30) PRIMARY KEY,
    calle VARCHAR(50) NOT NULL,
    esquina VARCHAR(50) NOT NULL,
    puerta INT(6) NOT NULL
) ENGINE=InnoDB;

-- Crear la tabla Area
CREATE TABLE IF NOT EXISTS Area (
    codigo INT(5) PRIMARY KEY,
    institucion_perteneciente VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    estado VARCHAR(15) NOT NULL,
    FOREIGN KEY (institucion_perteneciente) REFERENCES Institucion(nombre)
) ENGINE=InnoDB;

-- Crear la tabla Usuario
CREATE TABLE IF NOT EXISTS Usuario (
    ci INT(9) PRIMARY KEY,
    contrasena VARCHAR(32) NOT NULL,
    nombre_completo VARCHAR(60) NOT NULL,
    mail_personal VARCHAR(60) NOT NULL,
    telefono INT(20) NOT NULL,
    mail_corporativo VARCHAR(60),
    foto_perfil BLOB,
    tipo_Empleado VARCHAR(20)
) ENGINE=InnoDB;

-- Crear la tabla Reserva
CREATE TABLE IF NOT EXISTS Reserva (
    id INT(5) PRIMARY KEY,
    estado VARCHAR(10) NOT NULL,
    fecha DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    observaciones VARCHAR(200),
    nombre_institucion VARCHAR(30),
    codigo_area INT(5),
    FOREIGN KEY (nombre_institucion) REFERENCES Institucion(nombre),
    FOREIGN KEY (codigo_area) REFERENCES Area(codigo)
) ENGINE=InnoDB;

-- Crear la tabla Servicio
CREATE TABLE IF NOT EXISTS Servicio (
    id_servicio INT(10) PRIMARY KEY,
    tipo_servicio VARCHAR(30) NOT NULL,
    descripcion VARCHAR(100)
) ENGINE=InnoDB;

-- Crear la tabla datos_de_contacto
CREATE TABLE IF NOT EXISTS datos_de_contacto (
    nombre_institucion VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono INT(12) NOT NULL,
    PRIMARY KEY (nombre_institucion, email)
) ENGINE=InnoDB;

-- Crear la tabla Tiene
CREATE TABLE IF NOT EXISTS Tiene (
    id_servicio INT(10) NOT NULL,
    cantidad INT(10) NOT NULL,
    FOREIGN KEY (id_servicio) REFERENCES Servicio(id_servicio)
) ENGINE=InnoDB;

-- Inserciones para la tabla Institucion
INSERT INTO Institucion (nombre, calle, esquina, puerta) VALUES
('Instituto Nacional', 'Calle 1', 'Esquina 1', 101),
('Universidad de Montevideo', 'Calle 2', 'Esquina 2', 202),
('Ministerio de Educación', 'Calle 3', 'Esquina 3', 303),
('Hospital Central', 'Calle 4', 'Esquina 4', 404),
('Biblioteca Nacional', 'Calle 5', 'Esquina 5', 505),
('Centro Cultural', 'Calle 6', 'Esquina 6', 606),
('Hotel Plaza', 'Calle 7', 'Esquina 7', 707),
('Gobierno Departamental', 'Calle 8', 'Esquina 8', 808),
('Club Social', 'Calle 9', 'Esquina 9', 909),
('Universidad de la República', 'Calle 10', 'Esquina 10', 1001);

-- Inserciones para la tabla Area
INSERT INTO Area (codigo, institucion_perteneciente, nombre, estado) VALUES
(101, 'Instituto Nacional', 'Área de Admisión', 'Activo'),
(102, 'Instituto Nacional', 'Área de Investigación', 'Activo'),
(201, 'Universidad de Montevideo', 'Área de Ciencias Sociales', 'Activo'),
(202, 'Universidad de Montevideo', 'Área de Ingeniería', 'Activo'),
(301, 'Ministerio de Educación', 'Área de Políticas Educativas', 'Activo'),
(302, 'Ministerio de Educación', 'Área de Evaluación', 'Activo'),
(401, 'Hospital Central', 'Área de Emergencias', 'Activo'),
(402, 'Hospital Central', 'Área de Consultas', 'Activo'),
(501, 'Biblioteca Nacional', 'Área de Adquisiciones', 'Activo'),
(502, 'Biblioteca Nacional', 'Área de Catalogación', 'Activo'),
(601, 'Centro Cultural', 'Área de Eventos', 'Activo'),
(602, 'Centro Cultural', 'Área de Exposiciones', 'Activo'),
(701, 'Hotel Plaza', 'Área de Recepción', 'Activo'),
(702, 'Hotel Plaza', 'Área de Reservas', 'Activo'),
(801, 'Gobierno Departamental', 'Área de Asuntos Públicos', 'Activo'),
(802, 'Gobierno Departamental', 'Área de Relaciones Internacionales', 'Activo'),
(901, 'Club Social', 'Área de Actividades', 'Activo'),
(902, 'Club Social', 'Área de Membresías', 'Activo'),
(1001, 'Universidad de la República', 'Área de Investigación', 'Activo'),
(1002, 'Universidad de la República', 'Área de Administración', 'Activo');

-- Inserciones para la tabla Usuario
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, foto_perfil, tipo_Empleado) VALUES
(12345678, 'pass1234', 'Juan Pérez', 'juan.perez@example.com', 29123456, 'juan.perez@empresa.com', NULL, 'Administrativo'),
(23456789, 'pass2345', 'Ana Gómez', 'ana.gomez@example.com', 29234567, 'ana.gomez@empresa.com', NULL, 'Secretaria'),
(34567890, 'pass3456', 'Luis Fernández', 'luis.fernandez@example.com', 29345678, 'luis.fernandez@empresa.com', NULL, 'Técnico'),
(45678901, 'pass4567', 'María Rodríguez', 'maria.rodriguez@example.com', 29456789, 'maria.rodriguez@empresa.com', NULL, 'Consultor'),
(56789012, 'pass5678', 'Carlos Ramírez', 'carlos.ramirez@example.com', 29567890, 'carlos.ramirez@empresa.com', NULL, 'Jefe de Proyecto'),
(67890123, 'pass6789', 'Laura Díaz', 'laura.diaz@example.com', 29678901, 'laura.diaz@empresa.com', NULL, 'Desarrolladora'),
(78901234, 'pass7890', 'Pedro Martínez', 'pedro.martinez@example.com', 29789012, 'pedro.martinez@empresa.com', NULL, 'Analista'),
(89012345, 'pass8901', 'Sofía Morales', 'sofia.morales@example.com', 29890123, 'sofia.morales@empresa.com', NULL, 'Coordinadora'),
(90123456, 'pass9012', 'Daniela Fernández', 'daniela.fernandez@example.com', 29901234, 'daniela.fernandez@empresa.com', NULL, 'Recepcionista'),
(12345987, 'pass9876', 'Gabriel Soto', 'gabriel.soto@example.com', 30012345, 'gabriel.soto@empresa.com', NULL, 'Gerente');

-- Inserciones para la tabla Reserva
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area) VALUES
(1, 'Confirmada', '2024-09-01', '10:00:00', '12:00:00', 'Reunión con el cliente', 'Instituto Nacional', 101),
(2, 'Pendiente', '2024-09-02', '14:00:00', '16:00:00', 'Presentación de proyecto', 'Universidad de Montevideo', 201),
(3, 'Cancelada', '2024-09-03', '09:00:00', '11:00:00', 'Error en la programación', 'Ministerio de Educación', 301),
(4, 'Confirmada', '2024-09-04', '11:00:00', '13:00:00', 'Entrevista de trabajo', 'Hospital Central', 401),
(5, 'Pendiente', '2024-09-05', '15:00:00', '17:00:00', 'Revisión de contrato', 'Biblioteca Nacional', 501),
(6, 'Confirmada', '2024-09-06', '09:00:00', '10:30:00', 'Reunión de equipo', 'Centro Cultural', 601),
(7, 'Cancelada', '2024-09-07', '14:00:00', '16:00:00', 'Problema con el equipo', 'Hotel Plaza', 701),
(8, 'Confirmada', '2024-09-08', '13:00:00', '15:00:00', 'Capacitación interna', 'Gobierno Departamental', 801),
(9, 'Pendiente', '2024-09-09', '10:00:00', '12:00:00', 'Presentación de resultados', 'Club Social', 901),
(10, 'Confirmada', '2024-09-10', '11:00:00', '12:30:00', 'Reunión de ventas', 'Universidad de la República', 1001);

-- Inserciones para la tabla Servicio
INSERT INTO Servicio (id_servicio, tipo_servicio, descripcion) VALUES
(1, 'Catering', 'Servicio de catering para eventos'),
(2, 'Transporte', 'Transporte para personal y materiales'),
(3, 'Equipos Audiovisuales', 'Alquiler de equipos audiovisuales'),
(4, 'Acomodación', 'Servicios de acomodación para eventos'),
(5, 'Limpieza', 'Servicios de limpieza post-evento'),
(6, 'Seguridad', 'Servicios de seguridad para eventos'),
(7, 'Asesoría Legal', 'Asesoría legal para eventos y contratos'),
(8, 'Decoración', 'Servicios de decoración para eventos'),
(9, 'Sonido', 'Servicios de sonido para presentaciones'),
(10, 'Fotografía', 'Servicios de fotografía para eventos');

-- Inserciones para la tabla Tiene
INSERT INTO Tiene (id_servicio, cantidad) VALUES
(1, 10),
(2, 5),
(3, 8),
(4, 6),
(5, 12),
(6, 7),
(7, 3),
(8, 9),
(9, 4),
(10, 2);
