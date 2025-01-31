<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    
    <div class="container">
    <?php
        $host = 'localhost';
        $usuario = 'root'; // Cambia si tienes otro usuario
        $contraseña = ''; // Cambia si tienes otra contraseña
        $base_datos = 'alumnos';

        // Crear conexión
        $conn = new mysqli($host, $usuario, $contraseña, $base_datos);

        // Verificar conexión
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }
        echo "Conexión exitosa";

        
        $sql = "SELECT * FROM alumnos";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        // Salida de datos de cada fila
        while($row = $result->fetch_assoc()) {
            echo '<div class="alert">';
            echo "<div>" . $row["Id"] . "</div>";
            echo "<div>" . $row["Nombre"] . "</div>";
            echo "<div>" . $row["Apellido 1"] . "</div>";
            echo "<div>" . $row["Apellido 2"] . "</div>";
            echo '</div>';
        }
        } else {
            echo "0 resultados";
        }

        $conn->close(); // Cerrar conexión
    ?>
    </div>

</body>
</html>