describe('ListaPaises()', function() {

    let listaPaises = new ListaPaises();
    listaPaises.setPaisFinal([34, 'españa', 40]);

    it('Creacion del objeto listaPaises', function() {
        expect(listaPaises).toBeDefined();
    })

    it('Obtener un pais', function() {
        expect('españa').toEqual(listaPaises.getPais(0)[1]);
    })

    it('Obtener paises', function() {
        expect([
            [34, 'españa', 40]
        ]).toEqual(listaPaises.getPaises());
    })
    it('Insetar pais inicio', function() {
        listaPaises.setPaisInicio([24, 'francia', 50]);
        expect([
            [24, 'francia', 50],
            [34, 'españa', 40]
        ]).toEqual(listaPaises.getPaises());
    })
    it('Insertar pais final', function() {
        listaPaises.setPaisFinal([14, 'dinamarca', 20])
        expect([
            [24, 'francia', 50],
            [34, 'españa', 40],
            [14, 'dinamarca', 20]
        ]).toEqual(listaPaises.getPaises());
    })

    it('Esiste pais por codigo', function() {
        expect(true).toBe(listaPaises.existePaisxCodigo(14));
        expect(true).toBe(listaPaises.existePaisxCodigo(24));
        expect(true).toBe(listaPaises.existePaisxCodigo(34));
        expect(false).toBe(listaPaises.existePaisxCodigo(10));
        expect(false).toBe(listaPaises.existePaisxCodigo(70));
        expect(false).toBe(listaPaises.existePaisxCodigo(50));
    })

    it('eliminar pais por codigo', function() {
        listaPaises.borrarPaisxCodigo(34)
        expect([
            [24, 'francia', 50],
            [14, 'dinamarca', 20]
        ]).toEqual(listaPaises.getPaises());
    })

    it('eliminar pais inicial', function() {
        expect('francia').toEqual(listaPaises.borrarPaisInicial());
        expect([
            [14, 'dinamarca', 20]
        ]).toEqual(listaPaises.getPaises());
    })

    it('eliminar pais final', function() {
        listaPaises.setPaisFinal([34, 'españa', 40]);
        expect('españa').toEqual(listaPaises.borrarPaisFinal());
        expect([
            [14, 'dinamarca', 20]
        ]).toEqual(listaPaises.getPaises());
    })

    it('posición por nombre', function() {
        expect(0).toEqual(listaPaises.posicionxNombre('dinamarca'));
        expect(-1).toEqual(listaPaises.posicionxNombre('japon'));
    })

    it('mayor población', function() {
        listaPaises.setPaisFinal([34, 'españa', 40]);
        expect([34, 'españa', 40]).toEqual(listaPaises.mayorPoblacion());
        listaPaises.setPaisFinal([24, 'francia', 50]);
        expect([24, 'francia', 50]).toEqual(listaPaises.mayorPoblacion());
    })

    it('menor poblacion', function() {
        expect([14, 'dinamarca', 20]).toEqual(listaPaises.menorPoblacion());
    })

})