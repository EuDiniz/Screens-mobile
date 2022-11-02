import React from 'react';
import { Provider as PaperProvider, TextInput} from 'react-native-paper';
import { LoginScreen } from './App/screens/login/login.screens';
import { theme } from './App.style';
import { RegisterScreen } from './App/screens/register/register.screens';

const App = () => {

 return (
    <PaperProvider theme={theme}>
     <RegisterScreen /> 
    </PaperProvider>
  );
};
export default App;