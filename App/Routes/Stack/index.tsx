import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/home/home.screen"
import Login  from "../../screens/login/login"
import Register from "../../screens/register/register"

const { Navigator, Screen } = createNativeStackNavigator ()

export default function {
    return(
        <Navigator initialRouteName="Login"> 
            <Screen name="Login" component={Login}/>
            <Screen name="Register" component={Register}/>
            <Screen name="Home" component={Home}/>
        </Navigator>
    )
}

    