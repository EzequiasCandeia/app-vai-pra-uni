import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Colors, Text } from 'react-native-paper';

export default CustomCardCarona = (props) => {
   const { dados: { horasaida, horachegada, localorigem, localdestino, vagas, motoristaId, nomeMotorista } } = props;
   return <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
         <View style={styles.viewHorario}>
            <Text>{horasaida}</Text>
            <Text>{horachegada}</Text>
         </View>
         <View style={styles.barraVertical} />
         <View style={styles.viewLocais}>
            <Text>{localorigem}</Text>
            <Text>{localdestino}</Text>
         </View>
      </View>
      <View style={styles.barraHorizontal} />
      <View style={{ flexDirection: "row" }}>
         <View style={{ flex: 1, padding: 5 }}>
            <Text style={styles.fontInfo}>Motorista: <Text style={{ color: Colors.blue700 }} onPress={() => { console.warn(motoristaId) }}>{nomeMotorista}</Text></Text>
            <Text style={styles.fontInfo}>Vagas: {vagas}</Text>
         </View>
         <View style={{ justifyContent: "center", marginRight: 5 }}>
            <Button mode='outlined' onPress={() => { }}>Agendar</Button>
         </View>
      </View>
   </View>
};


const styles = StyleSheet.create({
   container: { flex: 1, height: 150, backgroundColor: Colors.white, margin: 10, flexDirection: "column", borderRadius: 10, borderColor: Colors.grey500, borderWidth: 1 },
   viewHorario: { justifyContent: "space-around", flex: 1, alignItems: "center", padding: 10 },
   barraVertical: { borderLeftColor: Colors.grey500, borderLeftWidth: StyleSheet.hairlineWidth },
   barraHorizontal: { borderBottomColor: Colors.grey500, borderBottomWidth: StyleSheet.hairlineWidth },
   viewLocais: { justifyContent: "space-around", flex: 4, padding: 10 },
   fontInfo: { fontSize: 16 }
});