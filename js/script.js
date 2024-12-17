 function agregarTarea(){

    //Obtenemos el valor del campo de la tarea 
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value

    //validamos que el calor no sea vacío
    if (nuevaTareaTexto === ""){
        alert("Por favor ingrese una tarea")
        return;
    }

    //Crea un elemto en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " "

    //Botón eliminar
    let botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.onclick = function(){nuevaTarea.remove()}

    //Agregar boton eliminar al elemto de la lista
    nuevaTarea.appendChild(botonEliminar)

    //Agregar tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea)
    
    //limpiar input
    document.getElementById("nuevaTarea").value = ""

    //agregamos boton de modificar
    let botonModificar= document.createElement("button")
    botonModificar.textContent = "Modificar"
    botonModificar.onclick = function(){nuevaTarea.m()}

    //Agregar boton modificar al elemto de la lista
    nuevaTarea.appendChild(botonModificar)

   


 }