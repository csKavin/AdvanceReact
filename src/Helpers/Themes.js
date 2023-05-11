import { ThemeProvider, createTheme } from '@mui/material/styles';

const mainRoot = document.documentElement;
mainRoot.style.setProperty("--sideNavColor", "#332620")
mainRoot.style.setProperty("--applicationTheme", "#f1f1f1")
mainRoot.style.setProperty("--primaryColor", "#e05717")


const theme = createTheme({
      typography: {
            allVariants: {
                  fontFamily: ['Red Hat Text', 'sans-serif'].join(','),
                  textTransform: 'none',
            },
      },
});

export function Themes({ children }) {
      return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}