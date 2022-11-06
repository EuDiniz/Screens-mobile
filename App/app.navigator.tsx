import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import  {LoginScreen}  from './screens/login/login.screen';
import { RegisterScreen } from './screens/register/register.screen';



const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Login">
           <Screen name="Login" component={LoginScreen}></Screen>
           <Screen name="Home" component={RegisterScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;