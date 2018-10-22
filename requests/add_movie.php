<?php
include_once "../connection.php";


$query = "INSERT INTO `movies_list` (`name`, `year`, `format`, `actors_list`)  VALUES ('".$_GET[name]."','".$_GET[year]."','".$_GET[format]."','".$_GET[actors]."');";
$result = mysqli_query($connection, $query);
$query_clean="DELETE FROM `movies_list` WHERE  `name`='';";
$result_clean= mysqli_query($connection, $query_clean);
?>