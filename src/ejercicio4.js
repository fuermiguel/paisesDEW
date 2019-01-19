window.onload = function() {

    //**** Inicializamos ******/
    let listaPaises = new ListaPaises();

    //***** Cargamos los elmentos de la página en variables *******

    txtCodigo = document.getElementById('codigo');
    txtNombre = document.getElementById('nombre');
    txtPoblacion = document.getElementById('poblacion');
    txtListado = document.getElementById('listado');
    btnAgregar = document.getElementById('agregar');

    //**** Definimos los eventos ****

    txtCodigo.addEventListener('keyup', function() {
        mayus(this);
    }, false);

    txtNombre.addEventListener('keyup', function() {
        mayus(this);
    }, false);

    txtPoblacion.addEventListener('keyup', function() {
        mayus(this);
    }, false);

    //****inicializamos */
    txtCodigovalue = '';
    txtNombre.value = '';
    txtPoblacion.value = '';
    txtListado.value = '';
    txtListado.disabled = true;



    btnAgregar.addEventListener('click', function() {

        console.log(codigoDosLetras(txtCodigo.value),
            poblacionNumerico(txtPoblacion.value),
            todosLosCampos(txtCodigo.value, txtNombre.value, txtPoblacion.value), !paisRepetido(codigo)

        );

        if (codigoDosLetras(txtCodigo.value) &&
            poblacionNumerico(txtPoblacion.value) &&
            todosLosCampos(txtCodigo.value, txtNombre.value, txtPoblacion.value) &&
            !paisRepetido(codigo)) {

            //guardar el pais
            listaPaises.setPaisFinal([txtCodigo.value, txtNombre.value, txtPoblacion.value]);
            //muestra listado
            mostrarListado(txtListado, listaPaises.getPaises());
            //borrar campos de texto
            txtCodigo.value = '';
            txtNombre.value = '';
            txtPoblacion.value = '';

            //inicializar
            txtCodigo.focus();

            console.log('Validaciones correctas');
        } else {
            //Se muestra información de los errores
            console.log('validaciones incorrectas');
        }

    });

}