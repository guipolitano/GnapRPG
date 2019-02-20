<?php require_once "criaturas.php"; ?>
<?php
$idMonster= $_POST['monster_id'];

$monstro=$bestiary['monster'][$idMonster];

//IMG


//MANUAL
if ($monstro['source']=='MM') {
    $source='MONSTER MANUAL';
} elseif ($monstro['source']=='DMG') {
    $source='DUNGEON MASTER GUIDE';
} elseif ($monstro['source']=='GGR') {
    $source='GUILDMASTERS’S GUIDE TO RAVNICA';
} elseif ($monstro['source']=='MTF') {
    $source='MORDENKAINEN’S TOME OF FOES';
} elseif ($monstro['source']=='PHB') {
    $source='PLAYER’S HANDBOOK';
} elseif ($monstro['source']=='VGM') {
    $source='VOLO’S GUIDE TO MONSTERS';
} elseif ($monstro['source']=='XGE') {
    $source='XANATHAR’S GUIDE TO EVERYTHING';
}

//TAMANHO
if ($monstro['size']=='L') {
    $monstro['size']='Large';
} elseif ($monstro['size']=='H') {
    $monstro['size']='Huge';
} elseif ($monstro['size']=='M') {
    $monstro['size']='Medium';
} elseif ($monstro['size']=='G') {
    $monstro['size']='Gargantuan';
} elseif ($monstro['size']=='S') {
    $monstro['size']='Small';
} elseif ($monstro['size']=='T') {
    $monstro['size']='Tiny';
}
//TIPO
if (is_array($monstro['type'])) {
    $tipo = $monstro['type']['type'];
} else {
    $tipo = $monstro['type'];
}
//ALINHAMENTO
if (is_array($monstro['alignment'])) {
    for ($i=0; $i<2; $i++) {
        if (isset($monstro['alignment'][$i])&&$monstro['alignment'][$i]=='C') {
            $monstro['alignment'][$i] = 'Chaotic';
        } elseif (isset($monstro['alignment'][$i])&&$monstro['alignment'][$i]=='E') {
            $monstro['alignment'][$i] = 'Evil';
        } elseif (isset($monstro['alignment'][$i])&&$monstro['alignment'][$i]=='G') {
            $monstro['alignment'][$i] = 'Good';
        } elseif (isset($monstro['alignment'][$i])&&$monstro['alignment'][$i]=='L') {
            $monstro['alignment'][$i] = 'Lawful';
        } elseif (isset($monstro['alignment'][$i])&&$monstro['alignment'][$i]=='N') {
            $monstro['alignment'][$i] = 'Neutral';
        }
    }
    if ($monstro['alignment'][0]=='U') {
        $monstro['alignment'][0] = 'Unaligned';
        $alinhamento = $monstro['alignment'][0];
    } elseif ($monstro['alignment'][0]=='A') {
        $monstro['alignment'][0] = 'any alignment';
        $alinhamento = $monstro['alignment'][0];
    } else {
        $alinhamento = $monstro['alignment'][0].' '.$monstro['alignment'][1];
    }
}

$cr = null;
if(is_array($monstro['cr'])){
  $cr = $monstro['cr']['cr'];
}else{
  $cr = $monstro['cr'];
}
//HP
$hp = $monstro['hp']['average'].' ('.$monstro['hp']['formula'].')';

//VELOCIDADE
$velocidade= null;
foreach ($monstro['speed'] as $velKey => $velValue) {
  if($velKey === array_key_last($monstro['speed'])){
    $velocidade = $velocidade.' '.ucfirst($velKey).' '.$velValue.' ft.;';
  }else{
    $velocidade = $velocidade.' '.ucfirst($velKey).' '.$velValue.' ft.,';
  }
}

//SAVING THROWS
$save= null;
foreach ($monstro['save'] as $saveKey => $saveValue) {
  if($saveKey === array_key_last($monstro['save'])){
    $save = $save.' '.ucfirst($saveKey).' '.$saveValue.';';
  }else{
    $save = $save.' '.ucfirst($saveKey).' '.$saveValue.', ';
  }
}
//SKILLS
$skill= null;
foreach ($monstro['skill'] as $skillKey => $skillValue) {
    if($skillKey === array_key_last($monstro['skill'])){
      $skill = $skill.' '.ucfirst($skillKey).' '.$skillValue.';';
    }else{
      $skill = $skill.' '.ucfirst($skillKey).' '.$skillValue.', ';
    }
}
//CONDITION IMMUNE
$conditionImm = null;
foreach ($monstro['conditionImmune'] as $conImmKey => $conImmValue) {
  if($conImmKey === array_key_last($monstro['conditionImmune'])){
    $conditionImm = $conditionImm.' '.ucfirst($conImmValue).';';
  }else{
    $conditionImm = $conditionImm.' '.ucfirst($conImmValue).', ';
  }
}



echo
'
<table class="table">
<tr>
  <th colspan="6" style="border-top:none; padding: 3px">
  <img src="https:/raw.githubusercontent.com/TheGiddyLimit/TheGiddyLimit.github.io/master/img/'.$monstro['source'].'/'.$monstro['name'].'.png" alt="" class="rounded mx-auto d-block" style="max-width:40%">
    <div class="name-inner">
      <!-- LINHA NOME  -->
      <span><b>'.strtoupper($monstro['name']).'</b></span>
      <span style="float:right; font-size: 14px"><i>'.$source.' p.'.strtoupper($bestiary['monster'][$idMonster]['page']).'</i></span>
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
          <td class="" style="text-align: center">'.$cr.'</td>
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
      <p><b>Saving Throws:</b>'.$save.'</p>
      <p><b>Skills: </b>'.$skill.'</p>
      <p><b>Senses: </b>'.ucfirst($monstro['senses']).', passive perception '.$monstro['passive'].'</p>
      <p><b>Resistances: </b>';

      foreach ($monstro['resist'] as $resistId) {
        if(end($resistId)){
          echo ucfirst($resistId).'; ';
        } else{
          echo ucfirst($resistId).', ';
        }
          foreach ($resistId as $resistKey => $resistValue) {
              if ($resistKey=='resist') {
                  foreach ($resistValue as $resistTypeKey => $resistType) {
                      echo ucfirst($resistType).', ';
                  }
              } else {
                if(end($resistId)){
                  echo $resistValue.'; ';
                } else{
                  echo ucfirst($resistValue).', ';
                }

              }
          }
      }
echo
      '</p>
      <p><b>Damage Imm.: </b>';

      foreach ($monstro['immune'] as $immuneId) {
        if(end($immuneId)){
          echo ucfirst($immuneId).'; ';
        } else{
          echo ucfirst($immuneId).', ';
        }
          foreach ($immuneId as $immuneKey => $immuneValue) {
              if ($immuneKey=='immune') {
                  foreach ($immuneValue as $immuneTypeKey => $immuneType) {
                      echo ucfirst($immuneType).', ';
                  }
              } else {
                if(end($immuneId)){
                  echo $immuneValue.'; ';
                } else{
                  echo ucfirst($immuneValue).', ';
                }

              }
          }
      }
echo
      '</p>
      <p><b>Condition Imm.: </b>'.$conditionImm.'</p>
      <p><b>Languages: </b>'.$monstro['languages'].'</p>
    </div>
  </td>
</tr>

<tr class="text compact">
  <td colspan="6">
      ';
      foreach ($monstro['trait'] as $traitId) {
          foreach ($traitId as $traitKey => $traitValue) {
              if ($traitKey=='name') {
                  echo '<b>'.$traitValue.'</b><br>';
              } elseif ($traitKey=='entries') {
                  foreach ($traitValue as $entryKey => $entry) {
                      echo $entry.'<br>';
                  }
              }
          }
      }
    echo '<br>';
  foreach ($monstro['spellcasting'] as $spellId) {
    echo '<b>'.$spellId['name'].': </b>';
    foreach ($spellId['headerEntries'] as $headerValue) {
      echo $headerValue;
    }

    if(isset($spellId['will'])){
      echo '<br><a style="color:orange">At will:</a> ';
    }
    foreach ($spellId['will'] as $will) {
      echo '<u>';
      echo ' '.$will.',';
      echo '</u>';
    }

    foreach ($spellId['daily'] as $dailyKey => $daily) {
      if($dailyKey=='1'){
        echo '<br>';
        echo '<a style="color:orange">1/day: ';
        foreach ($daily as $dailyName) {
          echo '<u style="color:white">';
          echo $dailyName.', ';
          echo '</u>';
        }
      }else if($dailyKey=='2'){
        echo '<br>';
        echo '<a style="color:orange">2/day: ';
        foreach ($daily as $dailyName) {
          echo '<u style="color:white">';
          echo $dailyName.', ';
          echo '</u>';
        }
      }else if($dailyKey=='3'){
        echo '<br>';
        echo '<a style="color:orange">2/day: ';
        foreach ($daily as $dailyName) {
          echo '<u style="color:white">';
          echo $dailyName.', ';
          echo '</u>';
        }
      }else if($dailyKey=='1e'){
        echo '<br>';
        echo '<a style="color:orange">1/day each: ';
        foreach ($daily as $dailyName) {
          echo '<u style="color:white">';
          echo $dailyName.', ';
          echo '</u>';
        }
      } else if($dailyKey=='2e'){
        echo '<br>';
        echo '<a style="color:orange">2/day each: ';
        foreach ($daily as $dailyName) {
          echo '<u style="color:white">';
          echo $dailyName.', ';
          echo '</u>';
        }
      }else if($dailyKey=='3e'){
        echo '<br>';
        echo '<a style="color:orange">3/day each: ';
        foreach ($daily as $dailyName) {
          echo '<u style="color:white">';
          echo $dailyName.', ';
          echo '</u>';
        }
      }
    }
    echo '<br>';
    foreach ($spellId['spells'] as $spellKey => $spell) {
      if($spellKey==0){
        echo '<p style="color:orange">Cantrips: </p>';
        foreach ($spell['spells'] as $spellName) {
          echo '<u>';
          echo $spellName.', ';
          echo '</u>';
        }
      }else {
        echo '<a style="color:orange">'.$spellKey.'st level ('.$spell['slots'].' slots): </a>';
        foreach ($spell['spells'] as $spellName) {
          echo '<u>';
          echo $spellName.', ';
          echo '</u>';
        }
      }
      echo '<br>';
    }
    echo '<br>';
    foreach ($spellId['footerEntries'] as $footerValue) {
      echo $footerValue;
    }
  }



echo
'
</td>
</tr>
<tr class="mon__stat-header-underline">
  <td colspan="6">
    <p><b>Actions:</b></p>
    ';
    foreach ($monstro['action'] as $actionId) {
        foreach ($actionId as $actionKey => $actionValue) {
            if ($actionKey=='name') {
                echo '<b style="color:white">'.$actionValue.'</b><br>';
            } elseif ($actionKey=='entries') {
                foreach ($actionValue as $actionEntryKey => $actionEntry) {
                    echo $actionEntry.'<br><br>';
                }
            }
        }
    }

echo '
  </td>
</tr>
'
;
if ($monstro['legendary']) {
    echo '<tr>
    <td colspan="6">
      <div class="rend__compact-stat">
        <p><b>Legendary:</b></p>';
    foreach ($monstro['legendary'] as $legendaryId) {
        foreach ($legendaryId as $legendaryKey => $legendaryValue) {
            if ($legendaryKey=='name') {
                echo '<b style="color:white">'.$legendaryValue.'</b><br>';
            } elseif ($legendaryKey=='entries') {
                foreach ($legendaryValue as $legendaryKey => $legendaryEntry) {
                    echo $legendaryEntry.'<br><br>';
                }
            }
        }
    }
    echo '</div>
    </td>
  </tr>';
}
echo
'
</table>
';


 ?>
