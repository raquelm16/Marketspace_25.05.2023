import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Link} from "expo-router"
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      
      <img style={styles.logo} src={'../assets/logo.png'} alt="Image" />
      
      <Text style={styles.title}>marketspace</Text>
      <Text style={styles.text}>Seu espaço de compra e venda</Text>

      <Text style={styles.acesse}>Acesse sua conta</Text>

      <input type='name' placeholder='E-mail' style={styles.input}></input>
      <input type='name' placeholder='Senha' style={styles.input}></input>
      <img src={'../assets/eye.png'} style={styles.eye}/>

      <Link href={'/produto'} style={styles.entrar}>Entrar</Link>

      <Text style={styles.ainda}>Ainda não tem acesso?</Text>
      <Link href={'/cadastro'} style={styles.cadastro}>Criar uma conta</Link>



  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 justifyContent: 'center',
backgroundColor: '#ffff',
padding: 8,
},
logo:{
  height: 70,
  flexDirection:'row',
  alignSelf:'center'
},
title:{
  fontSize:30,
  fontWeight:'500',
  textAlign:'center'
},
text:{
  
}




});
