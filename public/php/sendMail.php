<?php
    header("Content-Type: text/html; charset=utf-8");
    $userName = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    $headers = "Email of sender: ".$email." from Bakery 'Kind Chef' website";
    mail ('ekavbush@mail.ru' , $subject , $message."\n".$headers);
    header("Location: http://ekavbush.beget.tech/send");
    exit;
?>