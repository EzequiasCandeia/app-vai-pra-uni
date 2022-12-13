import React from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { CustomTextInput } from '_atoms';

export default ControlTextInput = (props) => {
   const { nome, regras, mask, control, errors, secureTextEntry,placeholder, autoFocus = false, label, autoComplete, keyboardType, returnKeyType, onSubmitEditing = () => { } } = props;
   const propsTextField = { nome, autoFocus, secureTextEntry, label,placeholder, errors, mask, autoComplete, keyboardType, returnKeyType, onSubmitEditing };
   return <>
      <Controller
         control={control}
         name={nome}
         rules={regras}
         render={({ field }) => {
            return <CustomTextInput {...propsTextField} field={field} />;
         }}
      />
      {!!errors[nome] ?
         <HelperText type="error" visible={true} >
            {errors[nome]?.message}
         </HelperText>
         : <View style={{ height: 5 }}></View>
      }
   </>
};