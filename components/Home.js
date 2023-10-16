import { ScrollView, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS, BONUS_POINTS_LIMIT, RULES, POINTS, AIM } from "../constants/Game";
import { Styles } from "../styles/Styles";
import { useState } from "react";
import { Keyboard } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
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
            <View style={{ flex: 3, justifyContent: "center", alignItems: "center", gap: 20 }}>
                <Logo/>
            </View>

            {!hasPlayerName ?
                <GiveName
                setPlayerName={setPlayerName}
                text={"Anna nimesi pistetilastointia varten..."}
                placeholder={"Nimi"}
                maxLength={10}
                playerName={playerName}
                handlePress={handlePLayerName}
                buttonText={"OK"}
                />
                :
                <Rules
                playerName={playerName}
                RULES={RULES}
                POINTS={POINTS}
                AIM={AIM}
                navigation={navigation}
                />

            }

            <Footer />

        </View >
    )
}

export default Home