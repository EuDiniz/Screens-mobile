import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {
 
const login =() => props.navigation.navigate("Register")
    return (
        <SafeAreaView style={loginStyle.content}>
          <View style={loginStyle.view}>
           <Card>
             <Card.Title title="App Bank" titleStyle={loginStyle.cardTitle}></Card.Title>
            <Card.Content>
                 <TextInput label="Email" keyboardType="email-address" ></TextInput>
                 <TextInput label="Senha" secureTextEntry={true}></TextInput>

                 <Button 
                 onPress={login}
                 mode="contained" 
                 style={loginStyle.cardButton} > 
                 
                 Login 

                </Button>
                 <Button 
               
                 uppercase={false}  
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