@extends('index')
<link rel="stylesheet" href="{{ asset('css/login.css') }}">
@section('container')
<div class="login-wrap">
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Logar</label>
        <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Registrar</label>
        <div class="login-form">
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="sign-in-htm">
                    <div class="group form-group">
                        <label for="username" class="label">Usuário</label>
                        <input id="username" type="text" class="input form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="login-username" value="{{ old('username') }}" required>

                        @if ($errors->has('login-username'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('login-username') }}</strong>
                        </span>
                        @endif
                    </div>

                    <div class="group form-group">
                        <label for="login-password" class="label">Senha</label>
                        <input id="password" type="login-password" class="input form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="login-password" required>

                        @if ($errors->has('login-password'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('login-password') }}</strong>
                            </span>
                        @endif
                    </div>
                    <div class="group form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                            <label class="form-check-label" for="remember">
                                {{ __('Lembrar a senha') }}
                            </label>
                        </div>
                    </div>
                    <div class="group form-group">
                      <button type="submit" class="button">
                          {{ __('Logar') }}
                      </button>

                      @if (Route::has('password.request'))
                          <a class="btn btn-link" href="{{ route('password.request') }}">
                              {{ __('Esqueceu a senha?') }}
                          </a>
                      @endif
                    </div>
                    <div class="hr"></div>
                </div>
            </form>

            <form method="POST" action="{{ route('register') }}">
              @csrf
            <div class="sign-up-htm">
                <div class="group">
                    <label for="username" class="label">Usuário</label>
                    <input id="username" type="text" class="input">
                </div>
                <div class="group">
                    <label for="name" class="label">Nome de Exibição</label>
                    <input id="name" type="text" class="input form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                    @if ($errors->has('name'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif                </div>
                <div class="group">
                    <label for="email" class="label">Email</label>
                    <input id="email" type="email" class="input form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="group">
                    <label for="password" class="label">Senha</label>
                    <input id="password" type="password" class="input form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                    @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="group">
                  <label for="password-confirm" class="label">{{ __('Confirmar Senha') }}</label>
                      <input id="password-confirm" type="password" class="input form-control" name="password_confirmation" required>
                </div>
                <div class="group">
                  <button type="submit" class="button">
                      {{ __('Registrar') }}
                  </button>
                </div>
                <div class="hr"></div>
            </div>
            </form>
        </div>
    </div>
</div>
@endsection
