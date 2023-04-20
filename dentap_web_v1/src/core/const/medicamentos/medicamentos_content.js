export const medicamentosInputs = (id, nombre, descripcion, precio) => {
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
      {
        id: "",
        label: "Precio",
        name: "precio",
        value: precio || "",
        onChange: null,
        autoFocus: false,
        submitted: null,
        keyfilter: "money"
      },
    ];
  };