describe('Tienda', function() {
    let tienda;

    //Esto se ejecuta antes de cada prueba
    beforeEach(function() {
        tienda = new Tienda();
    });

    it('Se crea el objeto tienda', function() {
        expect(tienda).toBeDefined();
    });

    describe('Introducir un disco', function() {

        it('introduce disco con exito', function() {
            expect(true).toBe(tienda.addDisco({ titulo: 'titulo1', cantante: 'cantante1', tipo: 'tipo1', fecha: 1, estanteria: 10, prestado: false }))
        });
        it('no introducir un disco repetido', function() {
            tienda.addDisco({ titulo: 'titulo1', cantante: 'cantante1', tipo: 'tipo1', fecha: 1, estanteria: 10, prestado: false });
            expect(false).toBe(tienda.addDisco({ titulo: 'titulo1', cantante: 'cantante1', tipo: 'tipo1', fecha: 1, estanteria: 10, prestado: false }));
        });

    });

    describe('Operaciones varias sobre discos', function() {
        beforeEach(function() {
            tienda.addDisco({ titulo: 'titulo1', cantante: 'cantante1', tipo: 'tipo1', fecha: 1, estanteria: 10, prestado: false });
            tienda.addDisco({ titulo: 'titulo2', cantante: 'cantante2', tipo: 'tipo2', fecha: 2, estanteria: 11, prestado: true });
            tienda.addDisco({ titulo: 'titulo3', cantante: 'cantante3', tipo: 'tipo3', fecha: 3, estanteria: 12, prestado: false });
        })

        it('Obtener el número de discos de la tienda', function() {
            expect(3).toBe(tienda.getNumeroDiscos());
        })
        it('Obtener número de discos disponibles', function() {
            expect(2).toBe(tienda.getNumeroDiscosDisponible());
        })

        it('Obtener titulo de disco', function() {
            expect('titulo2').toBe(tienda.getTituloDisco(1));
        })

        it('Obtener disco', function() {
            expect({ titulo: 'titulo3', cantante: 'cantante3', tipo: 'tipo3', fecha: 3, estanteria: 12, prestado: false }).toEqual(tienda.getDisco(2));
        })

        it('Existe disco', function() {
            expect(true).toBe(tienda.existeDisco({ titulo: 'titulo3', cantante: 'cantante3', tipo: 'tipo3', fecha: 3, estanteria: 12, prestado: false }))
        })

        it('Borrar disco', function() {
            expect(true).toBe(tienda.deleteDisco('titulo2'));
            expect(2).toEqual(tienda.getNumeroDiscos());
        })

        it('Modifica disco', function() {
            expect(true).toBe(tienda.modificaDisco({ titulo: 'titulo2', cantante: 'nuevoCantante2' }));
            expect({ titulo: 'titulo2', cantante: 'nuevoCantante2', tipo: 'tipo2', fecha: 2, estanteria: 11, prestado: true }).toEqual(tienda.getDisco(1));

        })



    })

});