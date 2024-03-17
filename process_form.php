<?php

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $question = $_POST['question'];

  // Validate and sanitize data (optional)
  // ... (Perform validation and sanitization checks here)

  // Process data (e.g., store in database, send email)
  // ... (Connect to database or send email using appropriate libraries)

  // Show success message (optional)
  echo "Thank you for your question, " . $name . "!";
}

?>
<script></script>