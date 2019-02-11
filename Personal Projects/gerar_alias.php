<?php require_once "criaturas.php"; ?>
<?php

if(isset($_POST['creature_name']) && isset($_POST['target_name'])){
  $attackName= $_POST['creature_name'];
  $alvo = $_POST['target_name'];
  $multiAlvos = implode(' ',$alvo);


  echo '!i a '.$multiAlvos.' '.$attackName;
  echo '
';
  echo '!i cast '.$attackName.' '.$multiAlvos;



}

 ?>
