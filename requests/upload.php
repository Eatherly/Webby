<?php
include_once "../connection.php";

function multiexplode ($delimiters,$string) {

    $ready = str_replace($delimiters, $delimiters[0], $string);
    $launch = explode($delimiters[0], $ready);
    return  $launch;
}

$exploded = multiexplode(array("Title:","Release Year:","Format:","Stars:"),$_GET[file]);

$query = "INSERT INTO `movies_list` (`name`, `year`, `format`, `actors_list`)  VALUES (' ".trim($exploded[1])."','$exploded[2]','$exploded[3]','$exploded[4]');";
$result = mysqli_query($connection, $query);
$query_clean="DELETE FROM `movies_list` WHERE  `name`='';";
$result_clean= mysqli_query($connection, $query_clean);
?>