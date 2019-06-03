function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && charCode < 48) || charCode > 57) {
        return false;
    }
    return true;
}

function previewFile() {
    var preview = document.querySelector("#imgPreview");
    var textPreview = document.querySelector("#text-preview");
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    var type = file.type;

    if (type != "image/jpeg" && type != "image/png" && type != "image/bmp"){

        alert("Formato Inválido. Somente arquivos .jpg, .jpeg, .png ou .bmp");
    } else{
        reader.onloadend = function () {
            preview.src = reader.result;
            textPreview.textContent = file.name;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

}

function expandTextarea(id) {
    document.getElementById(id).addEventListener(
        "keyup",
        function() {
            this.style.overflow = "hidden";
            this.style.height = 0;
            this.style.height = this.scrollHeight + "px";
        },
        false
    );
}
expandTextarea("textarea-descricao");
