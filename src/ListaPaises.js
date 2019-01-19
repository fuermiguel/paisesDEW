class ListaPaises {
    constructor() {
        this._paises = [];
    }
    getPaises() {
        return this._paises;
    }
    getPais(pos) {
        return this._paises[pos];
    }
    setPaisInicio(pais) { //Pais es un array
        this._paises.splice(0, 0, pais);
    }

    setPaisFinal(pais) {
        this._paises.push(pais);
    }

    existePaisxCodigo(codigo) {
        for (const pais of this._paises) {
            if (pais[0] == codigo) return true;
        }
        return false;
    }

    borrarPaisxCodigo(codigo) {
        for (let pais = 0; pais < this._paises.length; pais++) {
            if (this._paises[pais][0] == codigo) this._paises.splice(pais, 1);
        }
    }

    borrarPaisInicial() {
        let nombre = this._paises[0][1];
        this._paises.splice(0, 1);
        console.log(this._paises);
        return nombre;
    }

    borrarPaisFinal() {
        let nombre = this._paises[this._paises.length - 1][1];
        this._paises.splice(this._paises.length - 1, 1);
        return nombre;
    }

    posicionxNombre(nombre) {
        for (let pos = 0; pos < this._paises.length; pos++) {
            if (this._paises[pos][1] == nombre) return pos;
        }
        return -1;
    }

    mayorPoblacion() {
        if (this._paises.length > 0) {
            return this._paises.reduce(function(valorAnterior, valorActual) {
                if (valorAnterior[2] < valorActual[2]) return valorActual;
                return valorAnterior;
            });
        };
        return -1;
    }

    menorPoblacion() {
        if (this._paises.length > 0) {
            return this._paises.reduce(function(valorAnterior, valorActual) {
                if (valorAnterior[2] < valorActual[2]) return valorAnterior;
                return valorActual;
            });
        }
        return -1;
    }
}