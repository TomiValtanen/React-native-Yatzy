import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './screens/Header';
import Footer from './screens/Footer';
import { Styles } from './styles/Styles';
import Gameboard from './screens/Gameboard';




export default function App() {
  return (
    <View style={Styles.container}>
      <Header/>
      <Gameboard/>
      <Footer/>
    </View>
  );
}

