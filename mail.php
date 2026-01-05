<?php

// 1. CONFIGURATION
// ********************************************
// L'adresse où vous voulez recevoir les e-mails
$recipient = "manelrachdi@hotmail.fr"; 
// L'adresse utilisée pour l'envoi (doit souvent être un e-mail de votre domaine)
$sender = "hello@manelarchiimmo.com"; 
// ********************************************


// 2. CONFIGURATION DES ENTÊTES HTTP ET CORS
// ------------------------------------------
// Ceci est crucial pour permettre à React (qui est sur un domaine différent) d'envoyer une requête
header("Access-Control-Allow-Origin: *"); // Autorise toute origine (pour la simplicité)
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Gérer la requête OPTIONS (pré-vol CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 3. VÉRIFICATION DE LA MÉTHODE ET RÉCUPÉRATION DES DONNÉES
// ---------------------------------------------------------
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Méthode non autorisée."]);
    exit;
}

// Récupérer les données JSON envoyées par React
$data = json_decode(file_get_contents("php://input"), true);

// Vérification simple des champs
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Veuillez remplir tous les champs."]);
    exit;
}

$name = htmlspecialchars(trim($data['name']));
$email = htmlspecialchars(trim($data['email']));
$message_content = htmlspecialchars(trim($data['message']));


// 4. CONSTRUCTION ET ENVOI DE L'E-MAIL
// --------------------------------------
$subject = "Nouveau message du formulaire de contact de " . $name;
$body = "Nom: " . $name . "\n";
$body .= "Email: " . $email . "\n\n";
$body .= "Message:\n" . $message_content;

// Entêtes d'e-mail
$headers = "From: " . $sender . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoi
if (mail($recipient, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message envoyé avec succès !"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erreur interne du serveur lors de l'envoi."]);
}

?>