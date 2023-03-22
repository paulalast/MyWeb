<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["username"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["textarea"]);

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Proszę uzupełnij formularz!";
        exit;
    }

    $recipient = "paulina@codelast.tech";
    $subject = "Nowa wiadomosc od $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // header('Location: https://codelast.tech/#contact');
        http_response_code(200);
        echo "Dziękuję! Twoja wiadomość została wysłana.";
    } else {
        // header('Location: https://codelast.tech/#contact');
        http_response_code(500);
        echo "Ups! Coś poszło nie tak. Nie możemy wysłać Twojej wiadomości.";
    }
} else {
    http_response_code(403);
    echo "Podczas przesyłania Twojej wiadomości wystąpił problem. Proszę spróbować ponownie.";
}
?>
