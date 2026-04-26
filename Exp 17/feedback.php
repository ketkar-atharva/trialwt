<?php
$name = $email = $feedback = $error = $success = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = trim($_POST["name"]);
    $email    = trim($_POST["email"]);
    $feedback = trim($_POST["feedback"]);

    if (empty($name) || empty($email) || empty($feedback)) {
        $error = "All fields are required.";
    } else {
        $success = "Thank you, " . htmlspecialchars($name) . "! Your feedback has been received.";
        $name = $email = $feedback = "";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Feedback Form</title>
    <style>
        body { font-family: sans-serif; max-width: 400px; margin: 60px auto; padding: 0 1rem; }
        h2   { margin-bottom: 1rem; }
        label   { display: block; margin-bottom: 4px; font-size: 14px; }
        input, textarea {
            width: 100%; padding: 8px; margin-bottom: 12px;
            border: 1px solid #ccc; border-radius: 4px;
            box-sizing: border-box; font-size: 14px;
        }
        textarea { height: 100px; resize: vertical; }
        button {
            width: 100%; padding: 10px;
            background: #4A90E2; color: white;
            border: none; border-radius: 4px;
            font-size: 15px; cursor: pointer;
        }
        button:hover { background: #357ABD; }
        .error   { color: red;   margin-bottom: 10px; font-size: 14px; }
        .success { color: green; margin-bottom: 10px; font-size: 14px; font-weight: bold; }
    </style>
</head>
<body>

    <h2>Feedback Form</h2>

    <?php if ($error)   echo "<p class='error'>$error</p>"; ?>
    <?php if ($success) echo "<p class='success'>$success</p>"; ?>

    <form method="POST" action="">

        <label>Name:</label>
        <input type="text" name="name" value="<?= htmlspecialchars($name) ?>" placeholder="Your name">

        <label>Email:</label>
        <input type="email" name="email" value="<?= htmlspecialchars($email) ?>" placeholder="Your email">

        <label>Feedback:</label>
        <textarea name="feedback" placeholder="Write your feedback..."><?= htmlspecialchars($feedback) ?></textarea>

        <button type="submit">Submit</button>

    </form>

</body>
</html>