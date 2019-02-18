$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});

function copyPaste() {
  var copyText = document.getElementById("textarea");
  copyText.select();
  document.execCommand("copy");
};

$(document).ready(function() {
  var inputValue;
  var selectedValue;
  var checkTest = 10;
  var attackOrCast = 'attack';
  var text;
  var textBool = false;

  $("#selectCreature").html($("#selectCreature option").sort(function(a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
  }));
  $("#selectCreature").get(0).selectedIndex = 0;

  $('#selectCreature').on('change', function() {
    inputValue = $(this).val();
    if (inputValue) {
      $.ajax({
        type: 'POST',
        url: 'selecionar_criatura.php',
        data: 'creature_id=' + inputValue,
        success: function(html) {
          $('#selectAttack').html(html);
        }
      });
      $.ajax({
        type: 'POST',
        url: 'monster_infos.php',
        data: 'monster_id=' + inputValue,
        success: function(html) {
          $('#monster_info').html(html);
        }
      });
    }
  });

  $('#dices').on('click', '.btn', function(roll) {
    var dado = $(roll.target).attr("value");
    var rolagem = Math.floor(Math.random() * dado) + 1;
    if (rolagem == 1) {
      document.getElementById('diceroll').style.color = "red";
      document.getElementById('diceroll').innerHTML = rolagem + '<p style="font-size: 20px"><b style="color:red">FAIL!</b>';
    } else if (rolagem == dado) {
      document.getElementById('diceroll').style.color = "#50e450";
      document.getElementById('diceroll').innerHTML = rolagem;
      document.getElementById('diceroll').innerHTML = rolagem + '<p style="font-size: 20px"><b style="color:#50e450">CRITICAL!</b>';
    } else {
      document.getElementById('diceroll').style.color = "white";
      document.getElementById('diceroll').innerHTML = rolagem;
    }


  });

  $('#selectAttack').on('change', function() {
    selectedValue = $(this).val();
    if (selectedValue) {
      $.ajax({
        type: 'POST',
        url: 'gerar_alias.php',
        data: {
          creature_name: selectedValue,
          target_name: checkTest,
          attack_type: attackOrCast
        },
        success: function(html) {
          $('#textarea').val(html);
        }
      });
    }
  });

  $('#addAlvos').click(function() {
    text = $('#textAlvo').val();
    var container = $('#listaAlvos');
    var labels = container.find('label');
    var id = labels.length + 1;

    $('#listaAlvos').append('<label class="checkbox-inline btn btn-secondary btn-sm" style="border:0px; margin:2px" for="checkboxes-' + id + '" id="deleteLabel-' + id + '"><input class="checkbox" type="checkbox" style="display:none" name="alvo[]" id="checkboxes-' + id + '" value="' + text + '">' + text + ' <a href="javascript:void(0);" style="color:rgb(150, 1, 1)" class="deletar"><sup><i class="fas fa-times fa-sm" id="' + id + '"></i></sup></a></label>');

  });

  $('#listaAlvos').on('click', '.checkbox-inline', function(e) {
    if ($(e.target).hasClass("btn-secondary")) {
      $(e.target).addClass("btn-primary");
      $(e.target).removeClass("btn-secondary");
    } else {
      $(e.target).addClass("btn-secondary");
      $(e.target).removeClass("btn-primary");
    }
  });

  $('#listaAlvos').on('click', '.deletar', function(event) {
    var idDeletar = $(event.target).attr("id");
    $('#deleteLabel-' + idDeletar).remove();
  });

  $('#listaAlvos').on('click', '.checkbox', function() {
    checkTest = new Array();
    var boolTest = false;
    $("input:checkbox:checked").each(function() {
      if (checkTest.length > 0) {
        checkTest.push('-t "' + $(this).val() + '"');
        if (boolTest) {
          checkTest[0] = '-t ' + checkTest[0];
          boolTest = false;
        }

      } else {
        checkTest.push('"' + $(this).val() + '"');
        boolTest = true;

      }
    });
    $.ajax({
      type: 'POST',
      url: 'gerar_alias.php',
      dataType: 'html',
      data: {
        creature_name: selectedValue,
        target_name: checkTest,
        attack_type: attackOrCast
      },
      success: function(html) {
        $('#textarea').val(html);
      }
    });
  });


  $('.tipoGolpe').on('change', function() {
    attackOrCast = $(this).val();
    $.ajax({
      type: 'POST',
      url: 'gerar_alias.php',
      dataType: 'html',
      data: {
        creature_name: selectedValue,
        target_name: checkTest,
        attack_type: attackOrCast
      },
      success: function(html) {
        $('#textarea').val(html);
      }
    });
  });
});
