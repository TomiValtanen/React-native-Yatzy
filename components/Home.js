import { View } from "react-native";
import { RULES, POINTS, AIM } from "../constants/Game";
import { Styles } from "../styles/Styles";
import { useState } from "react";
import { Keyboard } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { GiveName, Logo, Rules } from "./Components";




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
                />
                :
                <Rules
                    text={` Mukavia peli hetkiä sinulle , ${playerName}`}
                    textParas={[RULES, POINTS, AIM]}
                    navigation={() => navigation.navigate("Gameboard", { player: playerName })}
                    buttonText={"Yatzy"}
                />

            }

            <Footer />

        </View >
    )
}

export default Home