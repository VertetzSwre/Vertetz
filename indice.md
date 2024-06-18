Modelo: El modelo contiene toda la lógica y la interacción con la BDD. Se realizan además todas
las consultas SQL y se manejan los datos. 

Controlador: El controlador procesa las entradas del usuario, interactúa con el modelo y selecciona las
vistas para mostrar.

Vista: Son los archivos que contienen el HTML y se encargan de mostrar la información al usuario. Pueden incluir código PHP para insertar datos dinámicamente.

Public: Esta carpeta contiene archivos CSS y JS que se utilizan para dar el estilo y funcionalidad a las vistas.

Archivo "index.php": Este es un sistema de enrutamiento básico, que muestra algo determinado en base a la solicitud del usuario.
A su vez, se comunicará con el modelo para obtener y modificar datos, y finalmente, seleccionaría y mostraría las
vistas adecuadas para el usuario.
