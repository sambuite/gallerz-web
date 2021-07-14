import Routes from './routes';
import GlobalStyle from './styles/global';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';

function App() {
  const theme = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme as Theme}>
        <StylesProvider injectFirst>
          <AuthProvider>
            <GlobalStyle />
            <Routes />
          </AuthProvider>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
