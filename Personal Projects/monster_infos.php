<?php require_once "criaturas.php"; ?>
<?php
$idMonster= $_POST['monster_id'];

$monstro=$bestiary['monster'][$idMonster];

//TAMANHO
if($monstro['size']=='L'){
$monstro['size']='Large';
} else if($monstro['size']=='H'){
  $monstro['size']='Huge';
} else if($monstro['size']=='M'){
  $monstro['size']='Medium';
} else if($monstro['size']=='G'){
  $monstro['size']='Gargantuan';
} else if($monstro['size']=='S'){
  $monstro['size']='Small';
} else if($monstro['size']=='T'){
  $monstro['size']='Tiny';
}
//TIPO
if(is_array($monstro['type'])){
  $tipo = $monstro['type']['type'];
} else{
  $tipo = $monstro['type'];
}
//ALINHAMENTO
if(is_array($monstro['alignment'])){
  for($i=0; $i<2; $i++){
    if($monstro['alignment'][$i]=='C'){
      $monstro['alignment'][$i] = 'Chaotic';
    }else if($monstro['alignment'][$i]=='E'){
      $monstro['alignment'][$i] = 'Evil';
    }else if($monstro['alignment'][$i]=='G'){
      $monstro['alignment'][$i] = 'Good';
    }else if($monstro['alignment'][$i]=='L'){
      $monstro['alignment'][$i] = 'Lawful';
    }else if($monstro['alignment'][$i]=='N'){
      $monstro['alignment'][$i] = 'Neutral';
    }
  }
  if($monstro['alignment'][0]=='U'){
    $monstro['alignment'][0] = 'Unaligned';
    $alinhamento = $monstro['alignment'][0];

  }else if($monstro['alignment'][0]=='A') {
    $monstro['alignment'][0] = 'any alignment';
    $alinhamento = $monstro['alignment'][0];
  }else{
    $alinhamento = $monstro['alignment'][0].' '.$monstro['alignment'][1];
  }
}
//HP
$hp = $monstro['hp']['average'].' ('.$monstro['hp']['formula'].')';

//VELOCIDADE

foreach ($monstro['speed'] as $velKey => $velValue) {
  $velocidade = $velocidade.' '.ucfirst($velKey).' '.$velValue.'.ft,';
}

//SKILLS
foreach ($monstro['skill'] as $skillKey => $skillValue) {
  $skill = $skill.' '.ucfirst($skillKey).' '.$skillValue.', ';
}

//IMUNIDADES
foreach ($monstro['immune'] as $immuneValue) {
  $immune = $immune.' '.ucfirst($immuneValue).', ';
}

//Traits
#TODO FAZER OS TRAITS
foreach ($monstro['trait'] as $traitKey => $traitValue) {
  if($traitKey == 'name'){

  }
}


echo
'
<table class="table">
<tr>
  <th colspan="6" style="border-top:none; padding: 3px">
    <div class="name-inner">
      <!-- LINHA NOME  -->
      <span><b>'.strtoupper($monstro['name']).'</b></span>
      <span style="float:right">MONSTER MANUAL p.'.strtoupper($bestiary['monster'][$idMonster]['page']).'</span>
      <!--  -->
    </div>
  </th>
</tr>
<tr>
  <td colspan="6" style="padding: 1px">
    <i>'.$monstro['size'].' '.$tipo.', '.$alinhamento.'</i>
  </td>
</tr>
<tr>
  <td style="border-top:0px; padding: 1px">
    <table class="table" style="background-color: #2e3135">
        <tr>
          <th class="" style="text-align: center">AC</th>
          <th class="vl"></th>
          <th class="" style="text-align: center">HP</th>
          <th class="vl"></th>
          <th class="" style="text-align: center">Speed</th>
          <th class="vl"></th>
          <th class="" style="text-align: center">CR</th>
        </tr>
        <tr>
          <td class="" style="text-align: center">'.$monstro['ac'].'</td>
          <td class="vl"></td>
          <td class="" style="text-align: center">'.$hp.'</td>
          <td class="vl"></td>
          <td class="" style="text-align: center">'.$velocidade.'</td>
          <td class="vl"></td>
          <td class="" style="text-align: center">'.$monstro['cr'].'</td>
        </tr>
    </table>
  </td>
</tr>

<tr>
  <td colspan="6" style="border-top:0px; padding: 1px">
    <table class="table" style="background-color: #2e3135">
      <tbody>
        <tr>
          <th class="col-sm-4">STR</th>
          <th class="vl"></div>
          <th class="col-sm-4">DEX</th>
          <th class="vl"></div>
          <th class="col-sm-4">CON</th>
          <th class="vl"></div>
          <th class="col-sm-4">INT</th>
          <th class="vl"></div>
          <th class="col-sm-4">WIS</th>
          <th class="vl"></div>
          <th class="col-sm-4">CHA</th>
        </tr>
        <tr>
          <td class="col-sm-4">'.$monstro['str'].'</td>
          <th class="vl"></div>
          <td class="col-sm-4">'.$monstro['dex'].'</td>
          <th class="vl"></div>
          <td class="col-sm-4">'.$monstro['con'].'</td>
          <th class="vl"></div>
          <td class="col-sm-4">'.$monstro['int'].'</td>
          <th class="vl"></div>
          <td class="col-sm-4">'.$monstro['wis'].'</td>
          <th class="vl"></div>
          <td class="col-sm-4">'.$monstro['cha'].'</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>

<tr>
  <td colspan="6">
    <div class="rend__compact-stat">
      <p><b>Skills:</b>'.$skill.'</p>
      <p><b>Senses: </b>'.ucfirst($monstro['senses']).'</p>
      <p><b>Languages: </b>'.$monstro['languages'].'</p>
      <p><b>Damage Imm.:</b>'.$immune.'</p>
    </div>
  </td>
</tr>

<tr class="text compact">
  <td colspan="6">
    <p><b>Traits:</b></p>
      <div>nomeTrait.
      <p>descriçaoTrait</p>
    </div>
  </td>
</tr>

<tr class="mon__stat-header-underline">
  <td colspan="6">
    <p><b>Actions:</b></p>
  </td>
</tr>
<tr class="text compact">
  <td colspan="6">
    <div>nomeAtaque.
      <p>descriçaoAtaque</p>
    </div>
  </td>
</tr>
</table>
';


 ?>
