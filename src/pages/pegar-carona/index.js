import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { SafeAreaView, View, StyleSheet } from "react-native"
import { Button, Colors, Text } from "react-native-paper";
import { UserService } from "_services";
import { ControlTextInput } from '_components/molecules';
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { criarAgendamento } from "_services/agendamentos-service";


export default PegarCarona = ({ navigation }) => {


   const { control, handleSubmit, formState: { errors }, setFocus } = useForm({});


   const onSubmit = async (data) => {
      const cadastrado = await criarAgendamento(data);
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
                  <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ ...style.botoes }}>AGENDAR CARONA</Button>
               </View>
            }
         >
            <View style={style.form}>
               <ControlTextInput
                  nome="localorigem"
                  label="Local de Saida"
                  autoComplete="name"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe seu local de partida!',
                        value: true
                     }
                  }}
                  autoFocus={true}
                  errors={errors}
                  onSubmitEditing={() => setFocus("datasaida")}
               />
               <ControlTextInput
                  nome="datasaida"
                  label="Data Saida"
                  autoComplete="name"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe data da viagem!',
                        value: true
                     }
                  }}
                  autoFocus={false}
                  errors={errors}
                  onSubmitEditing={() => setFocus("horasaida")}
               />
               <ControlTextInput
                  nome="horasaida"
                  label="Hora Saida"
                  autoComplete="name"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe a hora da viagem!',
                        value: true
                     }
                  }}
                  autoFocus={false}
                  errors={errors}
                  onSubmitEditing={() => setFocus("localdestino")}
               />
               <ControlTextInput
                  nome="localdestino"
                  label="Local de Chegada"
                  autoComplete="name"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe o local de destino!',
                        value: true
                     }
                  }}
                  autoFocus={false}
                  errors={errors}
                  onSubmitEditing={() => setFocus("datachegada")}
               />
               <ControlTextInput
                  nome="datachegada"
                  label="Data de Chegada"
                  autoComplete="name"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe o local de destino!',
                        value: true
                     }
                  }}
                  autoFocus={false}
                  errors={errors}
                  onSubmitEditing={() => setFocus("horachegada")}
               />
               <ControlTextInput
                  nome="horachegada"
                  label="Hora de Chegada"
                  autoComplete="name"
                  returnKeyType="next"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe a hora que vai chegar no destino!',
                        value: true
                     }
                  }}
                  autoFocus={false}
                  errors={errors}
                  onSubmitEditing={() => setFocus("vagas")}
               />
               <ControlTextInput
                  nome="vagas"
                  label="Vagas Disponivel"
                  autoComplete="name"
                  returnKeyType="done"
                  control={control}
                  regras={{
                     required: {
                        message: 'Informe a quantidade de vagas disponivel!',
                        value: true
                     }
                  }}
                  autoFocus={false}
                  errors={errors}
                  onSubmitEditing={() => handleSubmit(onSubmit)}
               />
            </View>
         </KeyboardAvoidingScrollView>
      </SafeAreaView>
   )
}



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
      justifyContent: "center"
   },
   botoes: {
      width: "60%",
      height: 45,
      justifyContent: "center"
   }
});