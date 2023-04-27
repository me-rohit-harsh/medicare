<?php
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];

// Database creation 

$conn =new mysqli('localhost','root','rohit','contact_form');
if($conn->connect_error){
    die('Connection Failed: '.$conn->connect_error );
}else{
    $stmt =$conn->prepare("INSERT INTO contact_form(name,email,phone,message) values(?,?,?,?)");
    $stmt->bind_param("ssss",$name,$email,$phone,$message);
    $stmt->execute();
    echo "Message Sent Succesfully....";
    $stmt->close();
    $conn->close();
}
?>