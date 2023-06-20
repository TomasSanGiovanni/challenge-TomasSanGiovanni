<?php 
	$nombre = $_POST['Nombre'];
	$email = $_POST['email'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];


	if(mail('Tomassangiovanni1@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>