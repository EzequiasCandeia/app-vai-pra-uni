import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserService } from './services';
import { Store } from './store';

import Login from "_pages/login";
import Home from '_pages/home';
import Cadastro from '_pages/cadastro';

import { Colors, IconButton } from 'react-native-paper';

import { Icon } from 'react-native-elements';

import perfil from '_pages/perfil';
import pegarCarona from '_pages/pegar-carona';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
   const BottomTabNavigator = (props) => {
      const { navigation } = props;
      return (
         <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
               options={{
                  tabBarIcon: () => (<Icon
                     name='search'
                     type='evilicon'
                     color={Colors.grey700}
                  />),
                  headerTitleAlign: "center",
                  title: "Buscar Carona",
                  headerRight: () => (<Icon
                     name='plus'
                     type='evilicon'
                     style={{ marginRight: 10 }}
                     onPress={() => navigation.push("PegarCarona")}
                  />)
               }}
            />

            <Tab.Screen
               name="Perfil"
               component={perfil}
               options={{
                  title: 'Perfil',
                  headerTitleAlign: "center",
                  tabBarIcon: ({ color, size }) => (<Icon
                     name='user'
                     type='evilicon'
                     color={Colors.grey700}
                  />)
               }}
            />
         </Tab.Navigator>
      );
   };

   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName={
               Store.getState()[UserService.reducerKey]?.token
                  ? 'BottomTabNavigator'
                  : 'Login'
            }>
            <Stack.Screen
               component={Login}
               name="Login"
               options={{ headerShown: false }}
            />
            <Stack.Screen
               component={Cadastro}
               name="Cadastro"
               options={{ headerShown: false }}
            />
            <Stack.Screen
               component={BottomTabNavigator}
               name="BottomTabNavigator"
               options={{ headerShown: false }}
            />
            <Stack.Screen
               component={pegarCarona}
               name="PegarCarona"
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
