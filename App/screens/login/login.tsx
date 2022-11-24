import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {  SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { loginStyle } from './login.style';

import { propsStack} from "../../Routes/Stack/Models"

export const LoginScreen = ( ) => {
      const navigation = useNavigation<propsStack> ()
    return (

        <SafeAreaView style={loginStyle.content}>
          <View style={loginStyle.view}>
           <Card>
             <Card.Title title="App "  titleStyle={loginStyle.cardTitle}></Card.Title>
            <Card.Content>
                 <TextInput label="Email" keyboardType="email-address" ></TextInput>
                 <TextInput label="Senha" secureTextEntry={true}></TextInput>

                 <Button
                onPress={() => navigation.navigate("Home")}
                 mode="contained" 
                 style={loginStyle.cardButton} > 
                 
                 Login 

                </Button>
                 <Button
               
                 onPress={() => navigation.navigate("Register")}
                 style={loginStyle.cardButton}> 
                 Não possui uma conta ? 

                 </Button>
                 <Button uppercase={false}  style={loginStyle.cardButton} >Esqueci a senha</Button>
                 <Button uppercase={false}  style={loginStyle.cardButton} >Atendimento</Button>
                 
            </Card.Content>
           </Card>
          </View>
          
        </SafeAreaView>
    );
}
export default LoginScreen