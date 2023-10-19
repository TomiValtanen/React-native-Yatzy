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


    return (
        <View style={Styles.container}>
            <Header />
            <Logo />
            {!hasPlayerName ?
            
                <GiveName
                    setPlayerName={setPlayerName}
                    text={"Anna nimesi pistetilastointia varten..."}
                    placeholder={"Nimi"}
                    maxLength={10}
                    handlePress={() => handlePLayerName(playerName)}
                    buttonText={"OK"}
                    stylesheet={Styles}
                />
                :
                <Rules
                    text={` Mukavia peli hetkiä sinulle , ${playerName}`}
                    textParas={[RULES, POINTS, AIM]}
                    navigation={() => navigation.navigate("Gameboard", { player: playerName })}
                    buttonText={"Yatzy"}
                    stylesheet={Styles}
                />
            }
            <Footer />
        </View >
    )
}

export default Home