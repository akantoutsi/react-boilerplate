import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    common: { black: "#676464", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgb(118, 90, 187)",
      main: "rgb(93, 50, 199)",
      dark: "rgb(62, 18, 167)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgb(168, 115, 193)",
      main: "rgb(145, 49, 190)",
      dark: "rgb(112, 16, 156)",
      contrastText: "#fff"
    },
    error: {
      light: "rgb(241, 106, 106)",
      main: "rgb(255, 0, 0)",
      dark: "rgb(196, 0, 0)",
      contrastText: "#fff",
    },
    success: {
      light: "rgb(86, 214, 66)",
      main: "rgb(0, 163, 0)",
      dark: "rgb(0, 115, 0)",
      contrastText: "#fff",
    },
    warning: {
      light: "rgb(255, 186, 99)",
      main: "rgb(255, 137, 52)",
      dark: "rgb(198, 90, 0)",
      contrastText: "#fff",
    },
    info: {
      light: "rgb(255, 255, 82)",
      main: "rgb(255, 215, 0)",
      dark: "rgb(199, 166, 0)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgb(0, 0, 0, 0.87)",
      secondary: "rgb(0, 0, 0, 0.54)",
      disabled: "rgb(0, 0, 0, 0.38)",
      hint: "rgb(0, 0, 0, 0.38)",
    },
  },
  // spacing: 8,
  spacing: factor => `${1 * factor}rem`,
  status: {
    danger: 'orange',
  },
  textAlign: 'center',
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // htmlFontSize: 8,
    fontSize: 14,
    body1: {
      fontSize: 1.05,
      color: '#999999',
    },
    subtitle1: {
      fontSize: 1.01,
      fontWeight: 400,
      color: '#C0C0C0',
    }, 
    subtitle2: {
      fontSize: 1.01,
      fontWeight: 400,
      color: '#C0C0C0',
    },
    caption: {
      color: '#C0C0C0',
    },
    button: {
    
    },
    // h1: {
    //   fontSize: '3rem',
    //   '@media (min-width:600px)': {
    //     fontSize: '4.5rem',
    //   },
    //   [theme.breakpoints.up('md')]: {
    //     fontSize: '6rem',
    //   },
    // }
  },
}));
