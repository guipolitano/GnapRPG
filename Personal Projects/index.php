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
            <button class="btn btn-warning" data-container="body" data-toggle="popover" data-placement="right" data-content="Copiado!" onclick="copyPaste()">Copiar</button>
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
              <table class="row stats">
                <tr>
                  <th class="rnd-name name" colspan="6">
                    <div class="name-inner">
                      <!-- LINHA NOME  -->
                      <span class="nomeMonstro"><b>NOME</b></span>
                      <span class="manualFonte">Fonte e pg</span>
                      <!--  -->
                    </div>
                  </th>
                </tr>
                <!-- LINHA TAMANHO TIPO ALINHAMENTO  -->
                <tr>
                  <td colspan="6"><i>TAMANHO, TIPO, ALINHAMENTO</i></td>
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
                          <td class="col-sm-4">ValorAC</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">ValorHP</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">Velocidade</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">CR</td>
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
                          <td class="col-sm-4">ValorSTR</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">ValorDEX</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">ValorCON</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">ValorINT</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">ValorWIS</td>
                          <th class="vl"></div>
                          <td class="col-sm-4">ValorCHA</td>
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
