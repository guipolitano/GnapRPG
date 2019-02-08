<?php

  class Inimigo{
    //Atributos
    public $nome = null;
    public $ac = null;
    public $hp = null;
    public $attack = null;


    function inimigoInfo(){
      return "Nome: $this->nome <br>AC: $this->ac <br>HP: $this->hp <br>Ataques: $this->attack <hr>";
    }

    function __set($atributo, $valor){
      $this->$atributo = $valor;
    }

    function __get($atributo){
      return $this->$atributo;
    }

  }

  $guard = new Inimigo();

  $guard->__set('nome', 'Guard');
  $guard->__set('ac', 16);
  $guard->__set('hp', 11);
  $guard->__set('attack', 'Spear');

  echo $guard->inimigoInfo();

  //hp 11, ac 16, attack spear.







 ?>
