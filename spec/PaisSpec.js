describe('Pais()', function() {
    let pais = new Pais('es', 'españa', 40);
    let pais1 = new Pais('it', 'italia', 30);

    it('creación de la clase Pais', function() {
        expect(pais).toBeDefined();
    })
    it('constructores de dos paises', function() {
        expect('es').toEqual(pais.codigo);
        expect('españa').toEqual(pais.nombre);
        expect(40).toEqual(pais.poblacion);
        expect('it').toEqual(pais1.codigo);
        expect('italia').toEqual(pais1.nombre);
        expect(30).toEqual(pais1.poblacion);

    })
})