import { test, expect, request } from '@playwright/test';

test('Modulo Producto - Actualizar Producto propiedad añadida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba",
        "propiedad":"algo" 
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

test('Modulo Producto - Actualizar Producto propiedad nombre vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": ""
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

test('Modulo Producto - Actualizar Producto propiedad precio vacio', async ({ }) => {
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

test('Modulo Producto - Actualizar Producto propiedad precio valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "precio": "asdasdasd"
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

test('Modulo Producto - Actualizar Producto propiedad costo vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "costo": ""
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

test('Modulo Producto - Actualizar Producto propiedad costo valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "costo": "asdasdasdasd"
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


test('Modulo Producto - Actualizar Producto propiedad nombre valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "producto de prueba"
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

test('Modulo Producto - Actualizar Producto propiedad precio valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "precio": 3.00
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

test('Modulo Producto - Actualizar Producto propiedad costo valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "costo": 3.00
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

test('Modulo Producto - Actualizar Producto propiedad invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "propiedad": "invalida"
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