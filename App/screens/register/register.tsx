import React  from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { registerStyle } from './register.style';
import { HeaderComponent } from '../../components/header/header.componet';

export const RegisterScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title="Registrar"/>
                <View style={registerStyle.content}>
                       <TextInput label="Nome" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Senha" secureTextEntry={true} right={<TextInput.Icon icon="eye" color={registerStyle.icon.color}/>} />
                    <TextInput label="Confirme a Senha" secureTextEntry={true} right={<TextInput.Icon icon="eye"  color={registerStyle.icon.color}/>}/>
                    <TextInput label="Numero de Celular" keyboardType="phone-pad" />
                    <Button mode="contained" style={registerStyle.button}> Registrar </Button>
                </View>
                 
            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterScreen