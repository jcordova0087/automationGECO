import { test, expect, request } from '@playwright/test';

test('Modulo Producto - GET request', async ({ }) => {
     // Crear un nuevo contexto de solicitud
     const apiRequestContext = await request.newContext();

     // Realizar una solicitud GET
     const response = await apiRequestContext.get('https://sistemageco.lat/api/producto?limit=10&offset=1');
 
     // Obtener el cuerpo de la respuesta en formato JSON
     const responseBody = await response.json();
     //console.log('Respuesta JSON:', responseBody);
 
     // Verificar que la solicitud fue exitosa
     expect(response.status()).toBe(200);

     // Validar que la respuesta sea un array con dos elementos
     expect(Array.isArray(responseBody)).toBe(true);
     expect(responseBody.length).toBe(2);

     // Validar que el primer elemento sea un array de objetos
    const productos = responseBody[0]; // Array de productos
    expect(Array.isArray(productos)).toBe(true);
    expect(productos.length).toBeGreaterThan(0);

    // Validar que el segundo elemento sea un número
    const numeroExtra = responseBody[1];
    expect(typeof numeroExtra).toBe('number');

    const expectedKeys = ['id', 'nombre', 'costo', 'precio', 'fecha', 'eliminado'];

    //Validar la estructura y datos de cada producto
    productos.forEach((item, index) => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());

        expect(typeof item.id).toBe('number');
        expect(typeof item.nombre).toBe('string');
        expect(typeof item.costo).toBe('string');
        expect(typeof item.precio).toBe('string');
        expect(typeof item.fecha).toBe('string');
        expect(item.eliminado).toBeNull();
    });
 
     // Cerrar el contexto de la solicitud
     await apiRequestContext.dispose();
});

test('Modulo Producto - GET request id valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Realizar una solicitud GET
    const response = await apiRequestContext.get('https://sistemageco.lat/api/producto/11');

    // Obtener el cuerpo de la respuesta en formato JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Verificar que la solicitud fue exitosa
    expect(response.status()).toBe(200);

    expect(responseBody).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            nombre: expect.any(String),
            costo: expect.stringMatching(/^\d+(\.\d{1,2})?$/),
            precio: expect.stringMatching(/^\d+(\.\d{1,2})?$/),
            fecha: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
            eliminado: null
        })
    );

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - POST busqueda', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        busqueda: "lechuga"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/producto', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(200);

    // Obtener el cuerpo de la respuesta como JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Validar que la respuesta sea un array
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);

    const expectedKeys = ['id', 'nombre', 'costo', 'precio', 'fecha', 'eliminado'];

    responseBody.forEach((item, index) => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());
        expect(typeof item.id).toBe('number');
        expect(typeof item.nombre).toBe('string');
        expect(typeof item.costo).toBe('string');
        expect(typeof item.precio).toBe('string');
        expect(typeof item.fecha).toBe('string');
        expect(item.eliminado).toBeNull();
       
    });

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - POST Fechas validas', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {"fechaInicio": "2025-01-17", "fechaFin": "2025-01-19"};

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/producto', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(200);

    // Obtener el cuerpo de la respuesta como JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Validar que la respuesta sea un array
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);

    const expectedKeys = ['id', 'nombre', 'costo', 'precio', 'fecha', 'eliminado'];

    responseBody.forEach((item, index) => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());
        expect(typeof item.id).toBe('number');
        expect(typeof item.nombre).toBe('string');
        expect(typeof item.costo).toBe('string');
        expect(typeof item.precio).toBe('string');
        expect(typeof item.fecha).toBe('string');
        expect(item.eliminado).toBeNull();
       
    });

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - POST Fechas invalidas', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {"fechaInicio": "", "fechaFin": ""};

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/producto', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(422);

    // Obtener el cuerpo de la respuesta como JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Errores');
    expect(Array.isArray(responseBody.Errores)).toBe(true);

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - POST Crear Producto', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "prodcuto de prueba", 
        "costo": 1.50,
        "precio": 3.00,
        "fecha": "2025-02-26"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/producto', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(201);

    // Obtener el cuerpo de la respuesta como JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Mensaje');
    expect(typeof responseBody.Mensaje).toBe('string');

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - GET id invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Realizar una solicitud GET
    const response = await apiRequestContext.get('https://sistemageco.lat/api/producto/asdasd');

    // Obtener el cuerpo de la respuesta en formato JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Verificar que la solicitud fue exitosa
    expect(response.status()).toBe(404);

    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Mensaje');
    expect(typeof responseBody.Mensaje).toBe('string');

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - PATCH Actualizar Producto', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "precio": "3.00"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/producto/59', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(200);

    // Obtener el cuerpo de la respuesta como JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Mensaje');
    expect(typeof responseBody.Mensaje).toBe('string');

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - PATCH Actualizar Producto valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "precio": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/producto/59', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(422);

    // Obtener el cuerpo de la respuesta como JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Errores');
    expect(Array.isArray(responseBody.Errores)).toBe(true);

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - DELETE Producto creado', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "prodcuto de prueba", 
        "costo": 1.50,
        "precio": 3.00,
        "fecha": "2025-02-26"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/producto', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(201);

    // Obtener el cuerpo de la respuesta como JSON
    const responseBody = await response.json();

    const match = responseBody.Mensaje.match(/id: (\d+)/);
    const id = match[1];
    // Hacer una solicitud POST
    const responseDelete = await apiRequestContext.delete(`https://sistemageco.lat/api/producto/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Obtener el cuerpo de la respuesta como JSON
    const responseDeleteBody = await responseDelete.json();

    // Verificar el código de estado
    expect(responseDelete.status()).toBe(200);

    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Mensaje');
    expect(typeof responseBody.Mensaje).toBe('string');

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});


test('Modulo Producto - PUT metodo invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "precio": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.put('https://sistemageco.lat/api/producto', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar que el código de estado sea 201 (creado)
    expect(response.status()).toBe(405);
    //console.log('Respuesta JSON:', response);

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});