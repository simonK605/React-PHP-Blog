<?php

require $_SERVER['DOCUMENT_ROOT']."/config/db_connection.php";

class PostController
{
    private $conn;

    public function __construct()
    {
        $this->conn = DbConnection::getInstance();
    }

    public function index()
    {
        $sql = "SELECT * FROM posts";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function store($post)
    {
        $sql = "INSERT INTO posts (title, content) VALUES (:title, :content)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':title', $post['title']);
        $stmt->bindValue(':content', $post['content']);
        $stmt->execute();
        return $this->conn->lastInsertId();
    }

    public function show($id)
    {
        $sql = "SELECT * FROM posts WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    // TODO: Need to implement update and delete
}