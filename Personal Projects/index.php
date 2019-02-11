<?php require_once "criaturas.php"; ?>

<html>

<head>
  <meta charset="utf-8" />
  <title>Avrae Attack Alias Generator</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"> </script>
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
                                <option value="<?php echo $monsterId?>"><?php echo $atributo?></option>
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
        </div>
      </div>
    </div>
</body>

</html>
