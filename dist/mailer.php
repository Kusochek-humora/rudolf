<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$company = $_POST['company'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$message = $_POST['message'];
$email = $_POST['email'];
header('Content-type: text/html; charset=utf-8');
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'send123asd@gmail.com';                     //SMTP username
    $mail->Password   = 'yan2000sexy1';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->setLanguage("ru");
    $mail->CharSet = "utf-8";
    //Recipients
    $mail->setFrom('send123asd@gmail.com', 'G-haz mail sender');
    $mail->addAddress('g-haz.kz@yandex.kz');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Заявка для поулчения подробной информации. G-haz';
    $mail->Body    = '
    <table style="  width: 500px;
    border-collapse: collapse;
    border-spacing: 0;
    height: auto;">
        <tbody>
            <tr>
                <td style="   min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">Тип кухни</td>
                <td style="    min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">' .  $name . '</td>
            </tr>
            <tr>
                <td style="   min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">Фасад</td>
                <td style="   min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">' .  $tel  . '</td>
            </tr>
            <tr>
                <td style="   min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">Фурнитура</td>
                <td style="   min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">' .  $company  . '</td>
            </tr>
            <tr>
                <td style="   min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">Столешницу</td>
                <td style="    min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px;background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">' .  $email . '</td>
            </tr>
        <tr>       <td style="  min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px;  background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">Номер клиента</td>
                <td style="   min-height: 35px;
                padding: 3px;
                width: 30px;
                height: 35px; background-color: #f8f8f8;
            transition: 0.3s all;
            border: black 1px solid;">' .  $message . '</td>
            </tr>
          
         
    
        </tbody>
    </table>
        ';
    $mail->AltBody = 'Клиент' . $name . 'хочет получить консультацию.' . '\\n Перезвоните по номеру: ' . '<i>' . $tel . '<i>';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
