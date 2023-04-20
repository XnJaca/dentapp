export const inputsHorario = (id, dia, hora_inicio, hora_final) => {
    return [
      {
        id: id ||"",
        label: "Dia",
        name: "dia",
        value: dia || "",
        onChange: null,
        autoFocus: true,
        submitted: null,
      },
      {
        id: "",
        label: "Hora Inicio",
        name: "hora_inicio",
        value: hora_inicio || "",
        onChange: null,
        autoFocus: false,
        submitted: null,
      },
      {
        id: "",
        label: "Hora Final",
        name: "hora_final",
        value: hora_final || "",
        onChange: null,
        autoFocus: false,
        submitted: null,
      },
    ];
  };