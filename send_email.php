<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['fullName']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set your email address
    $to = "isaachailemeskel@gmail.com"; // Replace with your email
    $subject = "New Message from HIZEM Trading Website";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'issac.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.location.href = 'issac.html';</script>";
    }
}
?>