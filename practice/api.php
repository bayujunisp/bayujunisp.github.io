<?php
// Set the content type to JSON so clients know what to expect.
header("Content-Type: application/json");

// Only allow POST requests.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method. Please use POST.']);
    exit;
}

// --- Validation ---
$required_fields = ['id', 'name', 'email'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($_POST[$field])) {
        $missing_fields[] = $field;
    }
}

// If there are missing fields, return a 400 Bad Request error.
if (!empty($missing_fields)) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Missing required fields: ' . implode(', ', $missing_fields)
    ]);
    exit;
}

// --- Success ---
// If all fields are present, return a 200 OK success response.
http_response_code(200); // OK

// Sanitize the input for safety before echoing back.
$id = htmlspecialchars($_POST['id']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);

echo json_encode([
    'status' => 'success',
    'message' => 'Data received successfully.',
    'data' => [
        'id' => $id,
        'name' => $name,
        'email' => $email
    ]
]);

exit;
?>