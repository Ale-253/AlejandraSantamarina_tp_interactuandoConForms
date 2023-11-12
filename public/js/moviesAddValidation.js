window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    

    const elementsForm = $('formAdd').elementsForm
    
    for (let i = 0; i < elementsForm.length; i++) {
      if (elementsForm[i].value) {
        errors.push('El campo $(elementsForm[i].name')
      }
        
    }

    $('formAdd')

}

