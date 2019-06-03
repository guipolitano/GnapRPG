<div class="tab-pane fade show active" id="principal" role="tabpanel" aria-labelledby="principal">
    <label style="border-bottom:dotted; width:100%"></label>
    <h3 style="">Quem é você?</h3>

    <div class="form-group">
        <div class="row">
            <div class="col col-sm-4" style="max-width:156px">
                <div class="profile-img" style="float:left">
                    <img id="imgPreview" src="{{asset('images/default-sheet/default.png')}}" alt="" />
                    <input style="" class="browse-input" type="file" required name="UploadedFile" id="UploadedFile" onchange="previewFile()"
                    />
                    <i class="fas fa-cloud-upload-alt upload-icon"></i>
                    <br>
                </div>
            </div>

            <div class="col" style="margin-left:20px">
                <div class="row" style="padding-bottom:15px;">
                    <div class="input-group" style="width: 97%;">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="" id="basic-addon1">Nome</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Insira o nome do personagem" aria-label="charname" aria-describedby="basic-addon1"
                            maxlength="35">
                    </div>
                </div>

                <div class="row" style="padding-bottom:15px;">
                    <div class="input-group" style="width:26%">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="" id="basic-addon1">Sexo</span>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>--</option>
                                        <option value="1">M</option>
                                        <option value="2">F</option>
                                    </select>
                    </div>
                    <div class="input-group" style="width: 25%; margin-left:5px">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="" id="basic-addon1">Idade</span>
                        </div>
                        <input type="text" class="form-control" maxlength="3" onkeypress="return isNumber(event)" placeholder="" aria-label="charname"
                            aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group" style="width:44%; margin-left:5px">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="padding-left:6px; padding-right:6px" id="basic-addon1"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Deus</span>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                                            <option selected>Selecione</option>
                                            <option value="0">Nenhum</option>
                                            <option value="1">Allihanna</option>
                                            <option value="2">Azgher</option>
                                            <option value="3">Hyninn</option>
                                            <option value="4">Kallyadranoch</option>
                                            <option value="5">Keenn</option>
                                            <option value="6">Khalmyr</option>
                                            <option value="7">Lena</option>
                                            <option value="8">Lin-Wu</option>
                                            <option value="9">Marah</option>
                                            <option value="10">Megalokk</option>
                                            <option value="11">Nimb</option>
                                            <option value="12">Oceano</option>
                                            <option value="13">Ragnar</option>
                                            <option value="14">Sszzaas</option>
                                            <option value="15">Tanna-Toh</option>
                                            <option value="16">Tauron</option>
                                            <option value="17">Tenebra</option>
                                            <option value="18">Thyatis</option>
                                            <option value="19">Wynna</option>
                                            <option value="20">Valkaria</option>
                                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="input-group" style="width:59%;">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="" id="basic-addon1"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Tendência</span>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                                            <option selected>Selecione</option>
                                            <option value="1">Leal e Bondoso</option>
                                            <option value="2">Neutro e Bondoso</option>
                                            <option value="3">Caótico e Bondoso</option>
                                            <option value="4">Leal e Neutro</option>
                                            <option value="5">Neutro</option>
                                            <option value="6">Caótico e Neutro</option>
                                            <option value="7">Leal e Maligno</option>
                                            <option value="8">Neutro e Maligno</option>
                                            <option value="9">Caótico e Maligno</option>
                                        </select>
                    </div>
                    <div class="input-group" style="width:37%; margin-left:5px">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="" id="basic-addon1">Perfil</span>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                                            <option value="1" selected>Público</option>
                                            <option value="2">Privado</option>
                                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="row" style="width:103%; padding-left:15px;">
            <div class="input-group" style="">
                <div class="input-group-prepend">
                    <span class="input-group-text" style="" id="basic-addon1">Aparência</span>
                </div>
                <textarea type="text" style="height:60px; min-height:60px;" maxlength="255" id="textarea-aparencia" class="form-control"
                    placeholder="Descreva em até 255 caracteres como é sua aparência" aria-label="aparencia" aria-describedby="basic-addon1"></textarea>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="row" style="width:103%; padding-left:15px; ">
            <div class="input-group" style="">
                <div class="input-group-prepend">
                    <span class="input-group-text" style="" id="basic-addon1">Personalidade</span>
                </div>
                <textarea type="text" style="height:60px; min-height:60px;" maxlength="255" id="textarea-personalidade" class="form-control"
                    placeholder="Descreva em até 255 caracteres como é sua personalidade" aria-label="personalidade" aria-describedby="basic-addon1"></textarea>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="row" style="width:103%; padding-left:15px">
            <div class="input-group" style="">
                <div class="input-group-prepend">
                    <span class="input-group-text" style="" id="basic-addon1">História</span>
                </div>
                <textarea type="text" style="height:60px; min-height:60px;" maxlength="500" id="textarea-historia" class="form-control" placeholder="Descreva em até 500 caracteres qual é a sua história"
                    aria-label="aparencia" aria-describedby="basic-addon1"></textarea>
            </div>
        </div>
    </div>
</div>
