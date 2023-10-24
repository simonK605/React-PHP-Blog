<?php

require "../src/Controllers/Posts/PostController.php";

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

$postController = new PostController();
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $postId = $_GET['id'];
        $post = $postController->show($postId);
        if ($post) {
            header('Content-Type: application/json');
            echo json_encode($post);
        } else {
            http_response_code(404);
        }
    } else {
        $posts = $postController->index();
        header('Content-Type: application/json');
        echo json_encode($posts);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // TODO: Need to validate the request data
    $data = json_decode(file_get_contents('php://input'), true);
    $post = [
        'title' => $data['title'],
        'content' => $data['content']
    ];
    $postId = $postController->store($post);

    if ($postId) {
        http_response_code(201);
        echo json_encode([...$post, 'id' => $postId]);
    } else {
        http_response_code(400);
    }
} else {
    http_response_code(405);
}
