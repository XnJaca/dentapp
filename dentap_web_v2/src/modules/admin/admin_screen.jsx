import React, { Children, useEffect } from 'react'
import FullScreenMenu from '../components/full_screen_menu'
import { useDispatch, useSelector } from 'react-redux';
import { getTipoUsuarios } from '../../store/tipo_usuarios/tipo_usuario_thunk';
import Swal from 'sweetalert2';
import { getAllergies } from '../../store/allergies/allergies_thunk';


export const AdminScreen = ({ children }) => { 

  return (
    <>
      <FullScreenMenu></FullScreenMenu>

      {children}

      <div className="flex flex-wrap justify-content-center gap-2">
        <h4>DENTAPP - 2023</h4>
      </div>
    </>
  );
};


// export const AdminScreen = () => {

//   const header = (header) => {
//     switch (header) {
//       case 1:
//         return <img alt="Card" src="/src/assets/img/banner/doc-orange.png" />
//         break;
//       case 2:
//         return <img alt="Card" src="/src/assets/img/banner/people.png" />
//         break;
//         case 3:
//         return <img alt="Card" src="/src/assets/img/banner/citas.png" />
//       default:
//         break;
//     }

//   }

//   const footer = (
//     <div className="flex flex-wrap justify-content-end gap-2">
//       <Button label="Gestionar" icon="pi pi-eye" />
//       {/* <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" /> */}
//     </div>
//   );
//   return (
//     <>
//       <FullScreenMenu></FullScreenMenu>
//       <div className="card lg:flex justify-content-center">
//         <div className="card flex  justify-content-center mt-3 p-4">
//           <Card title="Usuarios" subTitle="Gestione los pacientes administrativos de la plataforma." header={header(1)} footer={footer} className="md:w-20rem">
//           </Card>
//         </div>

//         <div className="card justify-content-center mt-3 p-4">
//           <Card title="Pacientes" subTitle="Gestione los pacientes administrativos de la plataforma." header={header(2)} footer={footer} className="md:w-20rem">
//           </Card>
//         </div>

//         <div className="card justify-content-center mt-3 p-4">
//           <Card title="Citas" subTitle="Gestione los pacientes administrativos de la plataforma." header={header(3)} footer={footer} className="md:w-20rem">
//           </Card>
//         </div>
//       </div>

//     </>
//   )
// }


{/* <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
          <div class="border-round bg-blue-100 w-20rem h-12rem p-3 m-3">
            <div className="card flex justify-content-center">
              <Card title="Usuarios" subTitle="Gestione los pacientes administrativos de la plataforma." header={header} footer={footer} className="md:w-25rem">
              </Card>
            </div>
          </div>

          <div class="border-round bg-blue-100 w-20rem h-12rem p-3 m-3">
            <div className="card flex justify-content-center">
              <Card title="Pacientes" subTitle="Gestione los pacientes de la plataforma." header={header} footer={footer} className="md:w-25rem">
              </Card>
            </div>
          </div>

          <div class="border-round bg-blue-100 w-20rem h-12rem p-3 m-3">
            <div className="card flex justify-content-center">
              <Card title="Citas" subTitle="Gestione las citas de la plataforma." header={header} footer={footer} className="md:w-25rem">
              </Card>
            </div>
          </div> */}

{/* <div class="border-round bg-blue-100 w-20rem h-12rem p-3 m-3">
            <div className="card flex justify-content-center">
              <Card title="Usuarios" subTitle="Gestione los usuarios administrativos de la plataforma." header={header} footer={footer} className="md:w-25rem">
              </Card>
            </div>
          </div>

          <div class="border-round bg-blue-100 w-20rem h-12rem p-3 m-3">
            <div className="card flex justify-content-center">
              <Card title="Usuarios" subTitle="Gestione los usuarios administrativos de la plataforma." header={header} footer={footer} className="md:w-25rem">
              </Card>
            </div>
          </div> */}

