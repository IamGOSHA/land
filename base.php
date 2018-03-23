<?php
$_SESSION['loader'] = 0;
$host = "localhost";
$user = "root";
$password = "";
$database = "test";

$link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));
 
// выполняем операции с базой данных
$query ='SELECT * FROM `works` LIMIT '.$_SESSION['loader'].', '.($_SESSION['loader'] + 3);
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if(!mysqli_num_rows($result)){
	if($_SESSION['loader'] = 0) exit('empty');
	else exit('end');
	exit;
}
$_SESSION['loader'] += 3;
	while($row = mysqli_fetch_assoc($result))
	{
	$id = $row['id'];
      $text = $row['text'];
       $img = $row['img'];
        $link = $row['link'];
        echo '<div class="item"><img src="img/'.$img.'" alt=""></div>';

	}
// закрываем подключение
