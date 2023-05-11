const request = require('supertest');
const {app, canchas} = require('../index');
const server = require('../server');


describe('GET /', () => {
    afterAll((done) => {
        server.close(done);
    });
  
    it('Debe consultar y devolver un array de canchass', async () => {
      const response = await request(app).get('/canchas');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });


describe('POST /canchas', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO); 
  });

  afterAll((done) => {
    server.close(done);
});
    beforeEach(() => {
      
      canchas.length = 0;
    });
  
    it('debería agregar una nueva canchas', async () => {
      const body = {
        id: '3',
        Descripcion:"Cancha Grande"
      };
  
      const response = await request(app).post('/canchas').send(body);
  
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message:'cancha saved', body
      });
  
      expect(canchas).toHaveLength(1);
      expect(canchas[0]).toEqual(body);
    });
  });
  
  

  describe('DELETE /canchas/:id', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO); 
  });

  afterAll((done) => {
    server.close(done); 
  });

  beforeEach(() => {
    canchas.length = 0; 
  });

  it('debería eliminar un canchas existente', async () => {
    
    const canchasEjemplo = {
      id: '3',
      Descripcion:"Cancha Grande"
    };
    canchas.push(canchasEjemplo);

    
    
    const response = await request(app).delete(`/canchas/${canchasEjemplo.id}`);


    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'DELETED cancha' 
    });

    expect(canchas).toHaveLength(1);
  });


});