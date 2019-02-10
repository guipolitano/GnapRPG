<?php require_once "criaturas.php"; ?>

<?php require_once "selecionar_criatura.php"; ?>
<?php $arquivo = fopen('arquivo.txt','r');

  $aliasFinal = fgets($arquivo);

  //file_put_contents("arquivo.txt", "");
  fclose($arquivo);
?>


<html>

<head>
  <meta charset="utf-8" />
  <title>Avrae Attack Alias Generator</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


  <style>
    .card-login {
      padding: 30px 0 0 0;
      width: 350px;
      margin: 0 auto;
    }

    .card-header {
      height: 40px;
      text-align: center;
      font-weight: bold;
    }
  </style>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"> </script>
  <script>
//Ataques
  $(document).ready(function(){
    $('#selectCreature').on('change', function(){
        var inputValue = $(this).val();
        if(inputValue){
          $.ajax({
            type:'POST',
            url:'selecionar_criatura.php',
            data:'creature_id='+inputValue,
            success:function(html){
              $('#selectAttack').html(html);
            }
          });
        }
      });

      $('#selectAttack').on('change', function(){
          var selectedValue = $(this).val();
          if(selectedValue){
            $.ajax({
              type:'POST',
              url:'gerar_alias.php',
              data:'creature_name='+selectedValue,
              success:function(html){
                $('#textarea').html(html);
              }
            });
          }
        });

        $('.checkbox').on('change', function(){
            var checkTest = new Array();
            $("input:checked").each(function() {
              checkTest.push($(this).val());
              });
            $.ajax({
              type:'POST',
              url:'gerar_alias.php',
              dataType: 'html',
              data:'target_name='+checkTest,
              success:function(html){
                $('#textarea').html(html);
                }
              });
          });
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
                    <textarea class="form-control" id="textarea" name="textarea"></textarea>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</body>

</html>
