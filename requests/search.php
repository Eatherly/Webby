<?php
include_once "../connection.php";

$query = "SELECT * FROM `movies_list` WHERE  `name` LIKE '%".$_GET[name]."%' OR `actors_list` LIKE '%".$_GET[name]."%'";
$result = mysqli_query($connection, $query);
$rows = array();
while ($r = mysqli_fetch_assoc($result)) {

    
        $rows[] = $r;
    
}
if (count($rows) == 0)
    return false;
else
    echo json_encode($rows);





?>