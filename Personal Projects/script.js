
function copyPaste() {
  var copyText = document.getElementById("textarea");
  copyText.select();
  document.execCommand("copy");
};


$(document).ready(function(){
  var inputValue;
  var selectedValue;
  var checkTest;
  var attackOrCast = 'attack';
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

      $('.checkbox').on('change', function(){
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
