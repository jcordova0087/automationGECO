import { test, expect, request } from '@playwright/test';

test('Modulo Cliente - PATCH Actualizar Cliente propiedad añadida invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "nueva propiedad": "aaaaaaa"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad nombre vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad nombre valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "Cliente Jesus"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar el codigo de respuesta
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad rfc vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "rfc": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad rfc valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "rfc": "aaaaaaa"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad rfc valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "rfc": "GODE561231GR9"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
        data: requestData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Verificar el codigo de respuesta
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad telefono vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "telefono": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad telefono valor invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "telefono": "asdasdasdasd"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad telefono valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "telefono": "6622061733"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad email valor vacio', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "email": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad email valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "email": "asdasdasdasasd"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad email valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "email": "jcordova0087@gmail.com"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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

test('Modulo Cliente - PATCH Actualizar Cliente propiedad invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "propiedad": "algo"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/16', {
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