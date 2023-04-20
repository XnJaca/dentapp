
// call to api
export const FetchToApi = async ({ endpoint, method, body = '' }) => {
    try {


        console.log('FetchToApi', endpoint, method, body);
        const resp = await fetch(endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: body == '' ? null : JSON.stringify(body)
        }).catch((error) => {
            console.log(error);
        });
        
        console.log('reeesss', resp);
        if (resp == undefined  || !resp.ok) {
            console.log();
            throw new Error('Error en la petición, contacte con un administrador.');
        }

        const data = await resp.json();
        // console.log(data);
        return data;
    } catch (error) {
        return error;
    }
}
