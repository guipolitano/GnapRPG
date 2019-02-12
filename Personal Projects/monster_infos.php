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
  $velocidade = $velocidade.' '.ucfirst($velKey).' '.$velValue.' .ft,';
}



echo
'<tr>
  <th class="rnd-name name" colspan="6">
    <div class="name-inner">
      <!-- LINHA NOME  -->
      <span><b>'.strtoupper($monstro['name']).'</b></span>
      <span style="float:right">MONSTER MANUAL p.'.strtoupper($bestiary['monster'][$idMonster]['page']).'</span>
      <!--  -->
    </div>
  </th>
</tr>
<!-- LINHA TAMANHO TIPO ALINHAMENTO  -->
<tr>
  <td colspan="6">
    <i>'.$monstro['size'].' '.$tipo.', '.$alinhamento.'</i>
  </td>
</tr>
<!--  -->
<tr>
  <td class="borda">
  </td>
</tr>
<tr>
  <td colspan="6">
    <table class="summary no-back" style="position: relative;">
      <tbody>
        <tr>
          <th class="col-sm-4">Armor Class</th>
          <th class="vl"></div>
          <th class="col-sm-4">Hit Points</th>
          <th class="vl"></div>
          <th class="col-sm-4">Speed</th>
          <th class="vl"></div>
          <th class="col-sm-4">Challenge</th>
        </tr>
        <!-- LINHA ATRIBUTOS  -->
        <tr>
          <td class="col-sm-4">'.$monstro['ac'].'</td>
          <th class="vl"></div>
          <td class="col-sm-4" style="padding-right:0px">'.$hp.'</td>
          <th class="vl"></div>
          <td class="col-sm-4" style="padding-right:0px">'.$velocidade.'</td>
          <th class="vl"></div>
          <td class="col-sm-4">'.$monstro['cr'].'</td>
        </tr>
        <!--  -->
      </tbody>
    </table>
  </td>
</tr>
<tr>
  <td class="borda">
  </td>
</tr>
<tr>
  <td colspan="6">
    <table class="summary striped-even">
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
  <td class="borda">
  </td>
</tr>
<tr>
  <td colspan="6">
    <div class="rend__compact-stat">
      <p><b>Skills:</b></p>
      <p><b>Senses:</b></p>
      <p><b>Languages:</b></p>
      <p><b>Damage Imm.:</b></p>
    </div>
  </td>
</tr>
<tr>
  <td class="borda">
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
</tr>';


 ?>
