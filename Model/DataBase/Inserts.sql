-- Insertar instituciones en la tabla Institucion
INSERT INTO Institucion (nombre, calle, esquina, puerta) VALUES
('Universidad de la República (UdelaR)', '18 de Julio', 'Eduardo Acevedo', 1824),
('Administración Nacional de Educación Pública (ANEP)', 'Av. Libertador Brig. Gral. Juan Antonio Lavalleja', 'Mercedes', 1409),
('Banco de la República Oriental del Uruguay (BROU)', 'Cerrito', 'Treinta y Tres', 351),
('Ministerio de Salud Pública (MSP)', '18 de Julio', 'Dr. Luis Piera', 1892),
('Ministerio de Transporte y Obras Públicas (MTOP)', 'Rincón', 'Juncal', 575),
('Antel', 'Guatemala', 'Eduardo Acevedo', 1075),
('Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'Paraguay', '18 de Julio', 1401),
('Ministerio de Educación y Cultura (MEC)', 'Reconquista', 'Misiones', 535),
('Banco Central del Uruguay (BCU)', 'Diagonal Fabini', 'Soriano', 777),
('Hospital de Clínicas Dr. Manuel Quintela', 'Av. Italia', 'Lázaro Gadea', 2870);

-- Insertar áreas para cada institución
INSERT INTO Area (codigo, institucion_perteneciente, nombre, estado) VALUES
(101, 'Universidad de la República (UdelaR)', 'Facultad de Ingeniería', 'habilitada'),
(102, 'Universidad de la República (UdelaR)', 'Facultad de Derecho', 'habilitada'),
(103, 'Universidad de la República (UdelaR)', 'Facultad de Medicina', 'habilitada'),
(104, 'Universidad de la República (UdelaR)', 'Facultad de Ciencias Sociales', 'habilitada'),
(105, 'Universidad de la República (UdelaR)', 'Facultad de Psicología', 'inhabilitada'),

(201, 'Administración Nacional de Educación Pública (ANEP)', 'Dirección General de Educación Inicial y Primaria', 'habilitada'),
(202, 'Administración Nacional de Educación Pública (ANEP)', 'Dirección General de Educación Secundaria', 'habilitada'),
(203, 'Administración Nacional de Educación Pública (ANEP)', 'Consejo de Formación en Educación', 'inhabilitada'),
(204, 'Administración Nacional de Educación Pública (ANEP)', 'Dirección de Planeamiento Educativo', 'habilitada'),
(205, 'Administración Nacional de Educación Pública (ANEP)', 'Dirección Sectorial de Infraestructura', 'habilitada'),

(301, 'Banco de la República Oriental del Uruguay (BROU)', 'Banca Empresas', 'habilitada'),
(302, 'Banco de la República Oriental del Uruguay (BROU)', 'Banca Personal', 'habilitada'),
(303, 'Banco de la República Oriental del Uruguay (BROU)', 'Créditos Hipotecarios', 'inhabilitada'),
(304, 'Banco de la República Oriental del Uruguay (BROU)', 'Plataforma Comercial', 'habilitada'),
(305, 'Banco de la República Oriental del Uruguay (BROU)', 'Tesorería General', 'habilitada'),

(401, 'Ministerio de Salud Pública (MSP)', 'Dirección General de la Salud', 'habilitada'),
(402, 'Ministerio de Salud Pública (MSP)', 'Unidad de Epidemiología', 'habilitada'),
(403, 'Ministerio de Salud Pública (MSP)', 'Control de Medicamentos', 'habilitada'),
(404, 'Ministerio de Salud Pública (MSP)', 'División de Fiscalización', 'inhabilitada'),
(405, 'Ministerio de Salud Pública (MSP)', 'Dirección de Recursos Humanos', 'habilitada'),

(501, 'Ministerio de Transporte y Obras Públicas (MTOP)', 'Dirección Nacional de Vialidad', 'habilitada'),
(502, 'Ministerio de Transporte y Obras Públicas (MTOP)', 'Dirección de Arquitectura', 'habilitada'),
(503, 'Ministerio de Transporte y Obras Públicas (MTOP)', 'Dirección de Transporte', 'habilitada'),
(504, 'Ministerio de Transporte y Obras Públicas (MTOP)', 'División de Recursos Humanos', 'inhabilitada'),
(505, 'Ministerio de Transporte y Obras Públicas (MTOP)', 'Unidad de Proyectos Especiales', 'habilitada'),

(601, 'Antel', 'División de Servicios Móviles', 'habilitada'),
(602, 'Antel', 'División de Datos', 'habilitada'),
(603, 'Antel', 'Unidad de Cuentas Corporativas', 'inhabilitada'),
(604, 'Antel', 'Atención al Cliente', 'habilitada'),
(605, 'Antel', 'División de Tecnología', 'habilitada'),

(701, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'Área Comercial', 'habilitada'),
(702, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'Área Técnica', 'habilitada'),
(703, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'Mantenimiento y Operaciones', 'inhabilitada'),
(704, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'Seguridad y Medio Ambiente', 'habilitada'),
(705, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'División de Energía Renovable', 'habilitada'),

(801, 'Ministerio de Educación y Cultura (MEC)', 'Dirección de Cultura', 'habilitada'),
(802, 'Ministerio de Educación y Cultura (MEC)', 'Dirección de Educación', 'habilitada'),
(803, 'Ministerio de Educación y Cultura (MEC)', 'Archivo General de la Nación', 'habilitada'),
(804, 'Ministerio de Educación y Cultura (MEC)', 'División Jurídica', 'inhabilitada'),
(805, 'Ministerio de Educación y Cultura (MEC)', 'División de Planificación', 'habilitada'),

(901, 'Banco Central del Uruguay (BCU)', 'Superintendencia de Servicios Financieros', 'habilitada'),
(902, 'Banco Central del Uruguay (BCU)', 'Dirección de Estudios Económicos', 'habilitada'),
(903, 'Banco Central del Uruguay (BCU)', 'Tesorería General', 'inhabilitada'),
(904, 'Banco Central del Uruguay (BCU)', 'Auditoría Interna', 'habilitada'),
(905, 'Banco Central del Uruguay (BCU)', 'División de Políticas Financieras', 'habilitada'),

(1001, 'Hospital de Clínicas Dr. Manuel Quintela', 'Servicio de Urgencias', 'habilitada'),
(1002, 'Hospital de Clínicas Dr. Manuel Quintela', 'Departamento de Cardiología', 'habilitada'),
(1003, 'Hospital de Clínicas Dr. Manuel Quintela', 'Centro de Imagenología', 'inhabilitada'),
(1004, 'Hospital de Clínicas Dr. Manuel Quintela', 'Unidad de Terapia Intensiva', 'habilitada'),
(1005, 'Hospital de Clínicas Dr. Manuel Quintela', 'Laboratorio Clínico', 'habilitada');

-- Insertar usuarios para cada institución
-- Insertar usuarios para Universidad de la República (UdelaR)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(11111111, 'pass123', 'Ana González', 'ana.gonzalez@gmail.com', 094123456, 'ana.gonzalez@udelar.edu.uy', 'usuariocomun'),
(11111112, 'pass123', 'Javier Pérez', 'javier.perez@gmail.com', 094123457, 'javier.perez@udelar.edu.uy', 'usuariocomun'),
(11111113, 'pass123', 'María Rodríguez', 'maria.rodriguez@gmail.com', 094123458, 'maria.rodriguez@udelar.edu.uy', 'usuariocomun'),
(11111114, 'pass123', 'Carlos García', 'carlos.garcia@gmail.com', 094123459, 'carlos.garcia@udelar.edu.uy', 'usuariocomun'),
(11111115, 'pass123', 'Sofía López', 'sofia.lopez@gmail.com', 094123460, 'sofia.lopez@udelar.edu.uy', 'usuariocomun'),
(11111116, 'pass123', 'Luis Sánchez', 'luis.sanchez@gmail.com', 094123461, 'luis.sanchez@udelar.edu.uy', 'usuariocomun'),
(11111117, 'pass123', 'Diego Fernández', 'diego.fernandez@gmail.com', 094123462, 'diego.fernandez@udelar.edu.uy', 'usuariocomun'),
(11111118, 'pass123', 'Paula Méndez', 'paula.mendez@gmail.com', 094123463, 'paula.mendez@udelar.edu.uy', 'usuariocomun'),
(11111119, 'pass123', 'Martín Silva', 'martin.silva@gmail.com', 094123464, 'martin.silva@udelar.edu.uy', 'usuariocomun'),
(11111120, 'admin123', 'Laura Díaz', 'laura.diaz@gmail.com', 094123465, 'laura.diaz@udelar.edu.uy', 'administrador');
-- Insertar usuarios para Administración Nacional de Educación Pública (ANEP)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(21111111, 'pass123', 'Ricardo Barrios', 'ricardo.barrios@gmail.com', 098765432, 'ricardo.barrios@anep.edu.uy', 'usuariocomun'),
(21111112, 'pass123', 'Claudia López', 'claudia.lopez@gmail.com', 098765433, 'claudia.lopez@anep.edu.uy', 'usuariocomun'),
(21111113, 'pass123', 'Fernando Méndez', 'fernando.mendez@gmail.com', 098765434, 'fernando.mendez@anep.edu.uy', 'usuariocomun'),
(21111114, 'pass123', 'Lucía Pereira', 'lucia.pereira@gmail.com', 098765435, 'lucia.pereira@anep.edu.uy', 'usuariocomun'),
(21111115, 'pass123', 'Daniel Gutiérrez', 'daniel.gutierrez@gmail.com', 098765436, 'daniel.gutierrez@anep.edu.uy', 'usuariocomun'),
(21111116, 'pass123', 'Sebastián Castro', 'sebastian.castro@gmail.com', 098765437, 'sebastian.castro@anep.edu.uy', 'usuariocomun'),
(21111117, 'pass123', 'Mónica Martínez', 'monica.martinez@gmail.com', 098765438, 'monica.martinez@anep.edu.uy', 'usuariocomun'),
(21111118, 'pass123', 'Sergio Suárez', 'sergio.suarez@gmail.com', 098765439, 'sergio.suarez@anep.edu.uy', 'usuariocomun'),
(21111119, 'pass123', 'Lorena Vázquez', 'lorena.vazquez@gmail.com', 098765440, 'lorena.vazquez@anep.edu.uy', 'usuariocomun'),
(21111120, 'admin123', 'Silvia Ortiz', 'silvia.ortiz@gmail.com', 098765441, 'silvia.ortiz@anep.edu.uy', 'administrador');
-- Insertar usuarios para Banco de la República Oriental del Uruguay (BROU)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(31111111, 'pass123', 'Alberto Gómez', 'alberto.gomez@gmail.com', 099876543, 'alberto.gomez@brou.com.uy', 'usuariocomun'),
(31111112, 'pass123', 'Verónica Ruiz', 'veronica.ruiz@gmail.com', 099876544, 'veronica.ruiz@brou.com.uy', 'usuariocomun'),
(31111113, 'pass123', 'Gabriel Hernández', 'gabriel.hernandez@gmail.com', 099876545, 'gabriel.hernandez@brou.com.uy', 'usuariocomun'),
(31111114, 'pass123', 'Patricia Ramos', 'patricia.ramos@gmail.com', 099876546, 'patricia.ramos@brou.com.uy', 'usuariocomun'),
(31111115, 'pass123', 'Esteban Cabrera', 'esteban.cabrera@gmail.com', 099876547, 'esteban.cabrera@brou.com.uy', 'usuariocomun'),
(31111116, 'pass123', 'Ana Fernández', 'ana.fernandez@gmail.com', 099876548, 'ana.fernandez@brou.com.uy', 'usuariocomun'),
(31111117, 'pass123', 'Roberto Domínguez', 'roberto.dominguez@gmail.com', 099876549, 'roberto.dominguez@brou.com.uy', 'usuariocomun'),
(31111118, 'pass123', 'Victoria Castillo', 'victoria.castillo@gmail.com', 099876550, 'victoria.castillo@brou.com.uy', 'usuariocomun'),
(31111119, 'pass123', 'Juan Paredes', 'juan.paredes@gmail.com', 099876551, 'juan.paredes@brou.com.uy', 'usuariocomun'),
(31111120, 'admin123', 'Elena Morales', 'elena.morales@gmail.com', 099876552, 'elena.morales@brou.com.uy', 'administrador');
-- Insertar usuarios para Ministerio de Salud Pública (MSP)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(41111111, 'pass123', 'Andrés Sosa', 'andres.sosa@gmail.com', 091234567, 'andres.sosa@msp.gub.uy', 'usuariocomun'),
(41111112, 'pass123', 'Rosa Álvarez', 'rosa.alvarez@gmail.com', 091234568, 'rosa.alvarez@msp.gub.uy', 'usuariocomun'),
(41111113, 'pass123', 'Enrique Torres', 'enrique.torres@gmail.com', 091234569, 'enrique.torres@msp.gub.uy', 'usuariocomun'),
(41111114, 'pass123', 'Carolina Vega', 'carolina.vega@gmail.com', 091234570, 'carolina.vega@msp.gub.uy', 'usuariocomun'),
(41111115, 'pass123', 'Francisco Rivas', 'francisco.rivas@gmail.com', 091234571, 'francisco.rivas@msp.gub.uy', 'usuariocomun'),
(41111116, 'pass123', 'Santiago Delgado', 'santiago.delgado@gmail.com', 091234572, 'santiago.delgado@msp.gub.uy', 'usuariocomun'),
(41111117, 'pass123', 'Eliana Cabrera', 'eliana.cabrera@gmail.com', 091234573, 'eliana.cabrera@msp.gub.uy', 'usuariocomun'),
(41111118, 'pass123', 'José Rocha', 'jose.rocha@gmail.com', 091234574, 'jose.rocha@msp.gub.uy', 'usuariocomun'),
(41111119, 'pass123', 'Marta Reyes', 'marta.reyes@gmail.com', 091234575, 'marta.reyes@msp.gub.uy', 'usuariocomun'),
(41111120, 'admin123', 'Cecilia Franco', 'cecilia.franco@gmail.com', 091234576, 'cecilia.franco@msp.gub.uy', 'administrador');
-- Insertar usuarios para Ministerio de Transporte y Obras Públicas (MTOP)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(51111111, 'pass123', 'Mauricio Díaz', 'mauricio.diaz@gmail.com', 092111111, 'mauricio.diaz@mtop.gub.uy', 'usuariocomun'),
(51111112, 'pass123', 'Virginia Morales', 'virginia.morales@gmail.com', 092111112, 'virginia.morales@mtop.gub.uy', 'usuariocomun'),
(51111113, 'pass123', 'Juan Solís', 'juan.solis@gmail.com', 092111113, 'juan.solis@mtop.gub.uy', 'usuariocomun'),
(51111114, 'pass123', 'Mariela Fuentes', 'mariela.fuentes@gmail.com', 092111114, 'mariela.fuentes@mtop.gub.uy', 'usuariocomun'),
(51111115, 'pass123', 'Enzo Martínez', 'enzo.martinez@gmail.com', 092111115, 'enzo.martinez@mtop.gub.uy', 'usuariocomun'),
(51111116, 'pass123', 'Laura Fernández', 'laura.fernandez@gmail.com', 092111116, 'laura.fernandez@mtop.gub.uy', 'usuariocomun'),
(51111117, 'pass123', 'Pedro Castro', 'pedro.castro@gmail.com', 092111117, 'pedro.castro@mtop.gub.uy', 'usuariocomun'),
(51111118, 'pass123', 'Isabel Aguirre', 'isabel.aguirre@gmail.com', 092111118, 'isabel.aguirre@mtop.gub.uy', 'usuariocomun'),
(51111119, 'pass123', 'Raúl García', 'raul.garcia@gmail.com', 092111119, 'raul.garcia@mtop.gub.uy', 'usuariocomun'),
(51111120, 'admin123', 'Carmen López', 'carmen.lopez@gmail.com', 092111120, 'carmen.lopez@mtop.gub.uy', 'administrador');
-- Insertar usuarios para Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(61111111, 'pass123', 'Andrés Vargas', 'andres.vargas@gmail.com', 099555111, 'andres.vargas@ute.com.uy', 'usuariocomun'),
(61111112, 'pass123', 'Lucía Alonso', 'lucia.alonso@gmail.com', 099555112, 'lucia.alonso@ute.com.uy', 'usuariocomun'),
(61111113, 'pass123', 'Gabriel Medina', 'gabriel.medina@gmail.com', 099555113, 'gabriel.medina@ute.com.uy', 'usuariocomun'),
(61111114, 'pass123', 'Paula Silva', 'paula.silva@gmail.com', 099555114, 'paula.silva@ute.com.uy', 'usuariocomun'),
(61111115, 'pass123', 'Rodrigo Pérez', 'rodrigo.perez@gmail.com', 099555115, 'rodrigo.perez@ute.com.uy', 'usuariocomun'),
(61111116, 'pass123', 'Natalia Correa', 'natalia.correa@gmail.com', 099555116, 'natalia.correa@ute.com.uy', 'usuariocomun'),
(61111117, 'pass123', 'Ricardo Torres', 'ricardo.torres@gmail.com', 099555117, 'ricardo.torres@ute.com.uy', 'usuariocomun'),
(61111118, 'pass123', 'Carolina Díaz', 'carolina.diaz@gmail.com', 099555118, 'carolina.diaz@ute.com.uy', 'usuariocomun'),
(61111119, 'pass123', 'Sebastián Méndez', 'sebastian.mendez@gmail.com', 099555119, 'sebastian.mendez@ute.com.uy', 'usuariocomun'),
(61111120, 'admin123', 'Silvia Pereira', 'silvia.pereira@gmail.com', 099555120, 'silvia.pereira@ute.com.uy', 'administrador');
-- Insertar usuarios para Ministerio de Educación y Cultura (MEC)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(71111111, 'pass123', 'José López', 'jose.lopez@gmail.com', 091222111, 'jose.lopez@mec.gub.uy', 'usuariocomun'),
(71111112, 'pass123', 'Marta García', 'marta.garcia@gmail.com', 091222112, 'marta.garcia@mec.gub.uy', 'usuariocomun'),
(71111113, 'pass123', 'Diego Ramírez', 'diego.ramirez@gmail.com', 091222113, 'diego.ramirez@mec.gub.uy', 'usuariocomun'),
(71111114, 'pass123', 'Claudia Sánchez', 'claudia.sanchez@gmail.com', 091222114, 'claudia.sanchez@mec.gub.uy', 'usuariocomun'),
(71111115, 'pass123', 'Nicolás Castro', 'nicolas.castro@gmail.com', 091222115, 'nicolas.castro@mec.gub.uy', 'usuariocomun'),
(71111116, 'pass123', 'Verónica Torres', 'veronica.torres@gmail.com', 091222116, 'veronica.torres@mec.gub.uy', 'usuariocomun'),
(71111117, 'pass123', 'Andrés González', 'andres.gonzalez@gmail.com', 091222117, 'andres.gonzalez@mec.gub.uy', 'usuariocomun'),
(71111118, 'pass123', 'Mariana Vázquez', 'mariana.vazquez@gmail.com', 091222118, 'mariana.vazquez@mec.gub.uy', 'usuariocomun'),
(71111119, 'pass123', 'Pablo Rodríguez', 'pablo.rodriguez@gmail.com', 091222119, 'pablo.rodriguez@mec.gub.uy', 'usuariocomun'),
(71111120, 'admin123', 'Laura Aguirre', 'laura.aguirre@gmail.com', 091222120, 'laura.aguirre@mec.gub.uy', 'administrador');
-- Insertar usuarios para Antel
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(31122221, 'pass123', 'María Pérez', 'maria.perez@gmail.com', 091333111, 'maria.perez@antel.com.uy', 'usuariocomun'),
(31122222, 'pass123', 'Carlos Rodríguez', 'carlos.rodriguez@gmail.com', 091333112, 'carlos.rodriguez@antel.com.uy', 'usuariocomun'),
(31122223, 'pass123', 'Laura García', 'laura.garcia@gmail.com', 091333113, 'laura.garcia@antel.com.uy', 'usuariocomun'),
(31122224, 'pass123', 'Federico López', 'federico.lopez@gmail.com', 091333114, 'federico.lopez@antel.com.uy', 'usuariocomun'),
(31122225, 'pass123', 'Lucía Fernández', 'lucia.fernandez@gmail.com', 091333115, 'lucia.fernandez@antel.com.uy', 'usuariocomun'),
(31122226, 'pass123', 'Martín Castro', 'martin.castro@gmail.com', 091333116, 'martin.castro@antel.com.uy', 'usuariocomun'),
(31122227, 'pass123', 'Ana Gómez', 'ana.gomez@gmail.com', 091333117, 'ana.gomez@antel.com.uy', 'usuariocomun'),
(31122228, 'pass123', 'Santiago Núñez', 'santiago.nunez@gmail.com', 091333118, 'santiago.nunez@antel.com.uy', 'usuariocomun'),
(31122229, 'pass123', 'Gabriela Ramírez', 'gabriela.ramirez@gmail.com', 091333119, 'gabriela.ramirez@antel.com.uy', 'usuariocomun'),
(31122230, 'admin123', 'Javier Morales', 'javier.morales@gmail.com', 091333120, 'javier.morales@antel.com.uy', 'administrador');
-- Insertar usuarios para Banco Central del Uruguay (BCU)
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(81111111, 'pass123', 'Gustavo Martínez', 'gustavo.martinez@gmail.com', 094333111, 'gustavo.martinez@bcu.com.uy', 'usuariocomun'),
(81111112, 'pass123', 'Cecilia Romero', 'cecilia.romero@gmail.com', 094333112, 'cecilia.romero@bcu.com.uy', 'usuariocomun'),
(81111113, 'pass123', 'Alejandro Cabrera', 'alejandro.cabrera@gmail.com', 094333113, 'alejandro.cabrera@bcu.com.uy', 'usuariocomun'),
(81111114, 'pass123', 'Lucía Núñez', 'lucia.nunez@gmail.com', 094333114, 'lucia.nunez@bcu.com.uy', 'usuariocomun'),
(81111115, 'pass123', 'Carlos Silva', 'carlos.silva@gmail.com', 094333115, 'carlos.silva@bcu.com.uy', 'usuariocomun'),
(81111116, 'pass123', 'María Gutiérrez', 'maria.gutierrez@gmail.com', 094333116, 'maria.gutierrez@bcu.com.uy', 'usuariocomun'),
(81111117, 'pass123', 'Santiago Díaz', 'santiago.diaz@gmail.com', 094333117, 'santiago.diaz@bcu.com.uy', 'usuariocomun'),
(81111118, 'pass123', 'Andrea Pérez', 'andrea.perez@gmail.com', 094333118, 'andrea.perez@bcu.com.uy', 'usuariocomun'),
(81111119, 'pass123', 'Daniel Hernández', 'daniel.hernandez@gmail.com', 094333119, 'daniel.hernandez@bcu.com.uy', 'usuariocomun'),
(81111120, 'admin123', 'Lorena Fernández', 'lorena.fernandez@gmail.com', 094333120, 'lorena.fernandez@bcu.com.uy', 'administrador');
-- Insertar usuarios para Hospital de Clínicas Dr. Manuel Quintela
INSERT INTO Usuario (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo, tipo_Empleado) VALUES
(91111111, 'pass123', 'Federico Torres', 'federico.torres@gmail.com', 098777111, 'federico.torres@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111112, 'pass123', 'Camila Rodríguez', 'camila.rodriguez@gmail.com', 098777112, 'camila.rodriguez@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111113, 'pass123', 'Marcelo Pérez', 'marcelo.perez@gmail.com', 098777113, 'marcelo.perez@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111114, 'pass123', 'Romina González', 'romina.gonzalez@gmail.com', 098777114, 'romina.gonzalez@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111115, 'pass123', 'Fernando Castro', 'fernando.castro@gmail.com', 098777115, 'fernando.castro@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111116, 'pass123', 'Gabriela Díaz', 'gabriela.diaz@gmail.com', 098777116, 'gabriela.diaz@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111117, 'pass123', 'Jorge Fernández', 'jorge.fernandez@gmail.com', 098777117, 'jorge.fernandez@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111118, 'pass123', 'Valeria López', 'valeria.lopez@gmail.com', 098777118, 'valeria.lopez@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111119, 'pass123', 'Esteban Ramos', 'esteban.ramos@gmail.com', 098777119, 'esteban.ramos@hospitalclinicas.edu.uy', 'usuariocomun'),
(91111120, 'admin123', 'Adriana Pereira', 'adriana.pereira@gmail.com', 098777120, 'adriana.pereira@hospitalclinicas.edu.uy', 'administrador');

-- Inserts para la tabla Reserva
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(1, 'confirmada', '2024-10-20', '09:00:00', '10:00:00', 'Reunión de proyecto', 'Universidad de la República (UdelaR)', 101, 11111111),
(2, 'sin confirmar', '2024-10-20', '10:30:00', '11:30:00', 'Clase de laboratorio', 'Universidad de la República (UdelaR)', 101, 11111112),
(3, 'rechazada', '2024-10-20', '14:00:00', '15:00:00', 'Seminario de ingeniería', 'Universidad de la República (UdelaR)', 101, 11111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(4, 'confirmada', '2024-10-21', '09:00:00', '10:00:00', 'Clase de derecho penal', 'Universidad de la República (UdelaR)', 102, 11111114),
(5, 'sin confirmar', '2024-10-21', '10:30:00', '11:30:00', 'Debate sobre derechos humanos', 'Universidad de la República (UdelaR)', 102, 11111115),
(6, 'rechazada', '2024-10-21', '14:00:00', '15:00:00', 'Reunión de facultad', 'Universidad de la República (UdelaR)', 102, 11111116);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(7, 'confirmada', '2024-10-22', '09:00:00', '10:00:00', 'Práctica de anatomía', 'Universidad de la República (UdelaR)', 103, 11111117),
(8, 'sin confirmar', '2024-10-22', '10:30:00', '11:30:00', 'Seminario de enfermedades', 'Universidad de la República (UdelaR)', 103, 11111118),
(9, 'rechazada', '2024-10-22', '14:00:00', '15:00:00', 'Reunión de investigación', 'Universidad de la República (UdelaR)', 103, 11111119);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(10, 'confirmada', '2024-10-23', '09:00:00', '10:00:00', 'Clase de sociología', 'Universidad de la República (UdelaR)', 104, 11111120),
(11, 'sin confirmar', '2024-10-23', '10:30:00', '11:30:00', 'Taller de investigación social', 'Universidad de la República (UdelaR)', 104, 11111111),
(12, 'rechazada', '2024-10-23', '14:00:00', '15:00:00', 'Debate sobre políticas sociales', 'Universidad de la República (UdelaR)', 104, 11111112);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(13, 'confirmada', '2024-10-24', '09:00:00', '10:00:00', 'Reunión de psicología clínica', 'Universidad de la República (UdelaR)', 105, 11111113),
(14, 'sin confirmar', '2024-10-24', '10:30:00', '11:30:00', 'Seminario de psicología social', 'Universidad de la República (UdelaR)', 105, 11111114),
(15, 'rechazada', '2024-10-24', '14:00:00', '15:00:00', 'Clase de psicología del desarrollo', 'Universidad de la República (UdelaR)', 105, 11111115);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(16, 'confirmada', '2024-10-25', '09:00:00', '10:00:00', 'Reunión de planificación', 'Administración Nacional de Educación Pública (ANEP)', 201, 21111111),
(17, 'sin confirmar', '2024-10-25', '10:30:00', '11:30:00', 'Taller de capacitación', 'Administración Nacional de Educación Pública (ANEP)', 201, 21111112),
(18, 'rechazada', '2024-10-25', '14:00:00', '15:00:00', 'Evaluación de proyectos', 'Administración Nacional de Educación Pública (ANEP)', 201, 21111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(19, 'confirmada', '2024-10-26', '09:00:00', '10:00:00', 'Reunión sobre educación secundaria', 'Administración Nacional de Educación Pública (ANEP)', 202, 21111114),
(20, 'sin confirmar', '2024-10-26', '10:30:00', '11:30:00', 'Taller de orientación', 'Administración Nacional de Educación Pública (ANEP)', 202, 21111115),
(21, 'rechazada', '2024-10-26', '14:00:00', '15:00:00', 'Seminario de actualización', 'Administración Nacional de Educación Pública (ANEP)', 202, 21111116);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(22, 'confirmada', '2024-10-27', '09:00:00', '10:00:00', 'Reunión de formadores', 'Administración Nacional de Educación Pública (ANEP)', 203, 21111117),
(23, 'sin confirmar', '2024-10-27', '10:30:00', '11:30:00', 'Seminario de educación', 'Administración Nacional de Educación Pública (ANEP)', 203, 21111118),
(24, 'rechazada', '2024-10-27', '14:00:00', '15:00:00', 'Evaluación de programas', 'Administración Nacional de Educación Pública (ANEP)', 203, 21111119);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(25, 'confirmada', '2024-10-28', '09:00:00', '10:00:00', 'Reunión de planificación educativa', 'Administración Nacional de Educación Pública (ANEP)', 204, 21111120),
(26, 'sin confirmar', '2024-10-28', '10:30:00', '11:30:00', 'Taller de desarrollo', 'Administración Nacional de Educación Pública (ANEP)', 204, 21111111),
(27, 'rechazada', '2024-10-28', '14:00:00', '15:00:00', 'Seminario de educación inclusiva', 'Administración Nacional de Educación Pública (ANEP)', 204, 21111112);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(28, 'confirmada', '2024-10-29', '09:00:00', '10:00:00', 'Reunión de infraestructura educativa', 'Administración Nacional de Educación Pública (ANEP)', 205, 21111113),
(29, 'sin confirmar', '2024-10-29', '10:30:00', '11:30:00', 'Planificación de obras', 'Administración Nacional de Educación Pública (ANEP)', 205, 21111114),
(30, 'rechazada', '2024-10-29', '14:00:00', '15:00:00', 'Evaluación de proyectos de infraestructura', 'Administración Nacional de Educación Pública (ANEP)', 205, 21111115);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(31, 'confirmada', '2024-10-30', '09:00:00', '10:00:00', 'Reunión de empresas', 'Banco de la República Oriental del Uruguay (BROU)', 301, 31111111),
(32, 'sin confirmar', '2024-10-30', '10:30:00', '11:30:00', 'Taller de financiamiento', 'Banco de la República Oriental del Uruguay (BROU)', 301, 31111112),
(33, 'rechazada', '2024-10-30', '14:00:00', '15:00:00', 'Evaluación de crédito', 'Banco de la República Oriental del Uruguay (BROU)', 301, 31111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(34, 'confirmada', '2024-10-31', '09:00:00', '10:00:00', 'Reunión de clientes', 'Banco de la República Oriental del Uruguay (BROU)', 302, 31111114),
(35, 'sin confirmar', '2024-10-31', '10:30:00', '11:30:00', 'Asesoría financiera', 'Banco de la República Oriental del Uruguay (BROU)', 302, 31111115),
(36, 'rechazada', '2024-10-31', '14:00:00', '15:00:00', 'Evaluación de inversiones', 'Banco de la República Oriental del Uruguay (BROU)', 302, 31111116);
-- Reservas para Créditos Hipotecarios (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(37, 'confirmada', '2024-11-01', '09:00:00', '10:00:00', 'Reunión sobre plataformas', 'Banco de la República Oriental del Uruguay (BROU)', 304, 31111117),
(38, 'sin confirmar', '2024-11-01', '10:30:00', '11:30:00', 'Taller de e-commerce', 'Banco de la República Oriental del Uruguay (BROU)', 304, 31111118),
(39, 'rechazada', '2024-11-01', '14:00:00', '15:00:00', 'Evaluación de servicios', 'Banco de la República Oriental del Uruguay (BROU)', 304, 31111119);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(40, 'confirmada', '2024-11-02', '09:00:00', '10:00:00', 'Reunión de tesorería', 'Banco de la República Oriental del Uruguay (BROU)', 305, 31111120),
(41, 'sin confirmar', '2024-11-02', '10:30:00', '11:30:00', 'Planificación financiera', 'Banco de la República Oriental del Uruguay (BROU)', 305, 31111111),
(42, 'rechazada', '2024-11-02', '14:00:00', '15:00:00', 'Evaluación de caja', 'Banco de la República Oriental del Uruguay (BROU)', 305, 31111112);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(43, 'confirmada', '2024-11-03', '09:00:00', '10:00:00', 'Reunión sobre salud pública', 'Ministerio de Salud Pública (MSP)', 401, 41111111),
(44, 'sin confirmar', '2024-11-03', '10:30:00', '11:30:00', 'Taller de prevención', 'Ministerio de Salud Pública (MSP)', 401, 41111112),
(45, 'rechazada', '2024-11-03', '14:00:00', '15:00:00', 'Evaluación de servicios de salud', 'Ministerio de Salud Pública (MSP)', 401, 41111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(46, 'confirmada', '2024-11-04', '09:00:00', '10:00:00', 'Reunión sobre epidemiología', 'Ministerio de Salud Pública (MSP)', 402, 41111114),
(47, 'sin confirmar', '2024-11-04', '10:30:00', '11:30:00', 'Análisis de datos epidemiológicos', 'Ministerio de Salud Pública (MSP)', 402, 41111115),
(48, 'rechazada', '2024-11-04', '14:00:00', '15:00:00', 'Planificación de estudios epidemiológicos', 'Ministerio de Salud Pública (MSP)', 402, 41111116);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(49, 'confirmada', '2024-11-05', '09:00:00', '10:00:00', 'Reunión de control de medicamentos', 'Ministerio de Salud Pública (MSP)', 403, 41111117),
(50, 'sin confirmar', '2024-11-05', '10:30:00', '11:30:00', 'Taller de control de calidad', 'Ministerio de Salud Pública (MSP)', 403, 41111118),
(51, 'rechazada', '2024-11-05', '14:00:00', '15:00:00', 'Evaluación de medicamentos', 'Ministerio de Salud Pública (MSP)', 403, 41111119);
-- Reservas para la División de Fiscalización (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(52, 'confirmada', '2024-11-06', '09:00:00', '10:00:00', 'Reunión de recursos humanos', 'Ministerio de Salud Pública (MSP)', 405, 41111120),
(53, 'sin confirmar', '2024-11-06', '10:30:00', '11:30:00', 'Evaluación de desempeño', 'Ministerio de Salud Pública (MSP)', 405, 41111111),
(54, 'rechazada', '2024-11-06', '14:00:00', '15:00:00', 'Taller de formación', 'Ministerio de Salud Pública (MSP)', 405, 41111112);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(55, 'confirmada', '2024-11-07', '09:00:00', '10:00:00', 'Revisión de carreteras', 'Ministerio de Transporte y Obras Públicas (MTOP)', 501, 51111111),
(56, 'sin confirmar', '2024-11-07', '10:30:00', '11:30:00', 'Planificación de obras viales', 'Ministerio de Transporte y Obras Públicas (MTOP)', 501, 51111112),
(57, 'rechazada', '2024-11-07', '14:00:00', '15:00:00', 'Evaluación de proyectos viales', 'Ministerio de Transporte y Obras Públicas (MTOP)', 501, 51111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(58, 'confirmada', '2024-11-08', '09:00:00', '10:00:00', 'Reunión de arquitectura', 'Ministerio de Transporte y Obras Públicas (MTOP)', 502, 51111114),
(59, 'sin confirmar', '2024-11-08', '10:30:00', '11:30:00', 'Propuesta de diseño', 'Ministerio de Transporte y Obras Públicas (MTOP)', 502, 51111115),
(60, 'rechazada', '2024-11-08', '14:00:00', '15:00:00', 'Revisión de infraestructura', 'Ministerio de Transporte y Obras Públicas (MTOP)', 502, 51111116);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(61, 'confirmada', '2024-11-09', '09:00:00', '10:00:00', 'Reunión sobre transporte público', 'Ministerio de Transporte y Obras Públicas (MTOP)', 503, 51111117),
(62, 'sin confirmar', '2024-11-09', '10:30:00', '11:30:00', 'Evaluación de rutas de transporte', 'Ministerio de Transporte y Obras Públicas (MTOP)', 503, 51111118),
(63, 'rechazada', '2024-11-09', '14:00:00', '15:00:00', 'Estudio sobre servicios de transporte', 'Ministerio de Transporte y Obras Públicas (MTOP)', 503, 51111119);
-- Reservas para la División de Recursos Humanos (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(64, 'confirmada', '2024-11-10', '09:00:00', '10:00:00', 'Reunión de proyectos especiales', 'Ministerio de Transporte y Obras Públicas (MTOP)', 505, 51111120),
(65, 'sin confirmar', '2024-11-10', '10:30:00', '11:30:00', 'Propuesta de innovación', 'Ministerio de Transporte y Obras Públicas (MTOP)', 505, 51111111),
(66, 'rechazada', '2024-11-10', '14:00:00', '15:00:00', 'Análisis de proyectos de gran escala', 'Ministerio de Transporte y Obras Públicas (MTOP)', 505, 51111112);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(67, 'confirmada', '2024-11-11', '09:00:00', '10:00:00', 'Revisión de servicios móviles', 'Antel', 601, 31122221),
(68, 'sin confirmar', '2024-11-11', '10:30:00', '11:30:00', 'Planificación de nuevas tarifas', 'Antel', 601, 31122222),
(69, 'rechazada', '2024-11-11', '14:00:00', '15:00:00', 'Análisis de coberturas móviles', 'Antel', 601, 31122223);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(70, 'confirmada', '2024-11-12', '09:00:00', '10:00:00', 'Revisión de servicios de datos', 'Antel', 602, 31122224),
(71, 'sin confirmar', '2024-11-12', '10:30:00', '11:30:00', 'Evaluación de infraestructura de datos', 'Antel', 602, 31122225),
(72, 'rechazada', '2024-11-12', '14:00:00', '15:00:00', 'Análisis de tráfico de datos', 'Antel', 602, 31122226);
-- Reservas para la Unidad de Cuentas Corporativas (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(73, 'confirmada', '2024-11-13', '09:00:00', '10:00:00', 'Revisión de reclamos de clientes', 'Antel', 604, 31122227),
(74, 'sin confirmar', '2024-11-13', '10:30:00', '11:30:00', 'Reunión sobre mejoras en atención', 'Antel', 604, 31122228),
(75, 'rechazada', '2024-11-13', '14:00:00', '15:00:00', 'Evaluación de encuestas de satisfacción', 'Antel', 604, 31122229);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(76, 'confirmada', '2024-11-14', '09:00:00', '10:00:00', 'Revisión de infraestructura tecnológica', 'Antel', 605, 31122230),
(77, 'sin confirmar', '2024-11-14', '10:30:00', '11:30:00', 'Evaluación de proyectos de tecnología', 'Antel', 605, 31122221),
(78, 'rechazada', '2024-11-14', '14:00:00', '15:00:00', 'Actualización de sistemas', 'Antel', 605, 31122222);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(79, 'confirmada', '2024-11-15', '09:00:00', '10:00:00', 'Revisión de contratos comerciales', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 701, 61111111),
(80, 'sin confirmar', '2024-11-15', '10:30:00', '11:30:00', 'Reunión con grandes clientes', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 701, 61111112),
(81, 'rechazada', '2024-11-15', '14:00:00', '15:00:00', 'Planificación de tarifas', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 701, 61111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(82, 'confirmada', '2024-11-16', '09:00:00', '10:00:00', 'Evaluación de infraestructura técnica', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 702, 61111114),
(83, 'sin confirmar', '2024-11-16', '10:30:00', '11:30:00', 'Revisión de proyectos técnicos', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 702, 61111115),
(84, 'rechazada', '2024-11-16', '14:00:00', '15:00:00', 'Planificación de nuevas obras', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 702, 61111116);
-- Reservas para Mantenimiento y Operaciones (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(85, 'confirmada', '2024-11-17', '09:00:00', '10:00:00', 'Revisión de políticas de seguridad', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 704, 61111117),
(86, 'sin confirmar', '2024-11-17', '10:30:00', '11:30:00', 'Planificación de auditoría ambiental', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 704, 61111118),
(87, 'rechazada', '2024-11-17', '14:00:00', '15:00:00', 'Análisis de impacto ambiental', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 704, 61111119);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(88, 'confirmada', '2024-11-18', '09:00:00', '10:00:00', 'Revisión de proyectos de energía renovable', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 705, 61111120),
(89, 'sin confirmar', '2024-11-18', '10:30:00', '11:30:00', 'Evaluación de nuevas fuentes de energía', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 705, 61111111),
(90, 'rechazada', '2024-11-18', '14:00:00', '15:00:00', 'Análisis de impacto de energías renovables', 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 705, 61111112);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(91, 'confirmada', '2024-11-19', '09:00:00', '10:00:00', 'Planificación de eventos culturales', 'Ministerio de Educación y Cultura (MEC)', 801, 71111111),
(92, 'sin confirmar', '2024-11-19', '10:30:00', '11:30:00', 'Revisión de proyectos artísticos', 'Ministerio de Educación y Cultura (MEC)', 801, 71111112),
(93, 'rechazada', '2024-11-19', '14:00:00', '15:00:00', 'Análisis de patrimonio cultural', 'Ministerio de Educación y Cultura (MEC)', 801, 71111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(94, 'confirmada', '2024-11-20', '09:00:00', '10:00:00', 'Revisión de programas educativos', 'Ministerio de Educación y Cultura (MEC)', 802, 71111114),
(95, 'sin confirmar', '2024-11-20', '10:30:00', '11:30:00', 'Auditoría de instituciones educativas', 'Ministerio de Educación y Cultura (MEC)', 802, 71111115),
(96, 'rechazada', '2024-11-20', '14:00:00', '15:00:00', 'Evaluación de estándares educativos', 'Ministerio de Educación y Cultura (MEC)', 802, 71111116);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(97, 'confirmada', '2024-11-21', '09:00:00', '10:00:00', 'Digitalización de documentos históricos', 'Ministerio de Educación y Cultura (MEC)', 803, 71111117),
(98, 'sin confirmar', '2024-11-21', '10:30:00', '11:30:00', 'Revisión de archivos documentales', 'Ministerio de Educación y Cultura (MEC)', 803, 71111118),
(99, 'rechazada', '2024-11-21', '14:00:00', '15:00:00', 'Planificación de archivo digital', 'Ministerio de Educación y Cultura (MEC)', 803, 71111119);
-- Reservas para la División Jurídica (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(100, 'confirmada', '2024-11-22', '09:00:00', '10:00:00', 'Planificación estratégica de políticas', 'Ministerio de Educación y Cultura (MEC)', 805, 71111120),
(101, 'sin confirmar', '2024-11-22', '10:30:00', '11:30:00', 'Análisis de proyectos futuros', 'Ministerio de Educación y Cultura (MEC)', 805, 71111111),
(102, 'rechazada', '2024-11-22', '14:00:00', '15:00:00', 'Revisión de planes operativos', 'Ministerio de Educación y Cultura (MEC)', 805, 71111112);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(103, 'confirmada', '2024-11-23', '09:00:00', '10:00:00', 'Revisión de servicios financieros', 'Banco Central del Uruguay (BCU)', 901, 81111111),
(104, 'sin confirmar', '2024-11-23', '10:30:00', '11:30:00', 'Evaluación de normas bancarias', 'Banco Central del Uruguay (BCU)', 901, 81111112),
(105, 'rechazada', '2024-11-23', '14:00:00', '15:00:00', 'Análisis de riesgos financieros', 'Banco Central del Uruguay (BCU)', 901, 81111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(106, 'confirmada', '2024-11-24', '09:00:00', '10:00:00', 'Informe de proyecciones económicas', 'Banco Central del Uruguay (BCU)', 902, 81111114),
(107, 'sin confirmar', '2024-11-24', '10:30:00', '11:30:00', 'Análisis de tendencias del mercado', 'Banco Central del Uruguay (BCU)', 902, 81111115),
(108, 'rechazada', '2024-11-24', '14:00:00', '15:00:00', 'Revisión de datos macroeconómicos', 'Banco Central del Uruguay (BCU)', 902, 81111116);
-- Reservas para la Tesorería General (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(109, 'confirmada', '2024-11-25', '09:00:00', '10:00:00', 'Auditoría de operaciones bancarias', 'Banco Central del Uruguay (BCU)', 904, 81111117),
(110, 'sin confirmar', '2024-11-25', '10:30:00', '11:30:00', 'Revisión de procedimientos internos', 'Banco Central del Uruguay (BCU)', 904, 81111118),
(111, 'rechazada', '2024-11-25', '14:00:00', '15:00:00', 'Análisis de auditoría contable', 'Banco Central del Uruguay (BCU)', 904, 81111119);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(112, 'confirmada', '2024-11-26', '09:00:00', '10:00:00', 'Estudio de políticas financieras', 'Banco Central del Uruguay (BCU)', 905, 81111120),
(113, 'sin confirmar', '2024-11-26', '10:30:00', '11:30:00', 'Evaluación de políticas monetarias', 'Banco Central del Uruguay (BCU)', 905, 81111111),
(114, 'rechazada', '2024-11-26', '14:00:00', '15:00:00', 'Análisis de estrategias financieras', 'Banco Central del Uruguay (BCU)', 905, 81111112);

INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(115, 'confirmada', '2024-12-01', '09:00:00', '10:00:00', 'Consulta de emergencia', 'Hospital de Clínicas Dr. Manuel Quintela', 1001, 91111111),
(116, 'sin confirmar', '2024-12-01', '10:30:00', '11:30:00', 'Revisión de pacientes críticos', 'Hospital de Clínicas Dr. Manuel Quintela', 1001, 91111112),
(117, 'rechazada', '2024-12-01', '14:00:00', '15:00:00', 'Evaluación de traumatismos', 'Hospital de Clínicas Dr. Manuel Quintela', 1001, 91111113);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(118, 'confirmada', '2024-12-02', '09:00:00', '10:00:00', 'Estudio de arritmias', 'Hospital de Clínicas Dr. Manuel Quintela', 1002, 91111114),
(119, 'sin confirmar', '2024-12-02', '10:30:00', '11:30:00', 'Evaluación de pacientes con infarto', 'Hospital de Clínicas Dr. Manuel Quintela', 1002, 91111115),
(120, 'rechazada', '2024-12-02', '14:00:00', '15:00:00', 'Revisión de marcapasos', 'Hospital de Clínicas Dr. Manuel Quintela', 1002, 91111116);
-- Reservas para el Centro de Imagenología (inhabilitada, no se realizarán reservas)
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(121, 'confirmada', '2024-12-03', '09:00:00', '10:00:00', 'Control de pacientes críticos', 'Hospital de Clínicas Dr. Manuel Quintela', 1004, 91111117),
(122, 'sin confirmar', '2024-12-03', '10:30:00', '11:30:00', 'Evaluación de infecciones hospitalarias', 'Hospital de Clínicas Dr. Manuel Quintela', 1004, 91111118),
(123, 'rechazada', '2024-12-03', '14:00:00', '15:00:00', 'Monitoreo respiratorio intensivo', 'Hospital de Clínicas Dr. Manuel Quintela', 1004, 91111119);
INSERT INTO Reserva (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area, ci_usuario) VALUES
(124, 'confirmada', '2024-12-04', '09:00:00', '10:00:00', 'Análisis de muestras sanguíneas', 'Hospital de Clínicas Dr. Manuel Quintela', 1005, 91111120),
(125, 'sin confirmar', '2024-12-04', '10:30:00', '11:30:00', 'Estudio de perfiles hormonales', 'Hospital de Clínicas Dr. Manuel Quintela', 1005, 91111111),
(126, 'rechazada', '2024-12-04', '14:00:00', '15:00:00', 'Pruebas bioquímicas de rutina', 'Hospital de Clínicas Dr. Manuel Quintela', 1005, 91111112);

-- Inserciones para la tabla Servicio
INSERT INTO Servicio (id_servicio, tipo_servicio, descripcion) VALUES
(1, 'Café', 'Servicio de café para los participantes'),
(2, 'Té', 'Variedad de té para los asistentes'),
(3, 'Agua Mineral', 'Agua mineral embotellada disponible'),
(4, 'Snack', 'Snacks ligeros como galletas y frutos secos'),
(5, 'Almuerzo', 'Opción de almuerzo para reuniones extendidas'),
(6, 'Proyector', 'Equipo de proyección para presentaciones'),
(7, 'Conexión Wi-Fi', 'Acceso a internet inalámbrico durante la reunión'),
(8, 'Estacionamiento', 'Espacio de estacionamiento reservado para los asistentes'),
(9, 'Material de Oficina', 'Papel, bolígrafos y otros útiles de oficina'),
(10, 'Transporte', 'Servicio de transporte para los participantes');

-- Inserciones para la tabla datos_de_contacto del atributo multivaluado datos_de_contacto de la entidad Institucion
INSERT INTO datos_de_contacto (nombre_institucion, email, telefono) VALUES
('Universidad de la República (UdelaR)', 'contacto@udelar.edu.uy', 24002000),
('Universidad de la República (UdelaR)', 'secretaria@udelar.edu.uy', 24003000),
('Administración Nacional de Educación Pública (ANEP)', 'info@anep.edu.uy', 29020000),
('Administración Nacional de Educación Pública (ANEP)', 'contacto@anep.edu.uy', 29021000),
('Banco de la República Oriental del Uruguay (BROU)', 'atencionclientes@brou.com.uy', 19960000),
('Banco de la República Oriental del Uruguay (BROU)', 'servicios@brou.com.uy', 19961000),
('Ministerio de Salud Pública (MSP)', 'consultas@msp.gub.uy', 24080000),
('Ministerio de Salud Pública (MSP)', 'atencion@msp.gub.uy', 24081000),
('Ministerio de Transporte y Obras Públicas (MTOP)', 'info@mtop.gub.uy', 29150000),
('Ministerio de Transporte y Obras Públicas (MTOP)', 'contacto@mtop.gub.uy', 29151000),
('Antel', 'atencion@antel.com.uy', 08008000),
('Antel', 'soporte@antel.com.uy', 08009000),
('Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'contacto@ute.com.uy', 29014000),
('Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)', 'soporte@ute.com.uy', 29015000),
('Ministerio de Educación y Cultura (MEC)', 'info@mec.gub.uy', 29030000),
('Ministerio de Educación y Cultura (MEC)', 'atencion@mec.gub.uy', 29031000),
('Banco Central del Uruguay (BCU)', 'atencion@bcu.gub.uy', 19672000),
('Banco Central del Uruguay (BCU)', 'consultas@bcu.gub.uy', 19673000),
('Hospital de Clínicas Dr. Manuel Quintela', 'contacto@hospitalclinicas.edu.uy', 24870000),
('Hospital de Clínicas Dr. Manuel Quintela', 'consultas@hospitalclinicas.edu.uy', 24871000);

-- Inserciones para la tabla Tiene de la relación entre Reserva y Servicio
INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 1, 10),
(6, 1, 1),
(2, 2, 12), 
(7, 2, 1),
(3, 4, 10), 
(5, 4, 1),
(4, 5, 8),
(7, 5, 1),
(1, 7, 15),
(9, 7, 10),
(8, 8, 5),
(7, 8, 1),
(6, 10, 1), 
(3, 10, 15),
(4, 11, 10),
(8, 11, 3),
(2, 13, 12),
(6, 13, 1),
(9, 14, 10),
(7, 14, 1);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 16, 10),
(7, 16, 1),
(2, 17, 15),
(4, 17, 10),
(3, 19, 10),
(5, 19, 1),
(6, 20, 1),
(1, 20, 12),
(9, 22, 10),
(7, 22, 1),
(4, 23, 8),
(2, 23, 12),
(5, 25, 1),
(3, 25, 10),
(6, 26, 1),
(7, 26, 1),
(1, 28, 10),
(8, 28, 5);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 31, 10),
(7, 31, 1),
(2, 32, 15),
(4, 32, 10),
(3, 34, 10),
(5, 34, 1),
(6, 35, 1),
(1, 35, 12),
(9, 37, 10),
(7, 37, 1),
(4, 38, 8),
(2, 38, 12),
(5, 40, 1),
(3, 40, 10);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 43, 15),
(7, 43, 1),
(2, 44, 10),
(4, 44, 10),
(3, 46, 12),
(5, 46, 1),
(6, 47, 1),
(1, 47, 10),
(9, 49, 5),
(8, 49, 1),
(4, 50, 15),
(2, 50, 12);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 55, 15),
(4, 55, 10),
(3, 56, 10),
(7, 56, 1),
(5, 58, 10),
(2, 58, 15),
(8, 61, 1),
(6, 61, 1),
(1, 64, 10),
(9, 64, 5);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 67, 20),
(4, 67, 15),
(2, 68, 10),
(3, 68, 10),
(5, 70, 10),
(7, 70, 1),
(8, 73, 1),
(6, 73, 1),
(9, 76, 5),
(1, 76, 15);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 79, 20),
(4, 79, 15),
(5, 80, 10),
(7, 80, 1),
(3, 82, 10),
(2, 82, 10),
(6, 85, 1),
(1, 85, 15),
(8, 88, 1),
(4, 88, 15);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 91, 20),
(4, 91, 15),
(2, 92, 10),
(6, 92, 1),
(3, 94, 10),
(7, 94, 1),
(5, 97, 10),
(9, 97, 5),
(8, 100, 1),
(1, 100, 15);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 103, 20),
(4, 103, 15),
(2, 104, 10),
(7, 104, 1), 
(3, 106, 10),
(5, 106, 5),
(8, 109, 1),
(6, 109, 1),
(9, 112, 10),
(1, 112, 15);

INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
(1, 115, 15),
(3, 115, 10),
(2, 116, 10),
(7, 116, 1),
(4, 118, 20),
(5, 118, 5),
(6, 121, 1),
(8, 121, 1),
(9, 124, 10),
(1, 124, 15);

-- Inserciones para la tabla Pertenece de la relación entre Institución y Usuario
INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(11111111, 'Universidad de la República (UdelaR)'),
(11111112, 'Universidad de la República (UdelaR)'),
(11111113, 'Universidad de la República (UdelaR)'),
(11111114, 'Universidad de la República (UdelaR)'),
(11111115, 'Universidad de la República (UdelaR)'),
(11111116, 'Universidad de la República (UdelaR)'),
(11111117, 'Universidad de la República (UdelaR)'),
(11111118, 'Universidad de la República (UdelaR)'),
(11111119, 'Universidad de la República (UdelaR)'),
(11111120, 'Universidad de la República (UdelaR)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(21111111, 'Administración Nacional de Educación Pública (ANEP)'),
(21111112, 'Administración Nacional de Educación Pública (ANEP)'),
(21111113, 'Administración Nacional de Educación Pública (ANEP)'),
(21111114, 'Administración Nacional de Educación Pública (ANEP)'),
(21111115, 'Administración Nacional de Educación Pública (ANEP)'),
(21111116, 'Administración Nacional de Educación Pública (ANEP)'),
(21111117, 'Administración Nacional de Educación Pública (ANEP)'),
(21111118, 'Administración Nacional de Educación Pública (ANEP)'),
(21111119, 'Administración Nacional de Educación Pública (ANEP)'),
(21111120, 'Administración Nacional de Educación Pública (ANEP)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(31111111, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111112, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111113, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111114, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111115, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111116, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111117, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111118, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111119, 'Banco de la República Oriental del Uruguay (BROU)'),
(31111120, 'Banco de la República Oriental del Uruguay (BROU)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(41111111, 'Ministerio de Salud Pública (MSP)'),
(41111112, 'Ministerio de Salud Pública (MSP)'),
(41111113, 'Ministerio de Salud Pública (MSP)'),
(41111114, 'Ministerio de Salud Pública (MSP)'),
(41111115, 'Ministerio de Salud Pública (MSP)'),
(41111116, 'Ministerio de Salud Pública (MSP)'),
(41111117, 'Ministerio de Salud Pública (MSP)'),
(41111118, 'Ministerio de Salud Pública (MSP)'),
(41111119, 'Ministerio de Salud Pública (MSP)'),
(41111120, 'Ministerio de Salud Pública (MSP)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(51111111, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111112, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111113, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111114, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111115, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111116, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111117, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111118, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111119, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(51111120, 'Ministerio de Transporte y Obras Públicas (MTOP)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(31122221, 'Antel'),
(31122222, 'Antel'),
(31122223, 'Antel'),
(31122224, 'Antel'),
(31122225, 'Antel'),
(31122226, 'Antel'),
(31122227, 'Antel'),
(31122228, 'Antel'),
(31122229, 'Antel'),
(31122230, 'Antel');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(61111111, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111112, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111113, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111114, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111115, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111116, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111117, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111118, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111119, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(61111120, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(71111111, 'Ministerio de Educación y Cultura (MEC)'),
(71111112, 'Ministerio de Educación y Cultura (MEC)'),
(71111113, 'Ministerio de Educación y Cultura (MEC)'),
(71111114, 'Ministerio de Educación y Cultura (MEC)'),
(71111115, 'Ministerio de Educación y Cultura (MEC)'),
(71111116, 'Ministerio de Educación y Cultura (MEC)'),
(71111117, 'Ministerio de Educación y Cultura (MEC)'),
(71111118, 'Ministerio de Educación y Cultura (MEC)'),
(71111119, 'Ministerio de Educación y Cultura (MEC)'),
(71111120, 'Ministerio de Educación y Cultura (MEC)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(81111111, 'Banco Central del Uruguay (BCU)'),
(81111112, 'Banco Central del Uruguay (BCU)'),
(81111113, 'Banco Central del Uruguay (BCU)'),
(81111114, 'Banco Central del Uruguay (BCU)'),
(81111115, 'Banco Central del Uruguay (BCU)'),
(81111116, 'Banco Central del Uruguay (BCU)'),
(81111117, 'Banco Central del Uruguay (BCU)'),
(81111118, 'Banco Central del Uruguay (BCU)'),
(81111119, 'Banco Central del Uruguay (BCU)'),
(81111120, 'Banco Central del Uruguay (BCU)');

INSERT INTO Pertenece (ci_usuario, nombre_institucion) VALUES
(91111111, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111112, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111113, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111114, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111115, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111116, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111117, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111118, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111119, 'Hospital de Clínicas Dr. Manuel Quintela'),
(91111120, 'Hospital de Clínicas Dr. Manuel Quintela');

-- Servicios ofrecidos por la Universidad de la República (UdelaR)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(1, 'Universidad de la República (UdelaR)'),
(2, 'Universidad de la República (UdelaR)'),
(3, 'Universidad de la República (UdelaR)'),
(4, 'Universidad de la República (UdelaR)'),
(5, 'Universidad de la República (UdelaR)'),
(7, 'Universidad de la República (UdelaR)'),
(9, 'Universidad de la República (UdelaR)');

-- Servicios ofrecidos por la Administración Nacional de Educación Pública (ANEP)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(1, 'Administración Nacional de Educación Pública (ANEP)'),
(2, 'Administración Nacional de Educación Pública (ANEP)'),
(5, 'Administración Nacional de Educación Pública (ANEP)'),
(6, 'Administración Nacional de Educación Pública (ANEP)'),
(8, 'Administración Nacional de Educación Pública (ANEP)');

-- Servicios ofrecidos por el Banco de la República Oriental del Uruguay (BROU)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(2, 'Banco de la República Oriental del Uruguay (BROU)'),
(3, 'Banco de la República Oriental del Uruguay (BROU)'),
(6, 'Banco de la República Oriental del Uruguay (BROU)'),
(7, 'Banco de la República Oriental del Uruguay (BROU)'),
(9, 'Banco de la República Oriental del Uruguay (BROU)');

-- Servicios ofrecidos por el Ministerio de Salud Pública (MSP)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(1, 'Ministerio de Salud Pública (MSP)'),
(4, 'Ministerio de Salud Pública (MSP)'),
(6, 'Ministerio de Salud Pública (MSP)'),
(8, 'Ministerio de Salud Pública (MSP)'),
(10, 'Ministerio de Salud Pública (MSP)');

-- Servicios ofrecidos por el Ministerio de Transporte y Obras Públicas (MTOP)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(3, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(5, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(7, 'Ministerio de Transporte y Obras Públicas (MTOP)'),
(9, 'Ministerio de Transporte y Obras Públicas (MTOP)');

-- Servicios ofrecidos por Antel
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(1, 'Antel'),
(3, 'Antel'),
(4, 'Antel'),
(7, 'Antel'),
(10, 'Antel');

-- Servicios ofrecidos por la Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(2, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(3, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(6, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(9, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)'),
(10, 'Administración Nacional de Usinas y Trasmisiones Eléctricas (UTE)');

-- Servicios ofrecidos por el Ministerio de Educación y Cultura (MEC)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(1, 'Ministerio de Educación y Cultura (MEC)'),
(4, 'Ministerio de Educación y Cultura (MEC)'),
(5, 'Ministerio de Educación y Cultura (MEC)'),
(7, 'Ministerio de Educación y Cultura (MEC)');

-- Servicios ofrecidos por el Banco Central del Uruguay (BCU)
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(2, 'Banco Central del Uruguay (BCU)'),
(6, 'Banco Central del Uruguay (BCU)'),
(8, 'Banco Central del Uruguay (BCU)'),
(9, 'Banco Central del Uruguay (BCU)');

-- Servicios ofrecidos por el Hospital de Clínicas Dr. Manuel Quintela
INSERT INTO Ofrece (id_servicio, nombre_institucion) VALUES
(1, 'Hospital de Clínicas Dr. Manuel Quintela'),
(4, 'Hospital de Clínicas Dr. Manuel Quintela'),
(5, 'Hospital de Clínicas Dr. Manuel Quintela'),
(10, 'Hospital de Clínicas Dr. Manuel Quintela');
