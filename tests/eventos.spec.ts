import { test, expect, request } from '@playwright/test';

test('Modulo Evento - GET request', async ({ }) => {
     // Crear un nuevo contexto de solicitud
     const apiRequestContext = await request.newContext();

     // Realizar una solicitud GET
     const response = await apiRequestContext.get('https://sistemageco.lat/api/evento?limit=10&offset=1');
 
     // Obtener el cuerpo de la respuesta en formato JSON
     const responseBody = await response.json();
     //console.log('Respuesta JSON:', responseBody);
 
     // Verificar que la solicitud fue exitosa
     expect(response.status()).toBe(200);

     expect(Array.isArray(responseBody)).toBeTruthy();
     expect(Array.isArray(responseBody[0])).toBeTruthy();

    // Validar que el segundo elemento sea un número
    const numeroExtra = responseBody[1];
    expect(typeof numeroExtra).toBe('number');

    //Validar la estructura y datos de cada producto
    responseBody[0].forEach(evento => {
        expect(evento).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                hora: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
                fecha: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
                usuario: expect.any(String)
            })
        );
    });
 
     // Cerrar el contexto de la solicitud
     await apiRequestContext.dispose();
});

test('Modulo Evento - GET request id valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Realizar una solicitud GET
    const response = await apiRequestContext.get('https://sistemageco.lat/api/evento/500');

    // Obtener el cuerpo de la respuesta en formato JSON
    const responseBody = await response.json();
    //console.log('Respuesta JSON:', responseBody);

    // Verificar que la solicitud fue exitosa
    expect(response.status()).toBe(200);

    //Validar la estructura y datos de cada producto
    expect(responseBody).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            nombre: expect.any(String), 
            hora: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
            fecha: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
            usuario: expect.any(String)
        })
    );

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Evento - POST busqueda', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        busqueda: "Editar"
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

    // Validar que la respuesta es un array
    expect(Array.isArray(responseBody)).toBeTruthy();

    // Iterar sobre cada objeto y validar su estructura y tipos de datos
    responseBody.forEach(evento => {
        expect(evento).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            nombre: expect.any(String),
            hora: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),  // Formato HH:MM:SS
            fecha: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/), // Formato YYYY-MM-DD
            usuario: expect.any(String)
        })
        );
    });


    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Evento - POST busqueda vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        busqueda: ""
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

    // Validar que la respuesta es un array
    expect(Array.isArray(responseBody)).toBeTruthy();

    // Iterar sobre cada objeto y validar su estructura y tipos de datos
    responseBody.forEach(evento => {
        expect(evento).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            nombre: expect.any(String),
            hora: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),  // Formato HH:MM:SS
            fecha: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/), // Formato YYYY-MM-DD
            usuario: expect.any(String)
        })
        );
    });


    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Evento - POST Fechas validas', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {"fechaInicio": "2024-08-01", "fechaFin": "2024-11-02"};

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

    const expectedKeys = ['id', 'nombre', 'hora', 'fecha', 'usuario'];

    // Validar que cada objeto dentro del array cumpla con las expectativas
    responseBody.forEach((item, index) => {
      // Validar que las claves del objeto sean las esperadas (en orden no importa)
      expect(Object.keys(item).sort()).toEqual(expectedKeys.sort());
  
      // Validar tipos de datos de las propiedades
      expect(typeof item.id).toBe('number');
      expect(typeof item.nombre).toBe('string');
      expect(typeof item.hora).toBe('string');
      expect(typeof item.fecha).toBe('string');
      expect(typeof item.usuario).toBe('string');
    });
  

    // Cerrar el contexto de la solicitud
    await apiRequestContext.dispose();
});

test('Modulo Evento - POST Fechas invalidas', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {"fechaInicio": "", "fechaFin": ""};

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1 
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear evento propiedad vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": "",
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - GET id invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Realizar una solicitud GET
    const response = await apiRequestContext.get('https://sistemageco.lat/api/evento/asdasd');

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

test('Modulo Evento - PATCH Actualizar evento valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.patch('https://sistemageco.lat/api/evento/39', {
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

test('Modulo Evento - PUT metodo invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1
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

test('Modulo Evento - POST Crear Evento propiedad añadida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1,
        "nueva propiedad": "algo" 
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad fecha vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad fecha valor invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "asdasdasdasdasd",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad hora vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad hora valor invalida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "asdasdasdasdasd",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad tipoEventoId vacio', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": "",
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad tipoEventoId valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": "asdasdasdasd",
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad usuarioId vacia', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": "",
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad usuarioId valor invalido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": "asdasdasdasdasd",
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento json vacio', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {

    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad tipoEventoId valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad hora valor valido', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad fecha valor valida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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

test('Modulo Evento - POST Crear Evento propiedad usuarioId valor valida', async ({ }) => {
    // Crear un nuevo contexto de solicitud
    const apiRequestContext = await request.newContext();

    // Definir los datos que queremos enviar en el POST
    const requestData = {
        "tipoEventoId": 1,
        "hora": "21:31:03",
        "fecha": "2025-02-14",
        "usuarioId": 1
    };

    // Hacer una solicitud POST
    const response = await apiRequestContext.post('https://sistemageco.lat/api/evento', {
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