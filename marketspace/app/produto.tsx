import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from "expo-router"
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>

        {/* ------ NAV BAR ------ */}
    <View style={styles.nav1}>
        {/*
    <TouchableOpacity style={styles.buttonSalvar} onPress={() =>
            this.props.navigation.push('inicio')}>
            <Image style={styles.seta1} source={require('../../assets/seta1.png')} />
          </TouchableOpacity>
      */}

<Link href="/"> <img src={'../assets/seta1.png'} style={styles.seta1}/> </Link>


    <View style={styles.cinza}>
    <img style={styles.search} src={'../../assets/search.png'} alt="Image" />
    <img style={styles.points} src={'../../assets/points.png'} alt="Image" />
      </View>

    </View>

<View style={styles.nav2}>
{/* ------ MEUS LIVROS SECTION ------ */}
    <View style={styles.meuslivros}>
      <Text style={styles.meus}>Meus </Text>
      <Text style={styles.livros}>Livros </Text>
      <img style={styles.seta2} src={'../../assets/seta2.png'} alt="Image" />
    </View>

{/* ------ PERFIL ------ */}
<View style={styles.perfiltodo}>

    <View style={styles.ladoperfil}>
      <Text style={styles.n}>728</Text>
      <Text style={styles.pages}>PÁGINAS LIDAS</Text>
    </View>  
    <img style={styles.user} src={'../../assets/user.jpg'} alt="Image" />


</View>

</View>

     <View style={styles.linha}></View> {/* Linha */}


{/* ------ BOOKMARKS ------ */}
<View style={styles.todosbookmark}>
      <img style={styles.bookmark} src={'../assets/broxo.png'} />
      <img style={styles.bookmark} src={'../assets/bverde.png'} />
      <img style={styles.bookmark} src={'../assets/bamarelo.png'} />
      <img style={styles.bookmark} src={'../assets/bazul.png'} />
      <img style={styles.bookmark} src={'../assets/blaranja.png'} />
      <img style={styles.bookmark} src={'../assets/bpreto.png'} />
</View>

      <View style={styles.linha}></View> {/* Linha */}


<View style={styles.cinza}> {/* area cinza */}
      <Text style={styles.todos}>TODOS 6</Text>


{/* ------ LIVROS ------ */}
<View>

<View style={styles.todoslivro}>
      <img style={styles.livro} src={'../assets/book1.jpg'} />
      <img style={styles.livro} src={'../assets/book2.jpg'} />
      <img style={styles.livro} src={'../assets/book3.jpg'} />
      <img style={styles.livro} src={'../assets/book4.jpg'} />
      <img style={styles.livro} src={'../assets/book5.jpg'} />
      <img style={styles.livro} src={'../assets/book6.jpg'} />
</View>

{/*------ BOOKMARKS ON BOOKS ------*/}
<View style={styles.todosmark}>            
<img style={styles.mark} src={'../assets/markazul.png'} />
<img style={styles.mark} src={'../assets/markazul.png'} />
<img style={styles.mark} src={'../assets/markverde.png'} />  
<img style={styles.mark} src={'../assets/markverde.png'} />
<img style={styles.mark} src={'../assets/markamarelo.png'} />
<img style={styles.mark} src={'../assets/markamarelo.png'} />
</View>

</View>


</View> {/*area cinza*/}


      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 8,
        width:'100%',
        height:'100%'
    },
    seta1: {
        width:25,
        height:25,
        flexDirection:'row',
        marginLeft:5
      },
      search:{
        width:25,
        height:25,
        flexDirection:'row',
      },
      points: {
        width:25,
        height:25,    
        flexDirection:'row',
        marginRight:10
      },
      cinza: {
        flexDirection:'column',
        gap:20
      },
      nav1:{
        flexDirection:'row',
        gap:20,
        marginTop:-120,
        justifyContent:'space-between',
      },
    
      meus:{
        fontSize:20,
        color:'#595a5b'
      },
      livros:{
        fontSize:20
      },
      seta2:{
        width:20,
        height:20,
        marginTop:5
      },
      meuslivros:{
        flexDirection:'row',
        alignSelf:'flex-start',
        margin:15,
        marginLeft:10
      },
    
      n: {
        fontSize:16,
        flexDirection:'row',
        alignSelf:'flex-end',
        fontWeight:'bold'
      },
      pages:{
        fontSize:12,
        flexDirection:'row',
        alignSelf:'flex-end'
      },
      user:{
        width:60,
        height:60,
        borderRadius:60/2,
        flexDirection:'column',
        alignSelf:'center',
        marginTop:-14,
        marginLeft:10,
        marginRight:10
      },
      ladoperfil: {
        flexDirection:'column'
      },
      perfiltodo: {
        flexDirection:'row',
        alignSelf:'flex-end',
      },
      nav2: {
        flexDirection:'row',
        justifyContent:'space-between',
        gap:0,
        marginTop:20,
        marginBottom:12
      },
    
      linha: {
        borderWidth:1,
        borderColor:'#c1c2c1'
      },
    
      bookmark: {
        width:35,
        height:35
      },
      todosbookmark:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:8,
        marginBottom:8,
        marginRight:5,
        marginLeft:5
      },
      
      todos:{
        margin:13,
        marginLeft:15,
        color:'#595a5b'
      },
    
    
    
      livro: {
        width:90,
        height:130,
        marginBottom:5,
        borderRadius:5,
      },
      todoslivro: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        gap:15,
      },
    
      mark: {
        width:90,
        height:130,
        marginBottom:5,
        borderRadius:5,
      },
    
      todosmark:{
        justifyContent:'space-around',
        flexDirection:'row',
        flexWrap:'wrap',
        zIndex:2,
        marginTop:-285,
        gap:15
      }
});
