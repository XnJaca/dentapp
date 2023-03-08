
// call to api
export const FetchToApi = async ({ endpoint, method, body = '' }) => {
    try {
        const resp = await fetch(endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });
        console.log('reeesss', resp);
        if (!resp.ok) {
            throw new Error('Error en la petición');           
        }
        const data = await resp.json();
        console.log(data);
        return data;
    } catch (error) {
        return error;
    }
}
