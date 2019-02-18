<?php require_once "criaturas.php"; ?>
<?php


  $attackName= $_POST['creature_name'];
  $alvo = $_POST['target_name'];
  $attackType = $_POST['attack_type'];

  $multiAlvos = implode(' ', $alvo);

  if ($attackType == 'cast') {
      echo '!i cast "'.$attackName.'" '.$multiAlvos;
  } else {
      echo '!i a '.$multiAlvos.' "'.$attackName.'"';
  }








 ?>
