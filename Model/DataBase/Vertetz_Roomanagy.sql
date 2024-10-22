-- Crear la base de datos y usarla
CREATE DATABASE IF NOT EXISTS vertetz_roomanagy;
USE vertetz_roomanagy;

-- Crear la tabla de la entidad Institucion
CREATE TABLE IF NOT EXISTS Institucion (
    nombre VARCHAR(255) PRIMARY KEY,
    calle VARCHAR(255) NOT NULL,
    esquina VARCHAR(255) NOT NULL,
    puerta INT(10) NOT NULL
) ENGINE=InnoDB;

-- Crear la tabla de la entidad Area
CREATE TABLE IF NOT EXISTS Area (
    codigo INT(10) PRIMARY KEY,
    institucion_perteneciente VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    estado ENUM('habilitada', 'inhabilitada'),
    FOREIGN KEY (institucion_perteneciente) REFERENCES Institucion(nombre) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Crear la tabla entidad Usuario
CREATE TABLE IF NOT EXISTS Usuario (
    ci INT(9) PRIMARY KEY,
    contrasena VARCHAR(32) NOT NULL,
    nombre_completo VARCHAR(255) NOT NULL,
    mail_personal VARCHAR(255) NOT NULL,
    telefono INT(20) NOT NULL,
    mail_corporativo VARCHAR(255),
    foto_perfil BLOB,
    tipo_Empleado ENUM('usuariocomun', 'administrador')
) ENGINE=InnoDB;

-- Crear la tabla entidad Reserva
CREATE TABLE IF NOT EXISTS Reserva (
    id INT(10) PRIMARY KEY,
    estado ENUM('confirmada', 'sin confirmar', 'rechazada'),
    fecha DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    observaciones VARCHAR(255),
    nombre_institucion VARCHAR(255),
    codigo_area INT(10),
    ci_usuario INT(9),
    FOREIGN KEY (nombre_institucion) REFERENCES Institucion(nombre) ON DELETE CASCADE,
    FOREIGN KEY (codigo_area) REFERENCES Area(codigo) ON DELETE CASCADE,
    FOREIGN KEY (ci_usuario) REFERENCES Usuario(ci) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Crear la tabla de la entidad Servicio
CREATE TABLE IF NOT EXISTS Servicio (
    id_servicio INT(10) PRIMARY KEY,
    tipo_servicio VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255)
) ENGINE=InnoDB;

-- Crear la tabla del atributo multivaluado datos_de_contacto
CREATE TABLE IF NOT EXISTS datos_de_contacto (
    nombre_institucion VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono INT(20) NOT NULL,
    FOREIGN KEY (nombre_institucion) REFERENCES Institucion(nombre) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Crear la tabla la relación Tiene
CREATE TABLE IF NOT EXISTS Tiene (
    id_servicio INT(10) NOT NULL,
    id_reserva INT(10) NOT NULL,
    cantidad INT(10) NOT NULL,
    PRIMARY KEY (id_servicio, id_reserva), -- Cambiado para incluir ambas columnas
    FOREIGN KEY (id_servicio) REFERENCES Servicio(id_servicio) ON DELETE CASCADE,
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Crear la tabla de la relación Pertenece
CREATE TABLE IF NOT EXISTS Pertenece (
    ci_usuario INT(9),
    nombre_institucion VARCHAR(255),
    FOREIGN KEY (ci_usuario) REFERENCES Usuario(ci) ON DELETE CASCADE,
    FOREIGN KEY (nombre_institucion) REFERENCES Institucion(nombre) ON DELETE CASCADE,
    PRIMARY KEY(ci_usuario, nombre_institucion)
) ENGINE=InnoDB;

-- Crear la tabla de la relación Ofrece
CREATE TABLE IF NOT EXISTS Ofrece (
    id_servicio INT(10),
    nombre_institucion VARCHAR(255),
    FOREIGN KEY (id_servicio) REFERENCES Servicio(id_servicio) ON DELETE CASCADE,
    FOREIGN KEY (nombre_institucion) REFERENCES Institucion(nombre) ON DELETE CASCADE,
    PRIMARY KEY(id_servicio, nombre_institucion)
) ENGINE=InnoDB;

---- Inserciones para la tabla Institucion
--INSERT INTO Institucion 
--(nombre                                 , calle                         , esquina                           , puerta) VALUES
--('Colegio San Juan Bautista'            , 'Calle José Batlle y Ordóñez' , 'Calle Salto'                     , 101   ),
--('Liceo Nº 12 de Montevideo'            , 'Calle Canelones'             , 'Calle Fernández Crespo'          , 202   ),
--('Escuela Técnica de Montevideo'        , 'Av. 18 de Julio'             , 'Calle Luis Alberto de Herrera'   , 303   ),
--('Instituto de Educación Física'        , 'Calle Gonzalo Ramírez'       , 'Calle Río Branco'                , 404   ),
--('Liceo Nº 1 de Montevideo'             , 'Calle Colonia'               , 'Calle San José'                  , 505   ),
--('Escuela Nº 25 de Montevideo'          , 'Calle Bulevar Artigas'       , 'Calle Eduardo Acevedo'           , 606   ),
--('Instituto de Formación en Educación'  , 'Calle Gral. Flores'          , 'Calle Tacuarembó'                , 707   ),
--('Liceo Nº 3 de Montevideo'             , 'Calle Herrera'               , 'Calle La Paz'                    , 808   ),
--('Colegio Santa María'                  , 'Calle Luis A. de Herrera'    , 'Calle Cuareim'                   , 909   ),
--('Escuela Técnica del Parque'           , 'Calle Paraguay'              , 'Calle Artigas'                   , 1010  );
--
--
---- Inserciones para la tabla Area
--INSERT INTO Area 
--(codigo , institucion_perteneciente             , nombre                 , estado      ) VALUES
--(1001   , 'Colegio San Juan Bautista'          , 'Matemáticas'           , 'habilitada'),
--(1002   , 'Colegio San Juan Bautista'          , 'Ciencias Sociales'     , 'habilitada'),
--(1003   , 'Liceo Nº 12 de Montevideo'          , 'Lengua Española'       , 'habilitada'),
--(1004   , 'Liceo Nº 12 de Montevideo'          , 'Historia'              , 'habilitada'),
--(1005   , 'Escuela Técnica de Montevideo'      , 'Informática'           , 'habilitada'),
--(1006   , 'Escuela Técnica de Montevideo'      , 'Electrónica'           , 'habilitada'),
--(1007   , 'Instituto de Educación Física'      , 'Deportes'              , 'habilitada'),
--(1008   , 'Instituto de Educación Física'      , 'Nutrición'             , 'habilitada'),
--(1009   , 'Liceo Nº 1 de Montevideo'           , 'Física'                , 'habilitada'),
--(1010   , 'Liceo Nº 1 de Montevideo'           , 'Química'               , 'habilitada'),
--(1011   , 'Escuela Nº 25 de Montevideo'        , 'Arte'                  , 'habilitada'),
--(1012   , 'Escuela Nº 25 de Montevideo'        , 'Música'                , 'habilitada'),
--(1013   , 'Instituto de Formación en Educación', 'Educación Física'      , 'habilitada'),
--(1014   , 'Instituto de Formación en Educación', 'Pedagogía'             , 'habilitada'),
--(1015   , 'Liceo Nº 3 de Montevideo'           , 'Matemáticas Avanzadas' , 'habilitada'),
--(1016   , 'Liceo Nº 3 de Montevideo'           , 'Ciencias Naturales'    , 'habilitada'),
--(1017   , 'Colegio Santa María'                , 'Religión'              , 'habilitada'),
--(1018   , 'Colegio Santa María'                , 'Ética'                 , 'habilitada'),
--(1019   , 'Escuela Técnica del Parque'         , 'Mecánica'              , 'habilitada'),
--(1020   , 'Escuela Técnica del Parque'         , 'Automatización'        , 'habilitada');
--
--
--
---- Inserciones para la tabla Usuario
--INSERT INTO Usuario 
--(ci         , contrasena , nombre_completo      , mail_personal             , telefono  , mail_corporativo                   , foto_perfil   , tipo_Empleado     ) VALUES
--(12345678   , 'pass1234' , 'Juan Pérez'         , 'juanperez@mail.com'      , 987654321 , 'juan@colegiosanjuan.edu.uy'       , NULL          , 'usuariocomun'    ),
--(23456789   , 'pass2345' , 'Ana Gómez'          , 'anagomez@mail.com'       , 987654322 , 'ana@liceo12.edu.uy'               , NULL          , 'administrador'   ),
--(34567890   , 'pass3456' , 'Luis Fernández'     , 'luisfernandez@mail.com'  , 987654323 , 'luis@escuelatecnica.edu.uy'       , NULL          , 'usuariocomun'    ),
--(45678901   , 'pass4567' , 'María López'        , 'marialopez@mail.com'     , 987654324 , 'maria@educacionfisica.edu.uy'     , NULL          , 'administrador'   ),
--(56789012   , 'pass5678' , 'Pedro Martínez'     , 'pedromartinez@mail.com'  , 987654325 , 'pedro@liceo1.edu.uy'              , NULL          , 'usuariocomun'    ),
--(67890123   , 'pass6789' , 'Laura Ramírez'      , 'lauraramirez@mail.com'   , 987654326 , 'laura@escuela25.edu.uy'           , NULL          , 'usuariocomun'    ),
--(78901234   , 'pass7890' , 'Carlos Ruiz'        , 'carlosruiz@mail.com'     , 987654327 , 'carlos@formacion.edu.uy'          , NULL          , 'administrador'   ),
--(89012345   , 'pass8901' , 'Sofía Torres'       , 'sofitorres@mail.com'     , 987654328 , 'sofia@liceo3.edu.uy'              , NULL          , 'administrador'   ),
--(90123456   , 'pass9012' , 'Andrés Díaz'        , 'andresdiaz@mail.com'     , 987654329 , 'andres@colegiosantamaria.edu.uy'  , NULL          , 'administrador'   ),
--(12345679   , 'pass0123' , 'Verónica Castro'    , 'veronicacastro@mail.com' , 987654330 , 'veronica@escuelatecnica.edu.uy'   , NULL          , 'usuariocomun'    ),
---- Inserciones adicionales para llegar a 100 usuarios   
--(11223344   , 'pass1122' , 'Jorge Silva'        , 'jorge@mail.com'          , 987654331 , 'jorge@colegiosanjuan.edu.uy'      , NULL          , 'usuariocomun'    ),
--(22334455   , 'pass2233' , 'Clara Rodríguez'    , 'clara@mail.com'          , 987654332 , 'clara@liceo12.edu.uy'             , NULL          , 'administrador'   ),
--(33445566   , 'pass3344' , 'Ricardo López'      , 'ricardo@mail.com'        , 987654333 , 'ricardo@escuelatecnica.edu.uy'    , NULL          , 'usuariocomun'    ),
--(44556677   , 'pass4455' , 'Sonia Martínez'     , 'sonia@mail.com'          , 987654334 , 'sonia@educacionfisica.edu.uy'     , NULL          , 'administrador'   ),
--(55667788   , 'pass5566' , 'Fernando Gómez'     , 'fernando@mail.com'       , 987654335 , 'fernando@liceo1.edu.uy'           , NULL          , 'usuariocomun'    ),
--(66778899   , 'pass6677' , 'Patricia Ramírez'   , 'patricia@mail.com'       , 987654336 , 'patricia@escuela25.edu.uy'        , NULL          , 'usuariocomun'    ),
--(77889900   , 'pass7788' , 'Juanita Hernández'  , 'juanita@mail.com'        , 987654337 , 'juanita@formacion.edu.uy'         , NULL          , 'administrador'   ),
--(88990011   , 'pass8899' , 'Oscar Paredes'      , 'oscar@mail.com'          , 987654338 , 'oscar@liceo3.edu.uy'              , NULL          , 'administrador'   ),
--(99001122   , 'pass9900' , 'Natalia López'      , 'natalia@mail.com'        , 987654339 , 'natalia@colegiosantamaria.edu.uy' , NULL          , 'administrador'   ),
--(10111213   , 'pass1011' , 'Carmen Torres'      , 'carmen@mail.com'         , 987654340 , 'carmen@escuelatecnica.edu.uy'     , NULL          , 'usuariocomun'    ),
--(11121314   , 'pass1112' , 'Luis Carlos'        , 'luiscarlos@mail.com'     , 987654341 , 'luiscarlos@colegiosanjuan.edu.uy' , NULL          , 'usuariocomun'    ),
--(12131415   , 'pass1213' , 'Rosa Martínez'      , 'rosamartinez@mail.com'   , 987654342 , 'rosa@liceo12.edu.uy'              , NULL          , 'administrador'   ),
--(13141516   , 'pass1314' , 'Fernando Ríos'      , 'fernandorios@mail.com'   , 987654343 , 'fernando@escuelatecnica.edu.uy'   , NULL          , 'usuariocomun'    ),
--(14151617   , 'pass1415' , 'Julián Castro'      , 'julian@mail.com'         , 987654344 , 'julian@educacionfisica.edu.uy'    , NULL          , 'administrador'   ),
--(15161718   , 'pass1516' , 'Ana Clara'          , 'anaclara@mail.com'       , 987654345 , 'anaclara@liceo1.edu.uy'           , NULL          , 'usuariocomun'    ),
--(16171819   , 'pass1617' , 'Roberto García'     , 'roberto@mail.com'        , 987654346 , 'roberto@escuela25.edu.uy'         , NULL          , 'usuariocomun'    ),
--(17181920   , 'pass1718' , 'Lucía Pinto'        , 'lucia@mail.com'          , 987654347 , 'lucia@formacion.edu.uy'           , NULL          , 'administrador'   ),
--(18192021   , 'pass1819' , 'Alberto Castro'     , 'alberto@mail.com'        , 987654348 , 'alberto@liceo3.edu.uy'            , NULL          , 'administrador'   ),
--(19202122   , 'pass1920' , 'Verónica López'     , 'veronicalopez@mail.com'  , 987654349 , 'verolpz@colegiosantamaria.edu.uy' , NULL          , 'administrador'   ),
--(20212223   , 'pass2021' , 'Martín Pérez'       , 'martin@mail.com'         , 987654350 , 'martin@escuelatecnica.edu.uy'     , NULL          , 'usuariocomun'    ),
--(21222324   , 'pass2122' , 'Cristina Torres'    , 'cristina@mail.com'       , 987654351 , 'cristina@colegiosanjuan.edu.uy'   , NULL          , 'usuariocomun'    ),
--(22232425   , 'pass2223' , 'Oscar Ruiz'         , 'oscar@mail.com'          , 987654352 , 'oscar@liceo12.edu.uy'             , NULL          , 'administrador'   ),
--(23242526   , 'pass2324' , 'Gabriela Álvarez'   , 'gabriela@mail.com'       , 987654353 , 'gabriela@escuelatecnica.edu.uy'   , NULL          , 'usuariocomun'    ),
--(24252627   , 'pass2425' , 'Ramiro Suárez'      , 'ramiro@mail.com'         , 987654354 , 'ramiro@educacionfisica.edu.uy'    , NULL          , 'administrador'   ),
--(25262728   , 'pass2526' , 'Elena Castro'       , 'elena@mail.com'          , 987654355 , 'elena@liceo1.edu.uy'              , NULL          , 'usuariocomun'    ),
--(26272829   , 'pass2627' , 'Antonio Morales'    , 'antonio@mail.com'        , 987654356 , 'antonio@escuela25.edu.uy'         , NULL          , 'usuariocomun'    ),
--(27282930   , 'pass2728' , 'Rocío Herrera'      , 'rocio@mail.com'          , 987654357 , 'rocio@formacion.edu.uy'           , NULL          , 'administrador'   ),
--(28293031   , 'pass2829' , 'Mauricio Soto'      , 'mauricio@mail.com'       , 987654358 , 'mauricio@liceo3.edu.uy'           , NULL          , 'administrador'   ),
--(29293132   , 'pass2929' , 'Santiago Ceballos'  , 'santiago@mail.com'       , 987654359 , 'santiago@colegiosantamaria.edu.uy', NULL          , 'administrador'   ),
--(30313233   , 'pass3030' , 'Valentina Ruiz'     , 'valentina@mail.com'      , 987654360 , 'valentina@escuelatecnica.edu.uy'  , NULL          , 'usuariocomun'    ),
--(31323334   , 'pass3131' , 'Guillermo Rodríguez', 'guillermo@mail.com'      , 987654361 , 'guillermo@colegiosanjuan.edu.uy'  , NULL          , 'usuariocomun'    ),
--(32333435   , 'pass3232' , 'Irene Medina'       , 'irene@mail.com'          , 987654362 , 'irene@liceo12.edu.uy'             , NULL          , 'administrador'   ),
--(33343536   , 'pass3333' , 'Natalia Gómez'      , 'natalia@mail.com'        , 987654363 , 'natalia@escuelatecnica.edu.uy'    , NULL          , 'usuariocomun'    ),
--(34353637   , 'pass3434' , 'Alejandro Benítez'  , 'alejandro@mail.com'      , 987654364 , 'alejandro@liceo1.edu.uy'          , NULL          , 'administrador'   ),
--(35363738   , 'pass3535' , 'Marcos Contreras'   , 'marcos@mail.com'         , 987654365 , 'marcos@escuela25.edu.uy'          , NULL          , 'usuariocomun'    ),
--(36373839   , 'pass3636' , 'Miriam Salazar'     , 'miriam@mail.com'         , 987654366 , 'miriam@formacion.edu.uy'          , NULL          , 'administrador'   ),
--(37383940   , 'pass3737' , 'Ricardo Morales'    , 'ricardo@mail.com'        , 987654367 , 'ricardo@liceo3.edu.uy'            , NULL          , 'administrador'   ),
--(38394041   , 'pass3838' , 'Patricia Torres'    , 'patricia@mail.com'       , 987654368 , 'patricia@colegiosantamaria.edu.uy', NULL          , 'administrador'   ),
--(39404142   , 'pass3939' , 'Alfonso Martínez'   , 'alfonso@mail.com'        , 987654369 , 'alfonso@escuelatecnica.edu.uy'    , NULL          , 'usuariocomun'    ),
--(40414243   , 'pass4040' , 'Bárbara Hernández'  , 'barbara@mail.com'        , 987654370 , 'barbara@colegiosanjuan.edu.uy'    , NULL          , 'usuariocomun'    ),
--(41424344   , 'pass4141' , 'Fernando Vargas'    , 'fernando@mail.com'       , 987654371 , 'fernando@liceo12.edu.uy'          , NULL          , 'administrador'   ),
--(42434445   , 'pass4242' , 'Silvia Cabrera'     , 'silvia@mail.com'         , 987654372 , 'silvia@escuelatecnica.edu.uy'     , NULL          , 'usuariocomun'    ),
--(43444546   , 'pass4343' , 'Diego León'         , 'diego@mail.com'          , 987654373 , 'diego@educacionfisica.edu.uy'     , NULL          , 'administrador'   ),
--(44454647   , 'pass4444' , 'Marina Soto'        , 'marina@mail.com'         , 987654374 , 'marina@liceo1.edu.uy'             , NULL          , 'usuariocomun'    ),
--(45464748   , 'pass4545' , 'Samuel Ortiz'       , 'samuel@mail.com'         , 987654375 , 'samuel@escuela25.edu.uy'          , NULL          , 'usuariocomun'    ),
--(46474849   , 'pass4646' , 'Elisa Martínez'     , 'elisa@mail.com'          , 987654376 , 'elisa@formacion.edu.uy'           , NULL          , 'administrador'   ),
--(47484950   , 'pass4747' , 'Manuel Carrasco'    , 'manuel@mail.com'         , 987654377 , 'manuel@liceo3.edu.uy'             , NULL          , 'administrador'   ),
--(48495051   , 'pass4848' , 'Verónica González'  , 'veronica@mail.com'       , 987654378 , 'veronica@colegiosantamaria.edu.uy', NULL          , 'administrador'   ),
--(49505152   , 'pass4949' , 'Lina Muñoz'         , 'lina@mail.com'           , 987654379 , 'lina@escuelatecnica.edu.uy'       , NULL          , 'usuariocomun'    ),
--(50515253   , 'pass5050' , 'Rafael Moreno'      , 'rafael@mail.com'         , 987654380 , 'rafael@colegiosanjuan.edu.uy'     , NULL          , 'usuariocomun'    ),
--(51525354   , 'pass5151' , 'Nadia Romero'       , 'nadia@mail.com'          , 987654381 , 'nadia@liceo12.edu.uy'             , NULL          , 'administrador'   ),
--(52535455   , 'pass5252' , 'Matías Salas'       , 'matias@mail.com'         , 987654382 , 'matias@escuelatecnica.edu.uy'     , NULL          , 'usuariocomun'    ),
--(53545556   , 'pass5353' , 'Gabriel Cordero'    , 'gabriel@mail.com'        , 987654383 , 'gabriel@educacionfisica.edu.uy'   , NULL          , 'administrador'   ),
--(54555657   , 'pass5454' , 'Claudia Medina'     , 'claudia@mail.com'        , 987654384 , 'claudia@liceo1.edu.uy'            , NULL          , 'administrador'   ),
--(55565758   , 'pass5555' , 'Arturo Álvarez'     , 'arturo@mail.com'         , 987654385 , 'arturo@escuela25.edu.uy'          , NULL          , 'administrador'   ),
--(56575859   , 'pass5656' , 'Tatiana Aguirre'    , 'tatiana@mail.com'        , 987654386 , 'tatiana@formacion.edu.uy'         , NULL          , 'usuariocomun'    ),
--(57585960   , 'pass5757' , 'Guillermo Franco'   , 'guillermo@mail.com'      , 987654387 , 'guillermo@liceo3.edu.uy'          , NULL          , 'administrador'   ),
--(58596061   , 'pass5858' , 'Ricardo Pizarro'    , 'ricardo@mail.com'        , 987654388 , 'ricardo@colegiosantamaria.edu.uy' , NULL          , 'administrador'   ),
--(59606162   , 'pass5959' , 'Sofia Castro'       , 'sofia@mail.com'          , 987654389 , 'sofia@escuelatecnica.edu.uy'      , NULL          , 'usuariocomun'    ),
--(60616263   , 'pass6060' , 'Emilio González'    , 'emilio@mail.com'         , 987654390 , 'emilio@colegiosanjuan.edu.uy'     , NULL          , 'usuariocomun'    ),
--(61626364   , 'pass6161' , 'Luciana Rojas'      , 'luciana@mail.com'        , 987654391 , 'luciana@liceo12.edu.uy'           , NULL          , 'administrador'   ),
--(62636465   , 'pass6262' , 'Salvador Aguirre'   , 'salvador@mail.com'       , 987654392 , 'salvador@escuelatecnica.edu.uy'   , NULL          , 'usuariocomun'    ),
--(63646566   , 'pass6363' , 'Rita Méndez'        , 'rita@mail.com'           , 987654393 , 'rita@educacionfisica.edu.uy'      , NULL          , 'administrador'   ),
--(64656667   , 'pass6464' , 'Maximiliano Marín'  , 'maximiliano@mail.com'    , 987654394 , 'maximiliano@liceo1.edu.uy'        , NULL          , 'administrador'   ),
--(65666768   , 'pass6565' , 'Daniela Barrios'    , 'daniela@mail.com'        , 987654395 , 'daniela@escuela25.edu.uy'         , NULL          , 'administrador'   ),
--(66676869   , 'pass6666' , 'Gonzalo Valenzuela' , 'gonzalo@mail.com'        , 987654396 , 'gonzalo@formacion.edu.uy'         , NULL          , 'usuariocomun'    ),
--(67686970   , 'pass6767' , 'Irene Díaz'         , 'irene@mail.com'          , 987654397 , 'irene@liceo3.edu.uy'              , NULL          , 'administrador'   ),
--(68697071   , 'pass6868' , 'Emilio Salazar'     , 'emilio@mail.com'         , 987654398 , 'emilio@colegiosantamaria.edu.uy'  , NULL          , 'administrador'   ),
--(69607172   , 'pass6969' , 'Bruno Castillo'     , 'bruno@mail.com'          , 987654399 , 'bruno@escuelatecnica.edu.uy'      , NULL          , 'usuariocomun'    ),
--(70717273   , 'pass7070' , 'Angela González'    , 'angela@mail.com'         , 987654400 , 'angela@colegiosanjuan.edu.uy'     , NULL          , 'usuariocomun'    ),
--(71727374   , 'pass7171' , 'Francisco Pinto'    , 'francisco@mail.com'      , 987654401 , 'francisco@liceo12.edu.uy'         , NULL          , 'administrador'   ),
--(72737475   , 'pass7272' , 'María Silva'        , 'maria@mail.com'          , 987654402 , 'maria@escuelatecnica.edu.uy'      , NULL          , 'usuariocomun'    ),
--(73747576   , 'pass7373' , 'José García'        , 'jose@mail.com'           , 987654403 , 'jose@educacionfisica.edu.uy'      , NULL          , 'administrador'   ),
--(74757677   , 'pass7474' , 'Carla Herrera'      , 'carla@mail.com'          , 987654404 , 'carla@liceo1.edu.uy'              , NULL          , 'administrador'   ),
--(75767778   , 'pass7575' , 'Diego Martínez'     , 'diego@mail.com'          , 987654405 , 'diego@escuela25.edu.uy'           , NULL          , 'administrador'   ),
--(76777879   , 'pass7676' , 'Luisa Torres'       , 'luisa@mail.com'          , 987654406 , 'luisa@formacion.edu.uy'           , NULL          , 'usuariocomun'    ),
--(77787980   , 'pass7777' , 'Victor Flores'      , 'victor@mail.com'         , 987654407 , 'victor@liceo3.edu.uy'             , NULL          , 'administrador'   ),
--(78798081   , 'pass7878' , 'Isabel Castillo'    , 'isabel@mail.com'         , 987654408 , 'isabel@colegiosantamaria.edu.uy'  , NULL          , 'administrador'   ),
--(79808182   , 'pass7979' , 'Joaquín Sánchez'    , 'joaquin@mail.com'        , 987654409 , 'joaquin@escuelatecnica.edu.uy'    , NULL          , 'usuariocomun'    ),
--(80818283   , 'pass8080' , 'Adela Ceballos'     , 'adela@mail.com'          , 987654410 , 'adela@colegiosanjuan.edu.uy'      , NULL          , 'usuariocomun'    ),
--(81828384   , 'pass8181' , 'Fernando León'      , 'fernando@mail.com'       , 987654411 , 'fernando@liceo12.edu.uy'          , NULL          , 'administrador'   ),
--(82838485   , 'pass8282' , 'Adriana Castro'     , 'adriana@mail.com'        , 987654412 , 'adriana@escuelatecnica.edu.uy'    , NULL          , 'usuariocomun'    ),
--(83848586   , 'pass8383' , 'Nicolás Silva'      , 'nicolas@mail.com'        , 987654413 , 'nicolas@educacionfisica.edu.uy'   , NULL          , 'administrador'   ),
--(84858687   , 'pass8484' , 'Rosario Moreno'     , 'rosario@mail.com'        , 987654414 , 'rosario@liceo1.edu.uy'            , NULL          , 'administrador'   ),
--(85868788   , 'pass8585' , 'Esteban Fuentes'    , 'esteban@mail.com'        , 987654415 , 'esteban@escuela25.edu.uy'         , NULL          , 'administrador'   ),
--(86878889   , 'pass8686' , 'Joaquín Rojas'      , 'joaquin@mail.com'        , 987654416 , 'joaquin@formacion.edu.uy'         , NULL          , 'usuariocomun'    ),
--(87888990   , 'pass8787' , 'Salvador Rodríguez' , 'salvador@mail.com'       , 987654417 , 'salvador@liceo3.edu.uy'           , NULL          , 'administrador'   ),
--(88899091   , 'pass8888' , 'Verónica López'     , 'veronicalopez@mail.com'  , 987654418 , 'vlopez@colegiosantamaria.edu.uy'  , NULL          , 'administrador'   ),
--(89909192   , 'pass8999' , 'Luis Medina'        , 'luis@mail.com'           , 987654419 , 'luis@escuelatecnica.edu.uy'       , NULL          , 'usuariocomun'    ),
--(90919293   , 'pass9090' , 'Gabriela Fernández' , 'gabriela@mail.com'       , 987654420 , 'gabriela@colegiosanjuan.edu.uy'   , NULL          , 'usuariocomun'    ),
--(91929394   , 'pass9191' , 'Marcos Rodríguez'   , 'marcos@mail.com'         , 987654421 , 'marcos@liceo12.edu.uy'            , NULL          , 'administrador'   ),
--(92939495   , 'pass9292' , 'Natalia Herrera'    , 'natalia@mail.com'        , 987654422 , 'natalia@escuelatecnica.edu.uy'    , NULL          , 'usuariocomun'    ),
--(93949596   , 'pass9393' , 'Emilia Torres'      , 'emilia@mail.com'         , 987654423 , 'emilia@liceo1.edu.uy'             , NULL          , 'administrador'   ),
--(94959697   , 'pass9494' , 'Rafael Morales'     , 'rafael@mail.com'         , 987654424 , 'rafael@escuela25.edu.uy'          , NULL          , 'usuariocomun'    ),
--(95969798   , 'pass9595' , 'Lía Gutiérrez'      , 'lia@mail.com'            , 987654425 , 'lia@formacion.edu.uy'             , NULL          , 'administrador'   ),
--(96979899   , 'pass9696' , 'Mauricio Castro'    , 'mauricio@mail.com'       , 987654426 , 'mauricio@liceo3.edu.uy'           , NULL          , 'administrador'   ),
--(97989900   , 'pass9797' , 'Bárbara Ríos'       , 'barbara@mail.com'        , 987654427 , 'barbara@colegiosantamaria.edu.uy' , NULL          , 'administrador'   ),
--(98990001   , 'pass9898' , 'Gabriel Medina'     , 'gabriel@mail.com'        , 987654428 , 'gabriel@escuelatecnica.edu.uy'    , NULL          , 'usuariocomun'    ),
--(99990002   , 'pass9999' , 'Diana Pérez'        , 'diana@mail.com'          , 987654429 , 'diana@colegiosanjuan.edu.uy'      , NULL          , 'usuariocomun'    );
--
--
---- Inserciones para la tabla Reserva
--INSERT INTO Reserva 
--(id , estado            , fecha         , hora_inicio, hora_fin  , observaciones              , nombre_institucion              , codigo_area , ci_usuario  ) VALUES
--(1  , 'confirmada'      , '2024-10-10'  , '09:00:00' , '10:00:00', 'Reunión de profesores'    , 'Colegio San Juan Bautista'     , 1001        , 12345678    ),
--(2  , 'sin confirmar'   , '2024-10-11'  , '10:00:00' , '12:00:00', 'Clase de matemáticas'     , 'Colegio San Juan Bautista'     , 1002        , 23456789    ),
--(3  , 'rechazada'       , '2024-10-12'  , '14:00:00' , '15:00:00', 'Reunión de padres'        , 'Liceo Nº 12 de Montevideo'     , 1003        , 34567890    ),
--(4  , 'confirmada'      , '2024-10-13'  , '15:00:00' , '16:00:00', 'Taller de lengua'         , 'Liceo Nº 12 de Montevideo'     , 1004        , 45678901    ),
--(5  , 'sin confirmar'   , '2024-10-14'  , '11:00:00' , '12:30:00', 'Charla sobre informática' , 'Escuela Técnica de Montevideo' , 1005        , 56789012    ),
--(6  , 'confirmada'      , '2024-10-15'  , '13:00:00' , '14:00:00', 'Entrenamiento de deportes', 'Instituto de Educación Física' , 1007        , 67890123    ),
--(7  , 'sin confirmar'   , '2024-10-16'  , '09:30:00' , '11:00:00', 'Exposición de física'     , 'Liceo Nº 1 de Montevideo'      , 1009        , 78901234    ),
--(8  , 'rechazada'       , '2024-10-17'  , '10:00:00' , '11:00:00', 'Concierto de música'      , 'Escuela Nº 25 de Montevideo'   , 1011        , 89012345    ),
--(9  , 'confirmada'      , '2024-10-18'  , '12:00:00' , '13:00:00', 'Charla sobre ética'       , 'Colegio Santa María'           , 1017        , 90123456    ),
--(10 , 'sin confirmar'   , '2024-10-19'  , '14:00:00' , '15:00:00', 'Reunión técnica'          , 'Escuela Técnica del Parque'    , 1019        , 12345679    );
--
--
---- Inserciones para la tabla Servicio
--INSERT INTO Servicio 
--(id_servicio, tipo_servicio         , descripcion                                           ) VALUES
--(1          , 'Aula'                , 'Aula equipada para clases generales'                 ),
--(2          , 'Laboratorio'         , 'Laboratorio de ciencias naturales'                   ),
--(3          , 'Sala de informática' , 'Sala con computadoras para cursos de informática'    ),
--(4          , 'Gimnasio'            , 'Gimnasio para actividades deportivas'                ),
--(5          , 'Auditorio'           , 'Auditorio para eventos y conferencias'               ),
--(6          , 'Biblioteca'          , 'Biblioteca con recursos digitales y físicos'         ),
--(7          , 'Taller'              , 'Taller de manualidades y arte'                       ),
--(8          , 'Estudio'             , 'Estudio de grabación para música'                    ),
--(9          , 'Sala de música'      , 'Sala equipada para clases de música'                 ),
--(10         , 'Campo de deportes'   , 'Campo para actividades al aire libre'                );
--
--
---- Inserciones para la tabla datos_de_contacto
--INSERT INTO datos_de_contacto 
--(nombre_institucion                     , email                                 , telefono ) VALUES
--('Colegio San Juan Bautista'            , 'contacto@colegiosanjuan.edu.uy'      , 27123456 ),
--('Liceo Nº 12 de Montevideo'            , 'info@liceo12.edu.uy'                 , 27123457 ),
--('Escuela Técnica de Montevideo'        , 'administracion@etmontevideo.edu.uy'  , 27123458 ),
--('Instituto de Educación Física'        , 'info@educacionfisica.edu.uy'         , 27123459 ),
--('Liceo Nº 1 de Montevideo'             , 'contacto@liceo1.edu.uy'              , 27123460 ),
--('Escuela Nº 25 de Montevideo'          , 'info@escuela25.edu.uy'               , 27123461 ),
--('Instituto de Formación en Educación'  , 'contacto@ifede.edu.uy'               , 27123462 ),
--('Liceo Nº 3 de Montevideo'             , 'info@liceo3.edu.uy'                  , 27123463 ),
--('Colegio Santa María'                  , 'contacto@colegiosantamaria.edu.uy'   , 27123464 ),
--('Escuela Técnica del Parque'           , 'info@etparque.edu.uy'                , 27123465 );
--
---- Inserciones para la tabla Tiene
--INSERT INTO Tiene (id_servicio, id_reserva, cantidad) VALUES
--(1  ,1 , 5),
--(2  ,2 , 3),
--(3  ,3 , 10),
--(4  ,4 , 2),
--(5  ,5 , 1),
--(6  ,6 , 4),
--(7  ,7 , 6),
--(8  ,8 , 2),
--(9  ,9 , 3),
--(10 ,10, 1);
--
--INSERT INTO Pertenece (
--ci_usuario  , nombre_institucion) VALUES
---- Colegio San Juan Bautista
--(33343536   , 'Colegio San Juan Bautista'),
--(34353637   , 'Colegio San Juan Bautista'),
--(35363738   , 'Colegio San Juan Bautista'),
--(36373839   , 'Colegio San Juan Bautista'),
--(37383940   , 'Colegio San Juan Bautista'),
--(38394041   , 'Colegio San Juan Bautista'),
--(39404142   , 'Colegio San Juan Bautista'),
--(40414243   , 'Colegio San Juan Bautista'),
--(41424344   , 'Colegio San Juan Bautista'),
--(42434445   , 'Colegio San Juan Bautista'),
--
---- Liceo Nº 12 de Montevideo
--(43444546   , 'Liceo Nº 12 de Montevideo'),
--(44454647   , 'Liceo Nº 12 de Montevideo'),
--(45464748   , 'Liceo Nº 12 de Montevideo'),
--(46474849   , 'Liceo Nº 12 de Montevideo'),
--(47484950   , 'Liceo Nº 12 de Montevideo'),
--(48495051   , 'Liceo Nº 12 de Montevideo'),
--(49505152   , 'Liceo Nº 12 de Montevideo'),
--(50515253   , 'Liceo Nº 12 de Montevideo'),
--(51525354   , 'Liceo Nº 12 de Montevideo'),
--(52535455   , 'Liceo Nº 12 de Montevideo'),
--
---- Escuela Técnica de Montevideo
--(53545556   , 'Escuela Técnica de Montevideo'),
--(54555657   , 'Escuela Técnica de Montevideo'),
--(55565758   , 'Escuela Técnica de Montevideo'),
--(56575859   , 'Escuela Técnica de Montevideo'),
--(57585960   , 'Escuela Técnica de Montevideo'),
--(58596061   , 'Escuela Técnica de Montevideo'),
--(59606162   , 'Escuela Técnica de Montevideo'),
--(60616263   , 'Escuela Técnica de Montevideo'),
--(61626364   , 'Escuela Técnica de Montevideo'),
--(62636465   , 'Escuela Técnica de Montevideo'),
--
---- Instituto de Educación Física
--(63646566   , 'Instituto de Educación Física'),
--(64656667   , 'Instituto de Educación Física'),
--(65666768   , 'Instituto de Educación Física'),
--(66676869   , 'Instituto de Educación Física'),
--(67686970   , 'Instituto de Educación Física'),
--(68697071   , 'Instituto de Educación Física'),
--(69607172   , 'Instituto de Educación Física'),
--(70717273   , 'Instituto de Educación Física'),
--(71727374   , 'Instituto de Educación Física'),
--(72737475   , 'Instituto de Educación Física'),
--
---- Liceo Nº 1 de Montevideo
--(73747576   , 'Liceo Nº 1 de Montevideo'),
--(74757677   , 'Liceo Nº 1 de Montevideo'),
--(75767778   , 'Liceo Nº 1 de Montevideo'),
--(76777879   , 'Liceo Nº 1 de Montevideo'),
--(77787980   , 'Liceo Nº 1 de Montevideo'),
--(78798081   , 'Liceo Nº 1 de Montevideo'),
--(79808182   , 'Liceo Nº 1 de Montevideo'),
--(80818283   , 'Liceo Nº 1 de Montevideo'),
--(81828384   , 'Liceo Nº 1 de Montevideo'),
--(82838485   , 'Liceo Nº 1 de Montevideo'),
--
---- Escuela Nº 25 de Montevideo
--(83848586   , 'Escuela Nº 25 de Montevideo'),
--(84858687   , 'Escuela Nº 25 de Montevideo'),
--(85868788   , 'Escuela Nº 25 de Montevideo'),
--(86878889   , 'Escuela Nº 25 de Montevideo'),
--(87888990   , 'Escuela Nº 25 de Montevideo'),
--(88899091   , 'Escuela Nº 25 de Montevideo'),
--(89909192   , 'Escuela Nº 25 de Montevideo'),
--(90919293   , 'Escuela Nº 25 de Montevideo'),
--(91929394   , 'Escuela Nº 25 de Montevideo'),
--(92939495   , 'Escuela Nº 25 de Montevideo'),
--
---- Instituto de Formación en Educación
--(93949596   , 'Instituto de Formación en Educación'),
--(94959697   , 'Instituto de Formación en Educación'),
--(95969798   , 'Instituto de Formación en Educación'),
--(96979899   , 'Instituto de Formación en Educación'),
--(97989900   , 'Instituto de Formación en Educación'),
--(98990001   , 'Instituto de Formación en Educación'),
--(99990002   , 'Instituto de Formación en Educación'),
--(33343536   , 'Instituto de Formación en Educación'),
--(34353637   , 'Instituto de Formación en Educación'),
--(35363738   , 'Instituto de Formación en Educación'),
--
---- Liceo Nº 3 de Montevideo
--(36373839   , 'Liceo Nº 3 de Montevideo'),
--(37383940   , 'Liceo Nº 3 de Montevideo'),
--(38394041   , 'Liceo Nº 3 de Montevideo'),
--(39404142   , 'Liceo Nº 3 de Montevideo'),
--(40414243   , 'Liceo Nº 3 de Montevideo'),
--(41424344   , 'Liceo Nº 3 de Montevideo'),
--(42434445   , 'Liceo Nº 3 de Montevideo'),
--(43444546   , 'Liceo Nº 3 de Montevideo'),
--(44454647   , 'Liceo Nº 3 de Montevideo'),
--(45464748   , 'Liceo Nº 3 de Montevideo'),
--
---- Colegio Santa María
--(46474849   , 'Colegio Santa María'),
--(47484950   , 'Colegio Santa María'),
--(48495051   , 'Colegio Santa María'),
--(49505152   , 'Colegio Santa María'),
--(50515253   , 'Colegio Santa María'),
--(51525354   , 'Colegio Santa María'),
--(52535455   , 'Colegio Santa María'),
--(53545556   , 'Colegio Santa María'),
--(54555657   , 'Colegio Santa María'),
--(55565758   , 'Colegio Santa María'),
--
---- Escuela Técnica del Parque
--(56575859   , 'Escuela Técnica del Parque'),
--(57585960   , 'Escuela Técnica del Parque'),
--(58596061   , 'Escuela Técnica del Parque'),
--(59606162   , 'Escuela Técnica del Parque'),
--(60616263   , 'Escuela Técnica del Parque'),
--(61626364   , 'Escuela Técnica del Parque'),
--(62636465   , 'Escuela Técnica del Parque'),
--(63646566   , 'Escuela Técnica del Parque'),
--(64656667   , 'Escuela Técnica del Parque'),
--(65666768   , 'Escuela Técnica del Parque');

