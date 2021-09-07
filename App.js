import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <h2>Guess a number</h2>
      </View>

      <View style={styles.container2}>
      <h3>Start a New Game</h3>
      <View style={styles.shadowBox}>
         <Text style={{textAlign: 'center'}}>Select a number</Text>
        <View style={styles.buttons}>
            <Button title="Reset" style={styles.btn}></Button> 
            <Button title="Confirm" style={styles.btn}></Button>
        </View>
         
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    height:'70px',
    backgroundColor: '#f7287b',
    alignItems: 'center',
    
  },
  shadowBox : {
    backgroundColor: '#F8F8F8',
    borderRadius:10,
    justifyContent: 'space-between',
    width: '300px',
    height: '20%',
    borderWidth: 0.1,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    marginBottom: 10,
    elevation: 2,
    position: 'relative'
},
buttons :{
  marginTop:10,
  marginBottom:10,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'stretch',

  
},
btn :{
 backgroundColor:'#fff'
}

});
