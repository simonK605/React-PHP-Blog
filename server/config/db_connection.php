<?php

class DbConnection
{
    private static $instance;
    private $conn;

    private function __construct()
    {
        $hostname = 'localhost';
        $username = 'root';
        $password = '111111';
        $database = 'react_php';

        try {
            $this->conn = new \PDO("mysql:host=$hostname;dbname=$database", $username, $password);

            $this->conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            die();
        }
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance->conn;
    }
}
