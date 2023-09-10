<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    if (!empty($email)) {
        $filename = "data/NewLetter_Email.txt";

        // Read existing emails from the file
        $existingEmails = file_get_contents($filename);

        // Append the new email on a new line, using PHP_EOL for cross-platform line breaks
        $newContent = $existingEmails . $email . PHP_EOL;

        // Write the updated content back to the file
        if (file_put_contents($filename, $newContent) !== false) {
            echo "Email successfully added to the file.";
        } else {
            echo "Error writing email to the file.";
        }
    } else {
        echo "Email is empty.";
    }
} else {
    echo "Invalid request.";
}
?>