import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {UserService} from '_services';
import { Button } from 'react-native-paper';

const Configuracoes = ({navigation}) => {
  const logout = () => {
    UserService.logout();
    //usa o reset abaixo pra ele não conseguir voltar pra tela após deslogar
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  };
  return (
    <>
      <Text>Tela de configurações</Text>
      <Button onPress={logout} >SAIR</Button>
    </>
  );
};

export default Configuracoes;
