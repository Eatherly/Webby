<?php
include_once "../connection.php";

$query = "DELETE FROM `movies_list` WHERE  `name` LIKE '%$_GET[id]%' LIMIT 1";
$result = mysqli_query($connection, $query);


?>