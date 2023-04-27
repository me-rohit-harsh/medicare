<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Database creation 

$conn = new mysqli('localhost', 'root', 'rohit', 'contact_form_2');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO contact_form_2(name,phone,message) values(?,?,?,?)");
    $stmt->bind_param("sss", $name, $phone, $message);
    $stmt->execute();
    echo "Message Sent Succesfully....";
    $stmt->close();
    $conn->close();
}
