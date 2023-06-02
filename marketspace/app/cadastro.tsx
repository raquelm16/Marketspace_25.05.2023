import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from "expo-router"
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>

<View style={styles.forms}>

<View>

        <Text style={styles.title}>
        Crie a sua conta!
      </Text>
      <Text style={styles.paragraph}>
        É rápido, fácil e grátis.
      </Text>

      <label>
      <Text style={styles.titleform}>Dados de acesso  </Text>
      </label>
  <label>
    <Text style={styles.texto}>{'\n'}Email {'\n'}</Text>
    <input type="text" placeholder="Email" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Confirme seu Email{'\n'}</Text>
    <input type="text" placeholder="Email" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Senha{'\n'}</Text>
    <input type="text" placeholder="Senha" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Confirme a senha{'\n'}</Text>
    <input type="text" placeholder="Confirme a senha" style={styles.input}/>
  </label>
  <Text>{'\n'}</Text>

  <Link style={styles.buttonSalvar} href="/biblioteca">Salvar</Link>
  {/*
  <TouchableOpacity style={styles.buttonSalvar} onPress={() =>
            this.props.navigation.push('biblioteca')}>
            <Text style={styles.textSalvar}>Salvar</Text>
          </TouchableOpacity>
          */}
  </View>


          </View>

        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    padding:8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
  title:{
    fontSize:17,
    fontWeight:'bold',
    textAlign:'left',
    paddingTop:17
  },
  paragraph: {
    fontSize:14,
    marginTop:3,
    marginBottom:14
  },
  forms:{
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
    marginLeft:25
  },
  titleform:{
    fontWeight:'bold',
    paddingTop:10
  },
  texto:{
    padding:0,
    fontWeight:'600'
  },
  input:{
    padding:5,
    width:270,
    marginBottom:'-10',
    marginTop:5,
    borderRadius:6,
    border:'1.7px solid #c1c2c1',
   // borderWidth:2,
   // borderColor:'#c1c2c1',
    color:'#c1c2c1',
    flexDirection:'row',
    alignSelf:'center'
  },
  buttonSalvar:{
    marginTop:15,
    alignSelf:'center',
    width:270,
    backgroundColor:'#0b86d0',
    borderRadius:20,
    border:'none',
    padding:6,
    textAlign:'center',
    color:'#fff'
  },
  textSalvar:{
    textAlign:'center',
    color:'#fff'
  }
});
