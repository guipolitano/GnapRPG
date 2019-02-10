<?php
$arquivo = fopen('arquivo.txt', 'a');

$criatura = $_POST['criatura'];
$ataque = $_POST['ataque'];
$alvo = $_POST['alvo'];

$multiAlvos = implode(" -t ", $alvo);

if(count($alvo)>1){
  $alias = "!i cast \"$ataque\" -t \"$multiAlvos\" ". PHP_EOL;
}else{
  $alias = "!i a \"$alvo[0]\" \"$ataque\"". PHP_EOL;
}


fwrite($arquivo, $alias);

fclose($arquivo);

header('Location: index.php');

 ?>
