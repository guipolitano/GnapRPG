<?php require_once "criaturas.php"; ?>
<?php

$valor= $_POST['creature_id'];

for($i=0; $i<=count($bestiary['monster'][$valor]['action']); $i++){
  if($bestiary['monster'][$valor]['action'][$i]['name']){
   if($i==0){
     echo '<option value="">Selecione o Ataque</option>';
     echo '<option value="'.$bestiary['monster'][$valor]['action'][$i]['name'].'">'.$bestiary['monster'][$valor]['action'][$i]['name'].'</option>';
   } else{
     echo '<option value="'.$bestiary['monster'][$valor]['action'][$i]['name'].'">'.$bestiary['monster'][$valor]['action'][$i]['name'].'</option>';
    }
  }
}


?>
