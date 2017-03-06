function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
}

function soloNumeros(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " 0123456789";
       especiales = "48-57";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
}
function enviarDatos(event){
  event.preventDefault();
  reporte.innerHTML =         "<ul>"
          +"<li><label for='nombre'>Nombre: </label>"+document.getElementById("nombre").value+"</li>"
          +"<li><label for='apellido'>Apellido: </label>"+document.getElementById("apellido").value+"</li>"
          +"<li><label for='dni'>DNI: </label>"+document.getElementById("dni").value+"</li>"
          +"<li><label for='direccion'>Direccion: </label>"+document.getElementById("direccion").value+"</li>"
          +" </ul><br><br>";
}
