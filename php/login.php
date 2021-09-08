<?php
    $e = $_POST['userEmail'];
    $p = $_POST['userPassword'];

    $db = mysqli_connect("localhost", "root", "", "vietnamese_food");
    
    $sql = "select * from useracount where userEmail='$e' and userPassword = '$p' ";
    $rs = mysqli_query($db, $sql);

    if (mysqli_num_rows($rs) > 0)
    {
        echo "<h1>Dang nhap thanh cong</h1>";
    }
    else
    {
        echo "<h1>Dang nhap that bai<h1>";
    }
?>
