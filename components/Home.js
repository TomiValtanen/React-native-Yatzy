import { View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS, BONUS_POINTS_LIMIT } from "../constants/Game";
import { Styles } from "../styles/Styles";
import { useState } from "react";
import { Keyboard } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";





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
        <View style={{flex:1,justifyContent:"center",alignItems:"strech",backgroundColor:"#1e1e40"}}>
            <Header />
            <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:20}}>
                <MaterialCommunityIcons
                    name="information"
                    size={90}
                    color={"#faa449"}
                />
                {!hasPlayerName ?
                    <>
                        <Text style={{color:"white"}}>For scoreboard enter your name...</Text>
                        <TextInput
                            style={{backgroundColor:"#ffffff",width:"50%",height:40}}
                            onChangeText={setPlayerName}
                            autoFocus={true}

                        />
                        <Pressable onPress={() => handlePLayerName(playerName)}>
                            <Text style={[Styles.splashText,{width:150,textAlign:"center",backgroundColor:"#faa449"}]}>OK</Text>
                        </Pressable>
                    </>
                    :
                    <>
                        <Text style={{color:"white"}} multiline="true">
                            THE GAME: Upper section of the classic Yahtzee
                            dice game. You have {NBR_OF_DICES} dices and
                            for the every dice you have {NBR_OF_THROWS}
                            throws. After each throw you can keep dices in
                            order to get same dice spot counts as many as
                            possible. In the end of the turn you must select
                            your points from {MIN_SPOT} to {MAX_SPOT}.
                            Game ends when all points have been selected.
                            The order for selecting those is free.
                        </Text>
                        <Text style={{color:"white"}} multiline="true">
                            POINTS: After each turn game calculates the sum
                            for the dices you selected. Only the dices having
                            the same spot count are calculated. Inside the
                            game you can not select same points from
                            {MIN_SPOT} to {MAX_SPOT} again.

                        </Text>

                        <Text style={{color:"white"}} multiline="true">

                            GOAL: To get points as much as possible.
                            {BONUS_POINTS_LIMIT} points is the limit of
                            getting bonus which gives you {BONUS_POINTS}
                            points more
                        </Text>


                        <Text style={{color:"white"}}> Good luck , {playerName}</Text>
                        <Pressable onPress={() => navigation.navigate("Gameboard", { player: playerName })}>
                            <Text style={[Styles.splashText,{width:150,textAlign:"center",backgroundColor:"#faa449"}]}>Play</Text>
                        </Pressable>

                    </>


                }
            </View>
            <Footer />

        </View>
    )
}

export default Home