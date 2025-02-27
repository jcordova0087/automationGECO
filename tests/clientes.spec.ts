import { test, expect, request } from '@playwright/test';

test('Modulo Cliente - GET request', async ({ }) => {
     // Crear un nuevo contexto de solicitud
     const apiRequestContext = await request.newContext();

     // Realizar una solicitud GET
     const response = await apiRequestContext.get('https://sistemageco.lat/api/cliente?limit=10&offset=1');
 
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

    const expectedKeys = ['id', 'nombre', 'rfc', 'telefono', 'email', 'fecha', 'tipoEntidadId', 'eliminado'];

    //Validar la estructura y datos de cada producto
    productos.forEach((item, index) => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());

        expect(typeof item.id).toBe('number');
        expect(typeof item.nombre).toBe('string');
        expect(typeof item.rfc).toBe('string');
        expect(typeof item.telefono).toBe('string');
        expect(typeof item.email).toBe('string');
        expect(typeof item.fecha).toBe('string');
        expect(typeof item.tipoEntidadId).toBe('number');
        expect(item.eliminado).toBeNull();
    });
 
     // Cerrar el contexto de la solicitud
     await apiRequestContext.dispose();
});

test('Modulo Cliente - GET request id valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Realizar una solicitud GET
    const response = await apiRequestContext.get('https://sistemageco.lat/api/cliente/3');

    // Obtener el cuerpo de la respuesta en formato JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Verificar que la solicitud fue exitosa
    expect(response.status()).toBe(200);

    expect(responseBody).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            nombre: expect.any(String),
            rfc: expect.any(String),
            telefono: expect.any(String), // Puede ser vacío, pero debe ser string
            email: expect.any(String), // Puede ser vacío, pero debe ser string
            fecha: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/), // Validar formato YYYY-MM-DD
            tipoEntidadId: expect.any(Number),
            eliminado: null // Debe ser exactamente `null`
        })

    );

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Cliente - POST busqueda', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        busqueda: "ley"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

    const expectedKeys = ['id', 'nombre', 'rfc', 'telefono', 'email', 'fecha', 'tipoEntidadId', 'eliminado'];

    responseBody.forEach((item, index) => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());

        expect(typeof item.id).toBe('number');
        expect(typeof item.nombre).toBe('string');
        expect(typeof item.rfc).toBe('string');
        expect(typeof item.telefono).toBe('string');
        expect(typeof item.email).toBe('string');
        expect(typeof item.fecha).toBe('string');
        expect(typeof item.tipoEntidadId).toBe('number');
        expect(item.eliminado).toBeNull();
       
    });

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Cliente - POST Fechas validas', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {"fechaInicio": "2024-08-01", "fechaFin": "2025-12-30"};

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

    const expectedKeys = ['id', 'nombre', 'rfc', 'telefono', 'email', 'fecha', 'tipoEntidadId', 'eliminado'];

    responseBody.forEach((item, index) => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());

        expect(typeof item.id).toBe('number');
        expect(typeof item.nombre).toBe('string');
        expect(typeof item.rfc).toBe('string');
        expect(typeof item.telefono).toBe('string');
        expect(typeof item.email).toBe('string');
        expect(typeof item.fecha).toBe('string');
        expect(typeof item.tipoEntidadId).toBe('number');
        expect(item.eliminado).toBeNull();
       
    });

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Cliente - POST Fechas invalidas', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {"fechaInicio": "", "fechaFin": ""};

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

test('Modulo Cliente - POST Crear Cliente', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        'tipoEntidadId': 1
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

test('Modulo Cliente - GET id invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Realizar una solicitud GET
    const response = await apiRequestContext.get('https://sistemageco.lat/api/cliente/asdasd');

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

test('Modulo Cliente - PATCH Actualizar Cliente', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba",
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/39', {
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

test('Modulo Cliente - PATCH Actualizar Cliente valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/cliente/39', {
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

test('Modulo Cliente - DELETE Cliente creado', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente de prueba", 
        "rfc": "GODE561231GR8",
        "email": "",
        "telefono": "",
        "fecha": "2025-02-26",
        'tipoEntidadId': 1
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

    const match = responseBody.Mensaje.match(/id: (\d+)/);
    const id = match[1];
    // Hacer una solicitud POST
    const responseDelete = await apiRequestContext.delete(`https://sistemageco.lat/api/cliente/${id}`, {
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


test('Modulo Cliente - PUT metodo invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "nombre": "cliente prueba 2"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.put('https://sistemageco.lat/api/cliente', {
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

test('Modulo Cliente - Filtrar Fechas propiedad añadida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "fechaInicio": "2024-01-01", 
        "fechaFin": "2024-01-31", 
        "propiedad": 1
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

test('Modulo Cliente - Filtrar Fechas valores validos', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "fechaInicio": "2024-07-01", 
        "fechaFin": "2025-01-30"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/cliente', {
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

    const expectedKeys = ['id', 'nombre', 'rfc', 'telefono', 'email', 'fecha', 'tipoEntidadId', 'eliminado'];
    
    responseBody.forEach((item, index) => {
        expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());

        expect(typeof item.id).toBe('number');
        expect(typeof item.nombre).toBe('string');
        expect(typeof item.rfc).toBe('string');
        expect(typeof item.telefono).toBe('string');
        expect(typeof item.email).toBe('string');
        expect(typeof item.fecha).toBe('string');
        expect(typeof item.tipoEntidadId).toBe('number');
        expect(item.eliminado).toBeNull();
       
    });

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Cliente - Filtrar Fechas fecha inicio vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "fechaInicio": "", 
        "fechaFin": "2024-01-31"
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

test('Modulo Cliente - Filtrar Fechas fecha fin vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "fechaInicio": "2025-01-01", 
        "fechaFin": ""
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