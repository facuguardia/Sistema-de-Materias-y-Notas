 //? Este sistema muestra materias y sus nota usando promesas asincronas.
 
 const materiasHTML = document.querySelector(".materias");

 const materias = [
     {
        nombre: "Programacion 4",
        nota: 10
     },{
        nombre: "Matematicas 3",
        nota: 8
     },{
        nombre: "Logica 5",
        nota: 9
     },{
        nombre: "Bases de datos",
        nota: 7
     }
 ];

 const obtenerMateria = (id)=>{
     return new Promise((resolve, reject)=>{
        let materia = materias[id];
        if (materia == undefined) reject ("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
     })
 }

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias()
