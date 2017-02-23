var reporte = document.getElementById("reporte");
laboratoria = [
  {
    nombre: "Arabela",
    apellido: "Rojas",
    rol: "T.A.",
    cumpleanio: "23 de enero"
  },
  {
    nombre: "Michelle",
    apellido: "Seguil",
    rol: "T.A.",
    cumpleanio: "25 de noviembre",
  },
  {
    nombre: "Meche",
    apellido: "Zubieta",
    rol: "T.A.",
    cumpleanio: "2 de marzo"
  },
  {
    nombre: "Papu",
    apellido: "Rivariola",
    rol: "Psicologa",
    cumpleanio: "10 de octubre"
  }
];

function imprimir(laboratoria){
  var texto = "";
      laboratoria.forEach(function(e){
        texto +=  "<ul>"
        +"<li><label for='nombre'>Nombre:</label>"+e.nombre+"</li>"
        +"<li><label for='apellido'>Apellido:</label>"+e.apellido+"</li>"
        +"<li><label for='rol'>Rol:</label>"+e.rol+"</li>"
        +"<li><label for='cumpleanio'>Cumpleaño:</label>"+e.cumpleanio+"</li>"
        +" </ul><br>";
      });
  return texto;
}

function imprimirTodos(){
  reporte.innerHTML=imprimir(laboratoria);
}
