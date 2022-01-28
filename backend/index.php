<?php
$path = $_SERVER['REDIRECT_URL'];
$query = $_SERVER['QUERY_STRING'];

$urlParts = explode("/", $path);

$method = $_SERVER['REQUEST_METHOD'];
$controller = $urlParts[3];
$id = $urlParts[4];

switch ($method) {
    case 'POST':
        $controllerAction = 'add';
        break;
    case 'GET':
        if ($id) {
            $controllerAction = 'view';
        } else {
            $controllerAction = 'index';
        }
        break;
    case 'PUT':
        $controllerAction = 'edit';
        break;
    case 'DELETE':
        $controllerAction = 'delete';
        break;
}

$controllerName = ucfirst($controller) . 'Controller';
require_once("controllers/$controllerName.php");
$controllerObject = new $controllerName($id);
$controllerObject->$controllerAction();