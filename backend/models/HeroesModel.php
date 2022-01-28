<?php
require_once 'config/Connection.php';

class HeroesModel {
    private $connection;

    public function __construct() {
        $this->connection = new Connection();
    }

    public function find() {
        $cn = $this->connection->getConnection();

        $query = "SELECT * FROM heroes";
        $data = $cn->query($query);
        
        $heroes = $data->fetchAll(PDO::FETCH_ASSOC); 
        return $heroes;
    }

    public function get($id) {
        $cn = $this->connection->getConnection();

        $query = "SELECT * FROM heroes where id = $id limit 1";
        $data = $cn->query($query);
        
        $heroe = $data->fetchAll(PDO::FETCH_ASSOC)[0];
        return $heroe;
    }

    public function save($heroe) {
        $cn = $this->connection->getConnection();
        
        $query = "INSERT INTO heroes 
            (image, hero_name, actor_name, nation, cell_phone) values
            (:image, :hero_name, :actor_name, :nation, :cell_phone)";
        $statement = $cn->prepare($query);

        return $statement->execute([
            ':image' => '',
            ':hero_name' => $heroe['hero_name'],
            ':actor_name' => $heroe['actor_name'],
            ':nation' => $heroe['nation'],
            ':cell_phone' => $heroe['cell_phone']
        ]);
    }

    public function delete($hero) {
        $cn = $this->connection->getConnection();
        
        $query = "DELETE FROM heroes WHERE id = :id";
        $statement = $cn->prepare($query);
        
        return $statement->execute([
            ':id' => $hero['id']
        ]);
    }
}