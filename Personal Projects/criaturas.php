<?php

$bestiaryLink = 'bestiary-mm.json';
$data = file_get_contents($bestiaryLink);
$bestiary = json_decode($data,true);

// echo '<pre>';
// print_r($bestiary);
// echo '</pre>';

/*
Escolher o Monstro: ['monster'][id]['name']
Escolher o Ataque: ['monster'][id]['action'][idAcao]['name']
Descrição do Ataque['monster'][id]['action'][idAcao]['name']['entries'][idDesc]
Ações Lendárias: ['monster'][id]['legendary'][idLeg]['name']['entries'][idDesc]
*/
 ?>
