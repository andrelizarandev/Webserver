<?php
# Si no entiendes el código, primero mira a login.php

# Iniciar sesión para usar $_SESSION
session_start();

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Panel Ecosonda</title>
    <link rel="icon" type="image/svg+xml" href="img/vite.svg">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body style="background-color: #C0C0C0;"> 

    <div class="contenedor">
        <header>
            <div class="uni" style="text-align: left;">
                <img  src="img/logo.png" alt="logo marina">
                <img src="img/unidad.png" alt="logo unidad">
            </div>
            <div style="text-align: right;">
                <a class="boton-1" href="#" style="margin: .4rem;">Cargar Configuración</a>
                <a class="boton-2" href="#" style="margin: .4rem;">Guardar Configuración</a>
                <a class="boton-3" href="logout.php" style="margin: .4rem;">Cerrar Sesión</a>
            </div>
        </header>
            <h1 class="titulo">PANEL DE CONTROL DE ECOSONDA HIDROSONIC-50</h1>

            <div class="datos-generales">
                <div class="datos">
                    <h1 style="color: var(--color);">Profundidad: 20 m</h1> 
                    <h2 id="ubicación" style="color: var(--color);">GPS: 19°02'44.1"N 95°58'19.4"O</h2>
                    <h2 style="color: var(--color);">IP: 172.16.1.67 </h2>
                    <div class="reloj">
                        <label for="hora"><strong> Hora:</strong></label><br>
                        <h1 id="time"><strong> 00:00:00</strong></h1>
                        <label for="date"><strong> Fecha: </strong></label>
                        <p id="date"> Date</p>
                    </div>
                </div>
            </div>

            <main>
                <div class="caja">
                    <label for="ra"><strong>Nivel de Potencia</strong></label>
                    <div class="slider">
                        <input type="range" id="rango" min="0" max="10" value="0" step="0.5">
                        <h1 id="texto">0</h1>
                    </div>
                </div>

                <div class="caja">
                    <label for="ra"><strong>Nivel de Sensibilidad</strong></label>
                    <div class="slider">
                        <input type="range" id="ranger" min="0" max="10" value="0" step="0.5">
                        <h1 id="text">0</h1>
                    </div>
                </div>

                <div class="caja">
                    <h2 for="name"><strong>Rango de Profundidad</strong></h2>
                        <label for="radio"><input type="radio"  id="radio" name="metros" value="20"> 20 m</label><br>
                        <label for="radio1"><input type="radio" id="radio1" name="metros" value="100"> 100 m</label><br>
                        <label for="radio2"><input type="radio" id="radio2" name="metros" value="200"> 200 m</label><br>
                        <label for="radio3"><input type="radio" id="radio3" name="metros" value="400"> 400 m</label><br>
                </div>

                <div class="caja">
                    <h2 for="name"><strong>Distancia Minima</strong></h2>
                    <form action="">
                        <label for="myCheck"><input type="radio" id="myCheck" name="radio" value="0"> 0 m</label><br>
                        <label for="radio_5"><input type="radio" id="radio_5" name="radio" value="1"> 1 m</label><br>
                        <label for="radio_6"><input type="radio" id="radio_6" name="radio" value="2"> 2 m</label><br>
                        <label for="radio_7"><input type="radio" id="radio_7" name="radio" value="3"> 3 m</label><br>
                    </form>
                </div>

                <div class="caja"> 
                    <label for="name"><strong>Calibración</strong></label>
                    <div class="cal">
                        <label for="cali">Velocidad Prop. Acustica</label>
                        <div>
                            <label for="cali">Offset</label>
                        </div>
                    </div>
                    <div class="range">
                        <input type="text" id="numero1" name="age" min="0" max="10" step="0.5" maxlength="3" pattern="0-9" onkeypress="return filterFloat(event,this);" />
                        <h1 id="texto">m/s</h1> 
                        <input type="text" id="numero2" name="age" min="0" max="10" step="0.5" maxlength="3" pattern="0-9" onkeypress="return filterFloat(event,this);" />
                        <h1 id="texto">m</h1>
                    </div>
                </div>

                <div class="caja">
                    <h2 for="name"><strong>Pulsos</strong></h2>
                    <form action="">                   
                        <label for="-1234"><input type="radio" id="-1234" name="radio" value="corto"> Corto</label>
                        <label for="radio9"><input type="radio" id="radio9" name="radio" value="mediano"> Mediano</label>
                        <label for="radio10"><input type="radio" id="radio10" name="radio" value="largo"> Largo</label>
                    </form>
                </div>
                <div class="caja">
                    <h2 for="name"><strong>TVG</strong></h2>   
                    <div class="tvg">                 
                        <label for="1234"><input type="radio" id="1234" name="radio" value="10 log"> 10 log</label>
                        <label for="radio12"><input type="radio" id="radio12" name="radio" value="20 log"> 20 log</label>
                        <label for="radio13"><input type="radio" id="radio13" name="radio" value="30 log"> 30 log</label>
                        <label for="radio14"><input type="radio" id="radio14" name="radio" value="40 log"> 40 log</label>
                    </div>
                </div>            
            </main>
        <script src="js/reloj.js"></script>
        <script src="js/main.js"></script>
</body>
</html>