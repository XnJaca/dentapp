
// call to api
export const FetchToApi = async ({ endpoint, method, body = '' }) => {
    try {
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
        
        // console.log('reeesss', resp);
        if (resp == undefined  || !resp.ok) {
            throw new Error('Error en la petición, compruebe su conexión a internet');
        }

        const data = await resp.json();
        // console.log(data);
        return data;
    } catch (error) {
        return error;
    }
}
