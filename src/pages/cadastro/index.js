import React, { useRef } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Colors, HelperText, TextInput } from "react-native-paper";
import { useForm, Controller } from 'react-hook-form';
import { CommonActions } from "@react-navigation/native";
import { UserService } from '_services';
import { ControlTextInput } from '_components/molecules';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

const LoginImg = require("../../assets/img/login.png");

export default Cadastro = ({ navigation }) => {

   const { control, handleSubmit, formState: { errors }, setFocus } = useForm({
      defaultValues: {
         nome: '',
         cpf: '',
         whatsapp: '',
         email: '',
         password: ''
      }
   });

   const onSubmit = async (data) => {
      const cadastrado = await UserService.cadastrar(data);
      if (cadastrado.status == true) {
         navigation.goBack();
      } else {
         console.error(cadastrado.msg);
      }
   };

   return (
      <SafeAreaView style={style.container}>
         <KeyboardAvoidingScrollView
            keyboardDismissMode='none'
            containerStyle={style.container}
            contentContainerStyle={style.content}
            stickyFooter={
               <View style={style.viewButtons}>
                  <Button mode="outlined" onPress={() => navigation.goBack()} style={{ ...style.botoes }}>VOLTAR</Button>
                  <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ ...style.botoes, backgroundColor: Colors.green500 }}>CADASTRAR</Button>
               </View>
            }
         >
            <View style={style.viewlogo}>
               <Image source={LoginImg} />
            </View>
            <View style={style.form} >
               <ControlTextInput
                  nome="nome"
                  label="Nome"
                  autoComplete="name"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe seu nome',
                        value: true
                     },
                     minLength: {
                        message: 'Minimo 5 caracteres',
                        value: 5,
                     },


                  }}
                  autoFocus={true}
                  errors={errors}
                  onSubmitEditing={() => setFocus("cpf")}
               />
               <ControlTextInput
                  nome="cpf"
                  label="CPF"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe seu CPF',
                        value: true
                     },
                     minLength: {
                        message: 'CPF incorreto',
                        value: 11,
                     }
                  }}
                  keyboardType="numeric"
                  errors={errors}
                  onSubmitEditing={() => setFocus("whatsapp")}
                  mask="[999].[999].[999]-[99]"
               />
               <ControlTextInput
                  nome="whatsapp"
                  label="WhatsApp"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe seu Whatsapp',
                        value: true
                     },
                  }}
                  keyboardType="numeric"
                  errors={errors}
                  onSubmitEditing={() => setFocus("email")}
                  placeholder="+55 (99) 99999-9999"
                  mask="+55 ([99]) [09999]-[9999]"
               />

               <ControlTextInput
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

            </View>
         </KeyboardAvoidingScrollView >
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
      alignItems: "center"
   },
   view: {
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      height: "100%"
   },
   form: {
      display: "flex",
      width: "80%",
      justifyContent: "flex-start",
      flex: 4,
   },
   viewlogo: {
      flex: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
   },
   viewButtons: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: "space-between"
   },
   botoes: {
      width: 160,
      height: 45,
      justifyContent: "center"
   }
});