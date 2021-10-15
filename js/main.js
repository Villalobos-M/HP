
let idStudent = 0;

const button = document.getElementById("next")
button.addEventListener( 'click', e => siguienteStudent(e) )



function getInformacion() {
    fetch( "http://hp-api.herokuapp.com/api/characters/students" ) //peticion
    .then( response => response.json() ) //se retorna la respuesta en forma json
    .then( data => {
        console.log(data);
        mostrarStudent( data )  //llamar a funcion y pasar info
    })
    .catch( err => console.error(err) ) //Interceptar errores
}


function mostrarStudent(array){

      document.querySelector('#studentImage').setAttribute('src', array[idStudent]['image'])
      document.querySelector('#name').textContent = array[idStudent].name.toUpperCase()
      document.querySelector('.casa').textContent = array[idStudent].house
      document.querySelector('.ancestry').textContent = array[idStudent].ancestry
      document.querySelector('.patronus').textContent = array[idStudent].patronus
      document.querySelector('.dateOfBirth').textContent = array[idStudent].dateOfBirth
      document.querySelector('.actor').textContent = array[idStudent].actor
}

function siguienteStudent( evento ) {
    //idStudent = idStudent === 78 ? 1 : idStudent + 1 
    if (idStudent == 78) {
        idStudent = 1
    }else{
        idStudent += 1
    }

    getInformacion()
    evento.stopPropagation()
}




window.addEventListener( 'DOMContentLoaded', e =>{
    getInformacion();
})