import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { Colors, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomCardCarona } from '_components/molecules';
import { useGetMinhasCaronas } from '_services/minhascaronas';

const UserImg = require("../../assets/img/user.png");

export default Perfil = ({ navigation }) => {

   const { data } = useGetMinhasCaronas();
   console.log(data);

   return (
      <SafeAreaView style={style.container}>
         <View style={style.viewlogo}>
            <Image source={UserImg} style={style.logoImg} />
         </View>
         <View style={{
            flex: 18,
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
         }}>
            {
               data?.caronas?.length ?
                  (
                     data?.caronas.map((c, index) => {
                        return (
                           <View key={index}>
                              <Text>
                                 Local Destino: {c.localdestino}
                              </Text>
                           </View>

                        )
                     })
                  )
                  :
                  <View>
                     <Text style={{ "textAlign": "center", color: Colors.black }}>
                        Não tem carona ainda!
                     </Text>
                  </View>
            }
         </View>
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
   viewlogo: {
      flex: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
   },
   logoImg: {
      width: 70,
      height: 70
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