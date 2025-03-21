import { useState } from 'react';
import { Text, View, Image, SafeAreaView, Button } from 'react-native';


// Importante importar as funções que você irá utilizar
function App() {


  const [nome, setNome] = useState('Joaaao');
  const [idade, setIdade]= useState(15);
  const [nacionalidade, setNacionalidade]= useState('Brasileiro');

  function info(nome,idade,nacionalidade){
    setIdade(idade);
    setNome(nome);
    setNacionalidade(nacionalidade);
  }

  return (
    <View>
      <Text style={{fontSize:30 ,alignSelf:'center', marginTop:"50%"}}>{nome}</Text>
      <Text style={{fontSize:30 ,alignSelf:'center'}}>{idade}</Text>
      <Text style={{fontSize:30 ,alignSelf:'center'}}>{nacionalidade}</Text>
      <Button title='Mudar as info do sujeito' onPress={()=>info('Pablo',99,'Japones')}></Button>
      
      </View>
  );
}

export default App
