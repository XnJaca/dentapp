
export const CustomDropdown = ({ label, options, value, onChange }) => {
    return (
        <div className='col-12 col-md-2 mt-5'>
            <div className="field">
                <label htmlFor="genero" className="font-bold">{label}</label>
                <Dropdown
                    value={value}
                    options={options}
                    onChange={onChange}
                    placeholder="Selecciona una opción"
                />
            </div>
        </div>
    );
}