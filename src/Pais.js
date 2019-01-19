class Pais {
    constructor(codigo, nombre, poblacion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.poblacion = poblacion;
    }

    toString() {
        return `codigo: ${this.codigo} nombre: ${this.nombre} población: ${this.poblacion}`
    }
}


/**Funciones auxiliares** */
function codigoValido() {
    if (/^[a-zA-Z]{2}$/) return true;
    return false;
}