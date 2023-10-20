import { View } from "react-native";
import { RULES, POINTS, AIM } from "../constants/Game";
import { Styles } from "../styles/Styles";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Logo } from "../components/Components";
import GiveName from "../components/GiveName";
import Rules from "../components/Rules";
import { Alert } from "react-native";




function Home({ navigation }) {
    const [playerName, setPlayerName] = useState("")
    const [hasPlayerName, setHasPlayerName] = useState(false)

    const handlePLayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true)
            Keyboard.dismiss()
        }
    }
const resetPlayerName=()=>{
    setPlayerName("")
    setHasPlayerName(false)
}

useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior

      e.preventDefault();
      Alert.alert(
        'Haluatko varmasti jättää pelin kesken',
        'Peli alkaa alusta, jos poistut näkymästä?',
        [
            {
                text: 'Haluan jättää pelin kesken',
                style: 'destructive',
                // If the user confirmed, then we dispatch the action we blocked earlier
                // This will continue the action that had triggered the removal of the screen
                onPress: () => navigation.navigate("Home"),
              },
          { text: "Jää", style: 'cancel', onPress: () => {} },
         
        ]
      );
    });
  
    return unsubscribe;
  }, [navigation]);


    return (
        <View style={Styles.container}>
            <Header />
            <Logo />
            {!hasPlayerName ?
            
                <GiveName
                    setPlayerName={setPlayerName}
                    handlePress={() => handlePLayerName(playerName)}
                    stylesheet={Styles}
                />
                :
                <Rules
                    text={` Mukavia peli hetkiä sinulle , ${playerName}`}
                    textParas={[RULES, POINTS, AIM]}
                    navigation={() => navigation.navigate("Gameboard", { player: playerName })}
                    handlePress={()=>resetPlayerName()}
                    
                    
                />
            }
            <Footer />
        </View >
    )
}

export default Home