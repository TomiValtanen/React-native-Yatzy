import { View } from "react-native";
import { RULES, POINTS, AIM } from "../constants/Game";
import { Styles } from "../styles/Styles";
import { useState } from "react";
import { Keyboard } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Logo } from "../components/Components";
import GiveName from "../components/GiveName";
import Rules from "../components/Rules";




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