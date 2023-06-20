<?php
$nombre = $_POST('Nombre');
$apellido = $_POST('Apellido');
$Dni = $_POST('Dni');
$email = $_POST('email');
$asunto = "Inscripcion evento 26 de junio realizada con exito";

$rta = mail('tomassangiovanni1@gmail.com',"Mensaje Web:$asunto",$Dni);
var_dump($rta);



/*
$destinatario = "Tomassangiovanni1@gmail.com";
$asunto = "Inscripcion evento 26 de junio realizada con exito";

$cuerpo = '
    <html>
    <head>
        <title>Inscripción</title>
    </head>
    <body>
        <h1>Inscripcion evento nuevas tecnologias</h1>
        <p>
            Contacto: '.$nombre . ' - '.$apellido .' '.$Dni .' <br>
            Mensaje: '.$asunto.'


        </p>
    </body>
    </html>
  ';
 $headers = "MIME-Version: 1.0\r\n";
 $headers .= "Content-type: text/html; charset=UTF8\r\n";

$headers .= "FROM: $nombre <$email> \r\n";

mail($destinatario,$asunto,$cuerpo,$headers);
echo"correo enviado";

?>