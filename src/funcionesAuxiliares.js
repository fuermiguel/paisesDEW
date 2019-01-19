  //****** Funciones auxiliares

  function codigoDosLetras(codigo) {
      if (/^[A-Z]{2}$/.test(codigo)) return true;
      return false;
  }

  function poblacionNumerico(poblacion) {
      if (/^([0-9])*$/.test(poblacion)) return true;
      return false;
  }

  function todosLosCampos(codigo, nombre, poblacion) {
      if (
          codigo.value == '' ||
          nombre.value == '' ||
          poblacion == '') return false;
      return true;
  }

  function paisRepetido(codigo) {

      return false;
  }

  function mayus(e) {
      e.value = e.value.toUpperCase();
  }

  function mostrarListado(listado, paises) {
      let cadena = '';
      for (const pais of paises) {
          cadena = cadena + pais + '\n';
      }
      console.log(cadena, paises);
      listado.value = cadena;
  };