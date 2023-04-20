import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { useSelector } from "react-redux";

export const CustomDropdown = ({ id, label, options, value, onChange, optionLabel, submitted }) => {
    const generos = useSelector(state => state.genero);
    console.log('CustomDropdown - value:', value);

    // Buscar la opción que tiene el mismo id que value
    const selectedOption = options.find(option => option.id === value);

    return (
        <div className='col-12 col-md-6'>
            <div className="field">
                <label htmlFor={id} className="font-bold">{label}</label>
                <Dropdown
                    id={id}
                    value={selectedOption}
                    options={generos.loading ? [{ label: 'Obteniendo datos', value: null }] : options}
                    onChange={onChange}
                    className={classNames({ 'p-invalid': submitted && !selectedOption })}
                    placeholder="Selecciona una opción"
                    required
                    optionLabel={optionLabel}
                    emptyMessage='Obteniendo los datos...'
                />
                {submitted && !selectedOption && <small className="p-error">{label} es requerido.</small>}
            </div>
        </div>
    );
}