export const CustomTexfield = ({ label, id, type, name, onChange, value, required = true, autofocus = false}) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} className="frm-control" name={name} tabIndex="1" onChange={onChange} value={value} required={required} autoFocus={autofocus} />
            <div className="invalid-feedback">
                Por favor ingrese su cedula o email.
            </div>
        </div>
    );
}