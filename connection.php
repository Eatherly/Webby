<?php
$connection = mysqli_connect('localhost', 'root', '', 'movies');
mysqli_set_charset($connection, 'utf8');
if (mysqli_connect_errno())
    echo mysqli_connect_error();
?>