import { ImageBackground, View } from "react-native";
import { RULES, POINTS, AIM } from "../constants/Game";
import { Styles, exampleAsync } from "../styles/Styles";
import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BackgroundTemplate, Logo } from "../components/Components";
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
    const resetPlayerName = () => {
        setPlayerName("")
        setHasPlayerName(false)
    }




    return (
        <BackgroundTemplate>
            <Header />

            <Logo />
            {!hasPlayerName ?

                <GiveName
                    setPlayerName={setPlayerName}
                    handlePress={() => handlePLayerName(playerName)}
                   
                   
                />
                :
                <Rules
                    playerName={playerName}
                    textParas={[RULES, POINTS, AIM]}
                    navigation={() => navigation.navigate("Gameboard", { player: playerName })}
                    handlePress={() => resetPlayerName()}
                   


                />
            }

            <Footer />
        </BackgroundTemplate>
    )
}

export default Home