<?php

$bestiaryLink = 'full_bestiary.json';
$data = file_get_contents($bestiaryLink);
$bestiary = json_decode($data,true);

 ?>
