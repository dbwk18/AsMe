import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "./font.module.css";


const theme = responsiveFontSizes(createTheme({
    typography: {
        fontFamily: [
            "KoPubDotumMedium",
        ].join(','),
        h1: {
            fontWeight: 700
        },
        h2: {
            fontWeight: 700
        },
        h3: {
            fontWeight: 700
        },
        h4: {
            fontWeight: 700
        },
    },
    palette: {
        background: {
            default: "#fff"
        },
        primary: {
            light: "#FCF9C6",
            main: "#C7D36F",
            dark: "#9EB23B"
        },
        secondary: {
            main: "#E0DECA",
            contrastText: "#fff",
        },
        accent: {
            main: "#000",
            contrastText: "#fff"
        },
        // text: {
        //     primary: '#000000',//black
        //     secondary: '#FFFFFF',//white
        // },
        // error: {
        //     main: '#D72A2A',//red
        // },
        // warning: {
        //     main: '#FC7B09',//orange
        // },
        // info: {
        //     main: '#6B7D6A',//gray
        // },
        // success: {
        //     main: '#09FE00',//green
        // },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xl: 1440,
            xxl: 1920,
        }
    }
}));

export default theme;
