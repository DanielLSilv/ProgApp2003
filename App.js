import { Text, View, SafeAreaView,StyleSheet } from 'react-native';


// Importante importar as funções que você irá utilizar
function App() {

  return (
    <View>
      <Text style={styles.text}>Opa</Text>
      <Text style={styles.text2}>segura ai campeao</Text>
    </View>
  );
}

export default App;
// esse styles e o nome da variavel
let styles = StyleSheet.create({
  text:{
    fontSize:90,
    color: 'blue',
    fontWeight:'bold',
    backgroundColor : 'red',
    alignSelf: 'center'
  },
  text2:{
    fontSize:60,
    color: 'white',
    fontWeight:'bold',
    backgroundColor : 'black',
    alignSelf: 'center'
  }
})