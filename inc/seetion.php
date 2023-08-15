<?php
include_once('config.php');
if (isset($_SESSION['id'])){
$sql = mysqli_query($conn, "SELECT * FROM accounts_user WHERE id_u  = '$_SESSION[id]' ");
if (mysqli_num_rows($sql) !=1 ) {
    header("location: ./shop-grid.php");
}

}
else{
  header("location: ./register.php ");
}
?>



 