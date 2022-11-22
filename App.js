import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.style';
import { LoginScreen } from './App/screens/login/login';

const  App = () => {

 return (
    <PaperProvider theme={theme}>
  <LoginScreen/>
    </PaperProvider>
  );
};
export default App;