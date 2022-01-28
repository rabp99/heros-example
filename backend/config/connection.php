<?php
class Connection {
  private $servername = "localhost";
  private $username = "root";
  private $password = "";
  private $dbname = "superheroes";

  public function getConnection() {
    $dbn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
    return $dbn;
  }
}