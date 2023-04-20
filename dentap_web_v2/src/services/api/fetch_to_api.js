
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
        
        if (resp == undefined  || !resp.ok) {
            throw new Error('Error en la petición, contacte con un administrador.');
        }

        const data = await resp.json();
        return data;
    } catch (error) {
        return error;
    }
}
