import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Colors, IconButton, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomCardCarona } from '_components/molecules';
import { refreshAgendamentoAll, useGetAgendamentoAll } from '_services/agendamentos-service';

export default Home = () => {
   const [search, setSearch] = React.useState("");

   const { data } = useGetAgendamentoAll({ search: search });

   const { control, handleSubmit } = useForm({
      defaultValues: {
         search: '',
      }
   });

   const onSubmit = (data) => {
      if (!data.search) {
         setSearch("");
      } else {
         setSearch(data.search);
      }
      refreshAgendamentoAll(data);
   }


   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.viewTextInput}>
            <Controller
               control={control}
               name="search"
               render={({ field: { onChange, onBlur, value, ref } }) => <TextInput
                  label="Pesquisar"
                  mode='outlined'
                  ref={ref}
                  autoFocus={true}
                  onBlur={onBlur}
                  collapsable={false}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="search"
                  keyboardType='web-search'
                  onSubmitEditing={handleSubmit(onSubmit)}
                  style={{
                     backgroundColor: Colors.white,
                     width: 250,
                     height: 50
                  }}
               />}
            />

            <Button mode="contained" style={styles.buscar} onPress={handleSubmit(onSubmit)}>Buscar</Button>
         </View>
         <View style={styles.viewScroll}>
            <ScrollView
               contentContainerStyle={{ padding: 0, margin: 0 }}
            >
               {
                  data?.length ? data.map((e) => <CustomCardCarona key={e.id} dados={e} />)
                     : <View style={{ alignItems: "center" }}>
                        <Text className="text-center mt-5">Nenhuma Carona disponivel</Text>
                     </View>
               }
            </ScrollView>
         </View>
      </SafeAreaView >
   );
};


const styles = StyleSheet.create({
   container: {
      flex: 1,
      display: "flex",
      backgroundColor: Colors.grey50
   },
   viewTextInput: {
      padding: 20,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      display: "flex"
   },
   viewScroll: {
      padding: 0,
      margin: 0
   },
   buscar: {
      justifyContent: "center",
      height: 50
   }
});