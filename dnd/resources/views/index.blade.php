<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3">
    <title>DnD Helper</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/sidebar.css') }}">

</head>

<body>

<div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="#">Navegação</a>
        <div id="close-sidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>

      <!-- User Info  -->

      <div class="sidebar-header">
        <div class="user-pic">
          <img class="img-fluid rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
            alt="User picture">
        </div>
        <div class="user-info">
          <span class="user-name">Politano
          </span>
          <span class="user-role">Game Master</span>
          <span class="user-status">
            <i class="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-address-card"></i>
              <span>Fichas</span>
              {{-- <span class="badge badge-pill badge-warning">New</span> --}}
            </a>
            <div class="sidebar-submenu" style="display:none;">
              <ul>
                <li>
                  <a href="{{ url('/ficha') }}">Char 1
                    {{-- <span class="badge badge-pill badge-success">Pro</span> --}}
                  </a>
                </li>
                <li>
                  <a href="{{ url('/ficha') }}">Char 2</a>
                </li>
                <li>
                  <a href="{{ url('/ficha') }}">Char 3</a>
                </li>
                <li>
                  <a href="{{ url('/ficha') }}">Nova Ficha<i class="fas fa-plus"></i></a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fas fa-book-reader"></i>
              <span>Mesas de Jogo</span>
              {{-- <span class="badge badge-pill badge-warning">New</span> --}}
            </a>
            <div class="sidebar-submenu" style="display:none;">
              <ul>
                <li>
                  <a href="{{ url('/tabletop') }}">Campanha 1
                    {{-- <span class="badge badge-pill badge-success">Pro</span> --}}
                  </a>
                </li>
                <li>
                  <a href="{{ url('/tabletop') }}">Campanha 2</a>
                </li>

                <li>
                  <a href="{{ url('/tabletop') }}">Nova Campanha<i class="fas fa-plus"></i></a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="{{ url('/alias') }}">
              <i class="fas fa-font"></i>
              <span>Alias Generator</span>
              {{-- <span class="badge badge-pill badge-danger">3</span> --}}
            </a>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fas fa-book"></i>
              <span>Database</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="{{ url('/database') }}">Monstros</a>
                </li>
                <li>
                  <a href="{{ url('/database') }}">Classes</a>
                </li>
                <li>
                  <a href="{{ url('/database') }}">Raças</a>
                </li>
                <li>
                  <a href="{{ url('/database') }}">Itens</a>
                </li>
                <li>
                  <a href="{{ url('/database') }}">Regras</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
    <!-- sidebar-content  -->
    <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        {{-- <span class="badge badge-pill badge-warning notification">3</span> --}}
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        {{-- <span class="badge badge-pill badge-success notification">7</span> --}}
      </a>
      <a href="#">
        <i class="fa fa-cog"></i>
        {{-- <span class="badge-sonar"></span> --}}
      </a>
      <a href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
  <!-- sidebar-wrapper  -->
  <main class="page-content" style="">
    <div class="container-fluid">
      @yield('container')
    </div>

  </main>
  <!-- page-content" -->
</div>
<!-- page-wrapper -->
    <script src="{{asset("js/sidebar.js")}}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>

</body>

</html>
