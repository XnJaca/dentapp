import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./auth/auth_slice";
import { UserSlice } from "./users/user_slice";
import { DialogSlice } from "./dialog";
import { GenerosSlice } from "./generos";
import { TipoUsuarioSlice } from "./tipo_usuarios/tipo_usuario_slice";
import { AllergiesSlice } from "./allergies/allergies_slice";
import { DiseaseSlice } from "./diseases/diseases_slice";
import { MedicineSlice } from "./medicine/medicine_slice";
import { TreatmentSlice } from "./treatment/treatment_slice";
import { TreatmentTypeSlice } from "./treatment_type/treatment_type_slice";
import { PacientesSlice } from "./patients/patients_slice";
import { BloodTypeSlice } from "./tipo_sangre/blood_type_slice";
import { MedicSlice } from "./medics/medic_slice";
import { SpecialitySlice } from "./speciality/speciality_slice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        user: UserSlice.reducer,
        dialog: DialogSlice.reducer,
        genero: GenerosSlice.reducer,
        tipoUsuarios: TipoUsuarioSlice.reducer,
        allergies: AllergiesSlice.reducer,
        diseases: DiseaseSlice.reducer,
        medicines: MedicineSlice.reducer,
        treatment: TreatmentSlice.reducer,
        treatmentType: TreatmentTypeSlice.reducer,
        pacientes: PacientesSlice.reducer,
        bloodType: BloodTypeSlice.reducer,
        medic: MedicSlice.reducer,
        speciality: SpecialitySlice.reducer,
    }
})