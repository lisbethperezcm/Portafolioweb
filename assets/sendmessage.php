$name =$_POST ['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

$destinatario = "lisbethperezcm@gmail.com"

mail($destinatario,$subject,$message);