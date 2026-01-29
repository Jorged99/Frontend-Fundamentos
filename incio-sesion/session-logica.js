const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nombreInput = document.getElementById("nombreUsuario").value;
    const correoInput = document.getElementById("correoUsuario").value;

if(nombreInput === "Jorge" && correoInput === "jorgeald724@gmail.com" ){
   alert("Bienvenido: 👌😁 " + nombreInput);
    } else{
    alert("Usuario No registrado!🤷‍♂️😒");
   }

});

