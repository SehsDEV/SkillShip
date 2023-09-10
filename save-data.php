<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$dateOfBirth = $_POST['dateOfBirth'];
$country = $_POST['country'];

$data = array(
    $firstName,
    $lastName,
    $email,
    $dateOfBirth,
    $country
);

$csvFileName = 'user_data.csv';

$csvFile = fopen($csvFileName, 'a');

if ($csvFile) {
    fputcsv($csvFile, $data);
    fclose($csvFile);
    echo 'Data saved successfully';
} else {
    echo 'An error occurred while saving data';
}
?>