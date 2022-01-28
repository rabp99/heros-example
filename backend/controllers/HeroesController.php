<?php
require_once('models/HeroesModel.php');

class HeroesController {
    private $heroesModel;
    private $id;

    public function __construct($id) {
        $this->heroesModel = new HeroesModel();
        $this->id = $id;
    }

    public function index() {
        $heroes = $this->heroesModel->find();
        echo json_encode($heroes);
    }
    
    public function view() {
        $hero = $this->heroesModel->get($this->id);
        echo json_encode($hero);
    }
    
    public function add() {
        $data = file_get_contents('php://input');
        $heroe = json_decode( $data, true );

        if ($this->heroesModel->save($heroe)) {
            $message = 'El Héroe fue guardado correctamente';
        } else {
            $message = 'El Héroe no fue guardado correctamente';
        }
        echo json_encode($message);
    }

    public function edit() {
    }

    public function delete() {
        $hero = $this->heroesModel->get($this->id);
        if ($this->heroesModel->delete($hero)) {
            $message = 'El Héroe fue eliminado correctamente';
        } else {
            $message = 'El Héroe no fue eliminado correctamente';
        }
        echo json_encode($message);
    }
}