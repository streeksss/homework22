<?php

if($_GET["country"] == 1) echo json_encode (array ("1" => "Kiev", "2" => "Cherkasy", "3" => "Odessa"));
else if($_GET["country"] == 2) echo json_encode (array ("4" => "Marsel", "5" => "Paris"));
else if($_GET["country"] == 3) echo json_encode (array ("6" => "London", "7" => "Manchester", "8" => "Liverpool"));

?>