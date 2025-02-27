import { test, expect, request } from '@playwright/test';

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