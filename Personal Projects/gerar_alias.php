<?php require_once "criaturas.php"; ?>
<?php

$attackName= $_POST['creature_name'];
$alvo = $_POST['target_name'];

$multiAlvos = explode(",", $alvo);

echo '!i a '.$alvo.''.$attackName;




 ?>
