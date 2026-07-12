<?php
// Activer l'affichage des erreurs (à retirer en production)
error_reporting(E_ALL);
ini_set('display_errors', 0); // 0 pour ne pas afficher dans la réponse
ini_set('log_errors', 1);

// CONFIGURATION
$recipient = "manelrachdi@hotmail.fr"; 
$sender = "hello@main-group.io"; 

// CORS - Autorisez uniquement votre domaine en production
$allowed_origin = "https://main-group.io";
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowed_origin) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
} else {
    header("Access-Control-Allow-Origin: https://main-group.io");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Gérer la requête OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Vérification de la méthode
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Méthode non autorisée."]);
    exit;
}

// Récupération des données
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// Vérification du décodage JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Données JSON invalides."]);
    exit;
}

// Vérification des champs
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Veuillez remplir tous les champs."]);
    exit;
}

// Validation de l'email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Adresse email invalide."]);
    exit;
}

$name = htmlspecialchars(trim($data['name']));
$email = htmlspecialchars(trim($data['email']));
$message_content = htmlspecialchars(trim($data['message']));

// Construction de l'email
$subject = "Nouveau message du formulaire de contact de " . $name;
$body = "Nom: " . $name . "\n";
$body .= "Email: " . $email . "\n\n";
$body .= "Message:\n" . $message_content;

$headers = "From: " . $sender . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoi
if (mail($recipient, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message envoyé avec succès !"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erreur lors de l'envoi du message."]);
}
?>