-- Mostrar los usuarios que pertenecen a una institución en particular:
SELECT u.ci, u.nombre_completo, p.nombre_institucion
FROM Usuario u
JOIN Pertenece p ON u.ci = p.ci_usuario
WHERE p.nombre_institucion = 'Colegio San Juan Bautista'; -- Cambiar por el nombre del instituto

-- En su defecto usar (la diferencia es que trae todos los datos del usuario):
SELECT u.*
FROM Usuario u
JOIN Area a ON a.codigo = u.area_codigo
JOIN Institucion i ON i.nombre = a.institucion_perteneciente
WHERE i.nombre = 'Colegio San Juan Bautista'; -- Cambiar por el nombre del instituto

-- Mostrar todas las áreas que pertenecen a una institución en particular
SELECT a.*
FROM Area a
WHERE a.institucion_perteneciente = 'Colegio San Juan Bautista'; -- Cambiar por el nombre del instituto

-- Mostrar una lista de las reservas de más recientes a menos recientes:
SELECT *
FROM Reserva
ORDER BY fecha DESC, hora_inicio DESC;

-- Mostrar reservas por una fecha específica: *
SELECT * FROM Reserva WHERE fecha = '2024-09-21';

-- Mostrar reservas hechas en un rango de fechas en específico: *
SELECT * 
FROM Reserva 
WHERE fecha BETWEEN '2024-10-15' AND '2024-10-20'; -- Cambiar por el rango de fechas (inicio_rango AND fin_rango)

-- Mostrar reservas hechas en un rango de horas en específico: *
SELECT * 
FROM Reserva 
WHERE hora_inicio BETWEEN '08:00:00' AND '12:00:00' -- Cambiar el primer valor de hora_inicio por el inicio del rango.
AND hora_fin BETWEEN '08:00:00' AND '12:00:00'; -- Cambiar el último valor de la hora_fin por el fin del rango

-- Mostrar listado de reservas por estado: *
SELECT * FROM Reserva WHERE estado = 'confirmada'; -- Cambiar por los posibles estados; sin confirmar, confirmar, rechazada


-- Mostrar las reservas que hizo un usuario (incluye los servicios, si es que los tiene):
SELECT r.*, s.tipo_servicio, s.descripcion
FROM Reserva r
LEFT JOIN Tiene t ON r.id = t.id_reserva
LEFT JOIN Servicio s ON t.id_servicio = s.id_servicio
WHERE r.ci_usuario = '12345678'; -- Cambiar por el usuario

-- Mostrar una lista de reservas hechas a un área específica de una institución.
SELECT r.*
FROM Reserva r
JOIN Area a ON r.codigo_area = a.codigo
JOIN Institucion i ON a.institucion_perteneciente = i.nombre
WHERE a.codigo = 'codigo_area' AND i.nombre = 'nombre_institucion'; -- Cambiar por el código del área y por el nombre de la institución.