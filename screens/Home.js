import { ImageBackground, View } from "react-native";
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
import BackgroundImg from "../assets/background.png"




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




    return (
        <View style={Styles.container}>
            <ImageBackground source={BackgroundImg} style={{flex:1}}>
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
            </ImageBackground>
        </View >
    )
}

export default Home