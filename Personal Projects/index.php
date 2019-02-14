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
            <div id="dices" class="card-body">

              <button id="d6" type="button" class="btn btn-info btn-sm btn-block" value="6">1d6</button>
              <button id="d8" type="button" class="btn btn-warning btn-sm btn-block" value="8">1d8</button>
              <button id="d20" type="button" class="btn btn-danger btn-sm btn-block" value="20">1d20</button>

              <div id="diceroll">

                <p style="font-size: 40px; text-align:center">15</p>

              </div>
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
                    <div id="listaAlvos" class="col-md-15">
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

                    <div class="input-group mb-3">
                      <input id="textAlvo" type="text" class="form-control" placeholder="Adicionar Alvo" aria-label="Adicionar Alvo" aria-describedby="basic-addon2">
                      <div class="input-group-append">
                        <button id="addAlvos" class="btn btn-success" type="button">Add</button>
                      </div>
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
          <div class="card-body">
            <div class="panel-content-wrapper-inner">
                <div id="monster_info" class="">
                </div>
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
</body>

</html>
