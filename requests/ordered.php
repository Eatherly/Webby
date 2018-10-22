<?php
include_once "../connection.php";
$query_clean="DELETE n1 FROM movies_list n1, movies_list n2 WHERE n1.id > n2.id AND n1.name = n2.name;";
$result_clean= mysqli_query($connection, $query_clean);

$query = "SELECT `name` FROM `movies_list` ORDER BY `name`";
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