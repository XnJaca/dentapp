export const inputsAlergia = (id, nombre, descripcion) => {
    return [
      {
        id: id ||"",
        label: "Nombre",
        name: "nombre",
        value: nombre || "",
        onChange: null,
        autoFocus: true,
        submitted: null,
      },
      {
        id: "",
        label: "Descripcion",
        name: "descripcion",
        value: descripcion || "",
        onChange: null,
        autoFocus: false,
        submitted: null,
      },
    ];
  };