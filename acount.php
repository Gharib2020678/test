<?php    
include_once("admin/inc/config.php");
$page=$_POST['page'];





if ($page=="data_en")
{
    $a = $_POST['a'];
    $b	 = $_POST['b'];
    $c = md5($_POST['c']);



    $insert = "INSERT INTO accounts_user (named,phone,user_password)
	VALUES ('$a','$b','$c')";
       $query= mysqli_query($conn,$insert);

    }

?>
