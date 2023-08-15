<?php 
$host = "localhost";
$username = "root";
$password = "root";
$BD_name = "store_g";

$conn = mysqli_connect($host,$username,$password,$BD_name); 
mysqli_set_charset ($conn, "utf8");

if (!$conn){

echo mysqli_connect_error ("خطا فى عملية الاتصال") . mysqli_connect_errorno();

}

/*
function close_db(){
global $coon;
mysqli_close($coon);

}*/

?>








