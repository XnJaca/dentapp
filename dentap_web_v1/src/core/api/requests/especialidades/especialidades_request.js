import { FetchToApi } from '../../../utils';
import { EndPoint } from '../../endpoints/endpoint';

export const getEspecialidades = async () => {
 try {
const response = await FetchToApi({
    endpoint: EndPoint.especialidades,
    method: 'GET',
    });
    return response.data
} catch (error) {
  console.log('ERROR', error);;
   return error
  }
}