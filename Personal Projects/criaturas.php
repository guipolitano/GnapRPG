<?php

$bestiaryLink = 'bestiary-mm.json';
$data = file_get_contents($bestiaryLink);
$bestiary = json_decode($data,true);

 ?>
