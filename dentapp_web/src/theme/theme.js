import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#696CFF",
        },
        secondary: {
            main: "#575BFF",
        },
        error: {
            main: "#DD3D31",
        }
    },
    //    Typografy style
    typography: {
        fontFamily: "Roboto",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "4rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h4: {
            fontSize: "1.25rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h5: {
            fontSize: "1rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h6: {
            fontSize: "0.9rem",
            fontWeight: 'normal',
            lineHeight: 1.2,
        },

    }
});