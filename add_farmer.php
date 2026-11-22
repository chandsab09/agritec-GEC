<?php

$conn = new mysqli("localhost", "root", "", "farm_management");

if ($conn->connect_error) {
    die("Database connection failed");
}

$name = $_POST["name"];
$phone = $_POST["phone"];
$land = $_POST["land"];
$location = $_POST["location"];

$sql = "INSERT INTO farmers (name, phone, land, location)
        VALUES ('$name', '$phone', '$land', '$location')";

if ($conn->query($sql) === TRUE) {
    echo "Farmer added successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>