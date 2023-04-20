import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './auth';
import { GenerosSlice } from './generos';
import { UserSlice } from './usuarios/';
import { TipoUsuarioSlice } from './tipo_usuarios';
import { EspecialidadSlice } from './especialidades/especialidades_slice';
import { EnfermedadSlice } from './enfermedades/enfermedades_slice';
import { DialogSlice } from './dialog/dialog_slice';
import { LoadingSlice } from './loading';
import { AlergiaSlice } from './alergias';
import { SelectedRowSlice } from './table';
import { MedicamentoSlice } from './medicamentos/medicamentos_slice';
import { HorariosSlice } from './horarios/horarios_slice';

export const store = configureStore({
    reducer: {
        dialog: DialogSlice.reducer,
        loading: LoadingSlice.reducer,
        auth: AuthSlice.reducer,
        user: UserSlice,
        genero: GenerosSlice.reducer,
        tipoUsuario: TipoUsuarioSlice.reducer,
        especialidad: EspecialidadSlice.reducer,
        enfermedades: EnfermedadSlice.reducer,
        alergias: AlergiaSlice.reducer,
        selectedRow: SelectedRowSlice.reducer,
        medicamentos: MedicamentoSlice.reducer,
        horarios: HorariosSlice.reducer
    }
});