import React, { useRef } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Colors, HelperText, TextInput } from "react-native-paper";
import { useForm, Controller } from 'react-hook-form';
import { createSession } from "_services/api";
import { CommonActions } from "@react-navigation/native";
import { UserService } from '_services';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { ControlTextInput } from '_components/molecules';

const LoginImg = require("../../assets/img/login.png");

export default Login = ({ navigation }) => {

   const { control, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         email: '',
         password: ''
      }
   });

   const onSubmit = async (data) => {
      const logado = await UserService.login({ email: data.email, password: data.password });
      if (logado == true) {
         navigation.dispatch(
            CommonActions.reset({
               index: 1,
               routes: [{ name: 'BottomTabNavigator' }],
            }),
         );
      } else {
         console.warn("Usuário ou senha invalido");
      }
   };



   return (
      <SafeAreaView style={style.container}>
         <KeyboardAvoidingScrollView
            keyboardDismissMode='none'
            containerStyle={style.container}
            contentContainerStyle={style.content}
         >
            <View style={style.viewlogo}>
               <Image source={LoginImg} />
            </View>
            <View style={style.form}>
               <ControlTextInput
                  autoFocus={true}
                  nome="email"
                  label="Email"
                  returnKeyType="next"
                  control={control}
                  autoComplete="email"
                  regras={{
                     required: {
                        message: 'Informe o email',
                        value: true
                     },
                     pattern: {
                        message: 'Email invalido',
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                     }
                  }}
                  keyboardType="email-address"
                  errors={errors}
                  onSubmitEditing={() => setFocus("password")}
               />

               <ControlTextInput
                  nome="password"
                  label="Senha"
                  autoComplete="password-new"
                  secureTextEntry={true}
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe a senha, minimo 5 caracteres',
                        value: true
                     },
                     minLength: {
                        message: 'Minimo 5 caracteres',
                        value: 5
                     }
                  }}
                  returnKeyType="submit"
                  keyboardType="default"
                  errors={errors}
                  onSubmitEditing={() => handleSubmit(onSubmit)}
               />

               <View style={style.viewButtons}>
                  <Button mode="contained" onPress={handleSubmit(onSubmit)} style={style.botaoEntrar}>ENTRAR</Button>
                  <View style={{ height: 5 }}></View>
                  <Button mode="outlined" onPress={() => navigation.push("Cadastro")} style={style.botaoCadastar}>CADASTRAR-SE</Button>
               </View>
            </View>
         </KeyboardAvoidingScrollView>
      </SafeAreaView >
   );
};



const style = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.white,
   },
   content: {
      padding: 16,
      alignItems: "center",
      height: "100%",
   },
   textInput: {
      backgroundColor: '#fff',
      borderRadius: 5
   },
   form: {
      display: "flex",
      width: "80%",
      justifyContent: "flex-end",
      flex: 4,
   },
   viewlogo: {
      flex: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
   },
   botaoEntrar: {
      height: 45,
      justifyContent: "center"
   },
   botaoCadastar: {
      height: 45,
      justifyContent: "center"
   }
});