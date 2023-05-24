import { Poppins } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export let theme = createTheme({
  palette: {
    primary: {
      main: "#007AFF",
      dark: "#0F70DA",
      contrastText: "#ffff",
    },
    secondary: {
      main: "#2D3748",
      contrastText: "#ffff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      fontFamily: poppins.style.fontFamily,
    },
    button: {
      textTransform: "capitalize",
    },

    h1: {
      color: "#1D1D1D",
      fontSize: 30,
      fontWeight: 600,
    },
    caption: {
      color: "#1D1D1D",
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      color: "#2D3748",
      fontSize: 15,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 15,
      color: "#007AFF",
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        style: { paddingTop: 10.1, paddingBottom: 10.1 },
      },
    },
    MuiInputBase: {
      defaultProps: {
        style: {
          borderColor: "#D1D1D1",
          borderRadius: 6,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
