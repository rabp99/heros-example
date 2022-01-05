<?php
require_once './../config/connection.php';

$query = "SELECT * FROM heroes";
$result = mysqli_query($conn, $query);

$heroes = [];
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $heroes[] = $row;
    }
}

echo json_encode($heroes);