$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  });

function copyPaste() {
  var copyText = document.getElementById("textarea");
  copyText.select();
  document.execCommand("copy");
};

$(document).ready(function(){
  var inputValue;
  var selectedValue;
  var checkTest =10;
  var attackOrCast = 'attack';
  var text;
  var textBool = false;
  $('#selectCreature').on('change', function(){
      inputValue = $(this).val();
      if(inputValue){
        $.ajax({
          type:'POST',
          url:'selecionar_criatura.php',
          data:'creature_id='+inputValue,
          success:function(html){
            $('#selectAttack').html(html);
          }
        });
        $.ajax({
          type:'POST',
          url:'monster_infos.php',
          data:'monster_id='+inputValue,
          success:function(html){
            $('#monster_info').html(html);
          }
        });
      }
    });

    $('#selectAttack').on('change', function(){
        selectedValue = $(this).val();
        if(selectedValue){
          $.ajax({
            type:'POST',
            url:'gerar_alias.php',
            data:{creature_name: selectedValue, target_name: checkTest, attack_type: attackOrCast},
            success:function(html){
              $('#textarea').val(html);
            }
          });
        }
      });

      $('#addAlvos').click(function() {
        text = $('#textAlvo').val();
        var container = $('#listaAlvos');
        var labels = container.find('label');
        var id = labels.length+1;

        $('#listaAlvos').append('<label class="checkbox-inline" for="checkboxes-'+id+'"><input class="checkbox" type="checkbox" name="alvo[]" id="checkboxes-'+id+'" value="'+text+'">'+text+'</label><sup><i class="fas fa-times fa-xs"></i></sup>');


      });

      var idDeletar =3;

      // $('#listaAlvos').on('click', '.deletar', function(){
      //     $('#deleteLabel-'+idDeletar).remove();
      //   });
      $('#listaAlvos').on('click', '.deletar', function(event){
        idDeletar = $(event.target);
        alert(idDeletar);
        console.log(idDeletar);
      });

      $('#listaAlvos').on('click', '.checkbox', function(){
          checkTest = new Array();
          var boolTest = false;
          $("input:checkbox:checked").each(function() {
            if(checkTest.length>0){
              checkTest.push('-t '+$(this).val());
              if(boolTest){
                checkTest[0] = '-t '+checkTest[0];
                boolTest=false;
              }

            }else{
              checkTest.push($(this).val());
              boolTest = true;

            }
          });
          $.ajax({
            type:'POST',
            url:'gerar_alias.php',
            dataType: 'html',
            data:{creature_name: selectedValue, target_name: checkTest, attack_type: attackOrCast},
            success:function(html){
              $('#textarea').val(html);
              }
            });
        });


      $('.tipoGolpe').on('change', function(){
          attackOrCast = $(this).val();
          $.ajax({
            type:'POST',
            url:'gerar_alias.php',
            data:{creature_name: selectedValue, target_name: checkTest, attack_type: attackOrCast},
            success:function(html){
              $('#textarea').val(html);
              }
            });
          });
        });
