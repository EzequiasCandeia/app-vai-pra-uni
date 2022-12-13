import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';

const CustomTextInput = (props) => {
   const { nome, autoFocus = false, secureTextEntry = false, placeholder, errors, mask, label, autoComplete, keyboardType, returnKeyType, field: { onChange, onBlur, value, ref }, onSubmitEditing = () => { } } = props;
   return mask ?
      <CustomTextInputMask {...props} /> :
      <TextInput
         ref={ref}
         autoFocus={autoFocus}
         placeholder={placeholder}
         label={label}
         secureTextEntry={secureTextEntry}
         error={!!errors[nome]}
         autoComplete={autoComplete}
         style={style.textInput}
         onBlur={onBlur}
         onChangeText={onChange}
         value={value}
         returnKeyType={returnKeyType}
         keyboardType={keyboardType}
         onSubmitEditing={onSubmitEditing}
      />;

};


const CustomTextInputMask = (props) => {
   const { nome, autoFocus = false, secureTextEntry, errors, placeholder, mask, label, autoComplete, returnKeyType, keyboardType, field: { onChange, onBlur, value, ref }, onSubmitEditing = () => { } } = props;
   const [texto, setTexto] = React.useState("");

   return <TextInput
      label={label}
      placeholder={placeholder}
      error={!!errors[nome]}
      style={style.textInput}
      render={(props2) => {
         return <TextInputMask
            {...props2}
            ref={ref}
            autoFocus={autoFocus}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            autoComplete={autoComplete}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            value={texto}
            onChangeText={(formatted, extracted) => {
               setTexto(formatted);
               onChange(extracted);
            }}
            mask={mask}
         />;
      }}
   />
}


export default CustomTextInput;

const style = StyleSheet.create({
   textInput: {
      backgroundColor: '#fff',
      borderRadius: 5
   },
});