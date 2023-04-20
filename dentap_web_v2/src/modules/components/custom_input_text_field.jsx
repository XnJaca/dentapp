import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'
import { classNames } from 'primereact/utils'
import React from 'react'

// export const CustomInputText = ({ id, label, value, onChange, submitted, keyfilter }) => {
//     console.log('CustomInputText', keyfilter);
//     return (
//         <div className='col-12 col-md-6'>
//             <div className="field">
//                 <label htmlFor={id} className="font-bold">
//                     {label}
//                 </label>

//                 <InputText
//                     id={id}
//                     value={value ? value : ''}
//                     onChange={onChange}
//                     required
//                     className={classNames({ 'p-invalid': submitted && !value })}
//                     keyfilter={keyfilter}
//                 />
//                 {submitted && !value && <small className="p-error">{label} es requerido.</small>}
//             </div>
//         </div>
//     );
// };