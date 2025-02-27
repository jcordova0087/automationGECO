import { test, expect, request } from '@playwright/test';

test('Modulo Producto - POST Crear Producto propiedad invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "prodcuto de prueba", 
        "costo": 1.50,
        "precio": 3.00,
        "fecha": "2025-02-26",
        "propiedad": "asdasd"
    };

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

test('Modulo Producto - POST Crear Producto propiedad nombre vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "", 
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

test('Modulo Producto - POST Crear Producto propiedad costo vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": "",
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

test('Modulo Producto - POST Crear Producto propiedad precio vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 2.00,
        "precio":"",
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

test('Modulo Producto - POST Crear Producto propiedad fecha vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 2.00,
        "precio": 3.00,
        "fecha": ""
    };

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

test('Modulo Producto - POST Crear Producto propiedad costo valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": "asdasd",
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

test('Modulo Producto - POST Crear Producto propiedad precio valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 2.00,
        "precio": "asdasd",
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

test('Modulo Producto - POST Crear Producto json invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
    };

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

test('Modulo Producto - POST Crear Producto propiedad costo valor cero', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 0,
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

test('Modulo Producto - POST Crear Producto propiedad precio valor cero', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 2.00,
        "precio": 0,
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

test('Modulo Producto - POST Crear Producto propiedad costo tipo string', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": "2.00",
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

test('Modulo Producto - POST Crear Producto propiedad precio tipo string', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 2.00,
        "precio": "3.00",
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

test('Modulo Producto - POST Crear Producto propiedad fecha invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 2.00,
        "precio": 3.00,
        "fecha": "2025-02-"
    };

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
    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Errores');
    expect(Array.isArray(responseBody.Errores)).toBe(true);

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Producto - POST Crear Producto json valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba", 
        "costo": 2.00,
        "precio": 3.00,
        "fecha": "2025-02-31"
    };

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
    // Validar que la respuesta sea un objeto
    expect(responseBody).toHaveProperty('Errores');
    expect(Array.isArray(responseBody.Errores)).toBe(true);

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});