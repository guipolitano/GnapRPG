<?php require_once "criaturas.php"; ?>

<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Avrae Attack Alias Generator</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <link rel="stylesheet" href="style.css">

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  <script src="script.js"></script>
  <script>
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();
      });
</script>

</head>

<body>

  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="logo.png" width="40" height="40" class="d-inline-block align-center" alt="">
      PACHOLAS AVRAE ATTACK GENERATOR
    </a>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card-dados">
          <div class="card">
            <div class="card-header">
              DADOS
            </div>
            <div class="card-body">
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card-login">
          <div class="card">

            <div class="card-header">
              CRIAR ALIAS
            </div>

            <div class="card-body">
              <form action="gerar_alias.php" method="post">
                <div class="form-group">

                  <div class="form-group">
                    <label class="col-md-4 control-label" for="selectCreature"><b>Criatura</b></label>
                    <div class="col-md-15">

                      <select id="selectCreature" name="criatura" class="form-control">
                        <option value="">Selecione a Criatura</option>
                        <?php
                      foreach ($bestiary as $monsterArray) {
                        foreach ($monsterArray as $monsterId => $monsterObject) {
                          foreach ($monsterObject as $monsterAtributes => $atributo) {
                            if($monsterAtributes=='name'){
                              ?>
                        <option value="<?php echo $monsterId?>">
                          <?php echo $atributo?>
                        </option>
                        <?php
                            } else{
                              continue;
                            }
                          }
                        }
                      }
                      ?>
                      </select>

                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-4 control-label" for="selectAttack"><b>Ataque</b></label>
                    <div class="col-md-15">

                      <select id="selectAttack" name="ataque" class="form-control">

                        <option value="">Selecione o Ataque</option>

                      </select>

                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-4 control-label" for="radios">Tipo</label>
                    <div class="col-md-15">
                      <label class="radio-inline" for="radios-0">
                        <input class="tipoGolpe" type="radio" name="radios" id="radios-0" value="attack" checked>
                        Attack
                      </label>
                      <label class="radio-inline" for="radios-1">
                        <input class="tipoGolpe" type="radio" name="radios" id="radios-1" value="cast">
                        Cast
                      </label>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-4 control-label" for="checkboxes"><b>Alvo(s)</b></label>
                    <div class="col-md-15">
                      <label class="checkbox-inline" for="checkboxes-0">
                        <input class="checkbox" type="checkbox" name="alvo[]" id="checkboxes-0" value="Nyrvus">
                        Nyrvus
                      </label>
                      <label class="checkbox-inline" for="checkboxes-1">
                        <input class="checkbox" type="checkbox" name="alvo[]" id="checkboxes-1" value="Guughul">
                        Guughul
                      </label>
                      <label class="checkbox-inline" for="checkboxes-2">
                        <input class="checkbox" type="checkbox" name="alvo[]" id="checkboxes-2" value="Pica">
                        Pica
                      </label>
                      <label class="checkbox-inline" for="checkboxes-3">
                        <input class="checkbox" type="checkbox" name="alvo[]" id="checkboxes-3" value="Cox">
                        Cox
                      </label>
                      <label class="checkbox-inline" for="checkboxes-4">
                        <input class="checkbox" type="checkbox" name="alvo[]" id="checkboxes-4" value="Galo">
                        Galo
                      </label>
                      <label class="checkbox-inline" for="checkboxes-5">
                        <input class="checkbox" type="checkbox" name="alvo[]" id="checkboxes-5" value="Salva Burros">
                        Salva Burros
                      </label>

                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-15">
                      <textarea class="form-control" id="textarea" name="textarea" placeholder="!i a"></textarea>
                    </div>
                  </div>
              </form>

            </div>
            <button class="btn btn-success" data-container="body" data-toggle="popover" data-placement="right" data-content="Copiado!" onclick="copyPaste()">Copiar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card-info">
        <div class="card">
          <div class="card-header">
            INFO
          </div>
          <!-- -------------------------------------------------------- -->
          <div class="card-body">
            <div class="panel-content-wrapper-inner">
              <table class="stats">
                <tr>
                  <th class="rnd-name name" colspan="6">
                    <div class="name-inner">
                      <span class="nomeMonstro"><b>NOME</b></span>
                      <span class="manualFonte">Fonte e pg</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td colspan="6"><i>TAMANHO, TIPO, ALINHAMENTO</i></td>
                </tr>
                <tr>
                  <td colspan="6">
                    <div class="border"></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <table class="summary striped-even">
                      <tbody>
                        <tr>
                          <!-- #TODO Ajustar texto e colunas -->
                          <th class="col-1 text-align-center">Armor Class</th>
                          <th class="col-1 text-align-center">Hit Points</th>
                          <th class="col-1 text-align-center">Speed</th>
                          <th class="col-1 text-align-center">Challenge Rating</th>
                        </tr>
                        <tr>
                          <td class="text-align-center roller render-roller">ValorAC</td>
                          <td class="text-align-center roller render-roller">ValorHP</td>
                          <td class="text-align-center roller render-roller">Velocidade</td>
                          <td class="text-align-center roller render-roller">CR</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <div class="border"></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <table class="summary striped-even">
                      <tbody>
                        <tr>
                          <th class="col-2 text-align-center">STR</th>
                          <th class="col-2 text-align-center">DEX</th>
                          <th class="col-2 text-align-center">CON</th>
                          <th class="col-2 text-align-center">INT</th>
                          <th class="col-2 text-align-center">WIS</th>
                          <th class="col-2 text-align-center">CHA</th>
                        </tr>
                        <tr>
                          <td class="text-align-center"><span class="roller render-roller" title="Strength" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;18 (+4)&quot;,&quot;name&quot;:&quot;Strength&quot;,&quot;toRoll&quot;:&quot;1d20+4&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;+4&quot;}">18
                              (+4)</span></td>
                          <td class="text-align-center"><span class="roller render-roller" title="Dexterity" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;13 (+1)&quot;,&quot;name&quot;:&quot;Dexterity&quot;,&quot;toRoll&quot;:&quot;1d20+1&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;+1&quot;}">13
                              (+1)</span></td>
                          <td class="text-align-center"><span class="roller render-roller" title="Constitution" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;16 (+3)&quot;,&quot;name&quot;:&quot;Constitution&quot;,&quot;toRoll&quot;:&quot;1d20+3&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;+3&quot;}">16
                              (+3)</span></td>
                          <td class="text-align-center"><span class="roller render-roller" title="Intelligence" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;8 (-1)&quot;,&quot;name&quot;:&quot;Intelligence&quot;,&quot;toRoll&quot;:&quot;1d20-1&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;-1&quot;}">8
                              (-1)</span></td>
                          <td class="text-align-center"><span class="roller render-roller" title="Wisdom" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;12 (+1)&quot;,&quot;name&quot;:&quot;Wisdom&quot;,&quot;toRoll&quot;:&quot;1d20+1&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;+1&quot;}">12
                              (+1)</span></td>
                          <td class="text-align-center"><span class="roller render-roller" title="Charisma" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;7 (-2)&quot;,&quot;name&quot;:&quot;Charisma&quot;,&quot;toRoll&quot;:&quot;1d20-2&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;-2&quot;}">7
                              (-2)</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <div class="border"></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <div class="rend__compact-stat">

                      <p><b>Skills:</b> <span data-mon-skill="Perception|+3"><span class="help--hover" onmouseover="EntryRenderer.hover.mouseOverHoverTooltip(event, this, 5)">Perception</span> <span class="roller render-roller" title="Perception"
                            onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;+3&quot;,&quot;name&quot;:&quot;Perception&quot;,&quot;toRoll&quot;:&quot;1d20+3&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;+3&quot;}">+3</span></span>,
                        <span data-mon-skill="Stealth|+3"><span class="help--hover" onmouseover="EntryRenderer.hover.mouseOverHoverTooltip(event, this, 6)" data-hover-id="1" data-hover-active="false" style="">Stealth</span> <span class="roller render-roller"
                            title="Stealth" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;+3&quot;,&quot;name&quot;:&quot;Stealth&quot;,&quot;toRoll&quot;:&quot;1d20+3&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;+3&quot;}">+3</span></span></p>
                      <p><b>Senses:</b> darkvision 60 ft., passive Perception 13</p>
                      <p><b>Languages:</b> Yeti</p>


                      <p><b>Damage Imm.:</b> cold</p>

                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <div class="border"></div>
                  </td>
                </tr>
                <tr class="text compact">
                  <td colspan="6">
                    <div class=" statsInlineHead"><span class="entry-title" data-title-index="5"> <span class="entry-title-inner">Fear of Fire.</span></span>
                      <p>If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.</p>
                    </div>
                    <div class=" statsInlineHead"><span class="entry-title" data-title-index="6"> <span class="entry-title-inner">Keen Smell.</span></span>
                      <p>The yeti has advantage on Wisdom (<span class="help--hover" onmouseover="EntryRenderer.hover.mouseOverHoverTooltip(event, this, 7)">Perception</span>) checks that rely on smell.</p>
                    </div>
                    <div class=" statsInlineHead"><span class="entry-title" data-title-index="7"> <span class="entry-title-inner">Snow Camouflage.</span></span>
                      <p>The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.</p>
                    </div>
                  </td>
                </tr>

                <tr class="mon__stat-header-underline">
                  <td colspan="6"><span class="mon__sect-header-inner">Actions</span></td>
                </tr>
                <tr class="text compact">
                  <td colspan="6">

                    <div class=" statsInlineHead"><span class="entry-title" data-title-index="8"> <span class="entry-title-inner">Multiattack.</span></span>
                      <p>The yeti can use its Chilling Gaze and makes two claw attacks.</p>
                    </div>
                    <div class=" statsInlineHead"><span class="entry-title" data-title-index="9"> <span class="entry-title-inner">Claw.</span></span>
                      <p><i>Melee Weapon Attack:</i> <span class="roller render-roller" title="" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;+6&quot;,&quot;toRoll&quot;:&quot;1d20+6&quot;,&quot;subType&quot;:&quot;d20&quot;,&quot;d20mod&quot;:&quot;+6&quot;}">+6</span>
                        to hit, reach 5 ft., one target. <i>Hit:</i> 7 (<span class="roller render-roller" title="" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d6 + 4&quot;,&quot;subType&quot;:&quot;damage&quot;}">1d6
                          + 4</span>) slashing damage plus 3 (<span class="roller render-roller" title="" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d6&quot;,&quot;subType&quot;:&quot;damage&quot;}">1d6</span>)
                        cold damage.</p>
                    </div>
                    <div class=" statsInlineHead"><span class="entry-title" data-title-index="10"> <span class="entry-title-inner">Chilling Gaze.</span></span>
                      <p>The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (<span class="roller render-roller"
                          title="" onmousedown="event.preventDefault()" onclick="EntryRenderer.dice.rollerClickUseData(event, this)" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;3d6&quot;,&quot;subType&quot;:&quot;damage&quot;}">3d6</span>)
                        cold damage and then be <a href="conditionsdiseases.html#paralyzed_phb" onmouseover="EntryRenderer.hover.mouseOver(event, this, 'conditionsdiseases.html', 'PHB', 'paralyzed_phb', false, null)">paralyzed</a> for 1 minute,
                        unless it is
                        immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is
                        immune to
                        the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour.</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="card-login">
        <div class="card">
          <div class="card-header">
            DADOS
          </div>
          <div class="card-body">
            <!-- CODE  -->
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</body>

</html>
