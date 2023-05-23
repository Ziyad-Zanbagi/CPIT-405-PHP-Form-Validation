<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header($_SERVER["SERVER_PROTOCL"]."405 Method Not Allowed", true, 405);
    die("<h1>Error: 405 Method Not Allowed</h1>");
}
// Clean input values from whitespaces
$firstName = trim($_POST["fname"]);
$lastName = trim($_POST["lname"]);
$email = trim($_POST["email"]);
$comment = $_POST["comment"];

if(empty($firstName) || empty($lastName) || empty($email) || empty($comment) ) {
    echo "<p>Error: Name, email and comment are required.</p>";
    return;
}

// name validation

$nameRegExp = "/^[a-zA-Z\'\s]+$/";
if(preg_match($nameRegExp, $firstName)) {
    echo "<p>First name is valid</p>";
} else {
    echo "<p>Error: Invalid  name. first name must not include special characters and can't be above 32 characters</p>";
}

if(preg_match($nameRegExp, $lastName)) {
    echo "<p>Last name is valid</p>";
} else {
    echo "<p>Error: Invalid  name. last name must not include special characters and can't be above 32 characters</p>";
}

if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<p>Email is valid</p>";
} else {
    echo "<p>Error: Invalid  Email. Please input a valid email</p>";
}
$commentRegExp = "/^.{1,150}$/";
if(preg_match($commentRegExp, $comment)) {
    echo "<p>Comment is valid</p>";
} else {
    echo "<p>Error: Invalid  comment.</p>";
}

?>