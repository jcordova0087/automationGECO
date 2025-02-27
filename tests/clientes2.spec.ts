import { test, expect, request } from '@playwright/test';

test('Modulo Cliente - POST Crear Cliente propiedad añadida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1,
        "nueva propiedad": "algo"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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



test('Modulo Cliente - POST Crear Cliente propiedad nombre vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente propiedad rfc vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente propiedad rfc valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "asdasdasdasdasdasd",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente propiedad telefono valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "asdasdasdasd",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente propiedad correo valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "asdasdasdasd",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente propiedad fecha vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente propiedad fecha invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "asdasdasdasd",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente propiedad tipoEntidadId vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente nombre valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente rfc valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente correo valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "jcordova0087@gmail.com",
        "telefono": "",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - POST Crear Cliente telefono valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "jcordova0087@gmail.com",
        "telefono": "6622061723",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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


test('Modulo Cliente - POST Crear Cliente tipoEntidadId valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "jcordova0087@gmail.com",
        "telefono": "6622061723",
        "fecha": "2025-02-26",
        "tipoEntidadId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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