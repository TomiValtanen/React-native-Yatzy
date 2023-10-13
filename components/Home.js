import { ScrollView, View } from "react-native";
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
import { Image } from "react-native";
import YatzyLogo from "../assets/Yatzy_logo11.png"




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
        <View style={[Styles.splash, { justifyContent: "center", alignItems: "strech", backgroundColor: "#6060c7" }]}>
            <Header />
            <View style={{ flex: 3, justifyContent: "center", alignItems: "center", gap: 20 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={YatzyLogo}
                        resizeMode="contain"
                        style={{ flex: 1 }}
                    />
                </View>
            </View>

            {!hasPlayerName ?
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" ,gap:20}}>
                    <Text style={{ color: "white" }}>Anna nimesi pistetilastointia varten...</Text>
                    <TextInput
                        style={{ backgroundColor: "#ffffff", width: "50%", height: 40 }}
                        onChangeText={setPlayerName}
                        autoFocus={true}
                        inputMode="text"
                        keyboardType="default"
                        maxLength={10}
                        placeholder="Nimi"
                        textAlign="center"

                    />
                    <Pressable onPress={() => handlePLayerName(playerName)}>
                        <Text style={[Styles.splashText, { width: 150, textAlign: "center", backgroundColor: "#faa449" }]}>OK</Text>
                    </Pressable>
                </View>
                :
                <View style={{flex:5}}>
                <ScrollView
                contentContainerStyle={{justifyContent:"center",alignItems:"center"}}
                style={{ flexGrow: 1, marginBottom: 20, marginTop: 20 }}>
                    <MaterialCommunityIcons
                        name="information"
                        size={90}
                        color={"#faa449"}
                    />
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
                        <Text style={{ color: "white", textAlign: "justify", paddingLeft: 15, paddingRight: 15 }} multiline="true">
                            Yatzy:{"\n"}
                            Pöytäkirja jakautuu kahteen osaa: ylä- ja alapuoleen.{"\n"}
                            Yläpuolella on kohdat:{"\n"}
                            Ykköset{"\n"}
                            Kakkoset{"\n"}
                            Kolmoset{"\n"}
                            Neloset{"\n"}
                            Viitoset{"\n"}
                            Kuutoset{"\n"}
                            Välisumma{"\n"}
                            Bonus{"\n"}{"\n"}
                            Yläpuolen kohdissa lasketaan yksinkertaisesti kyseisten numeroiden summa.{"\n"}Ykkösiin lasketaan siis noppien ykköset, kakkosiin kakkoset ja niin edelleen.{"\n"}Tulos 3-3-3-6-6 olisi kolmosissa 9 pistettä ja kuutosissa 12 pistettä.
                            Välisummaan lasketaan kaikkien kuuden numerokentän summa. Jos siihen tulee vähintään {BONUS_POINTS_LIMIT} pistettä, pelaaja saa kirjata itselleen {BONUS_POINTS} pisteen bonuksen. {BONUS_POINTS_LIMIT} pistettä saavuttaa, kun saa jokaiseen kohtaan vähintään kolme oikeaa numeroa.{"\n"}{"\n"}
                            Alapuolella on kohdat:{"\n"}
                            Yksi pari: kaksi kertaa sama silmäluku. 1-3-4-4-6 = 4+4 = 8 pistettä.{"\n"}
                            Kaksi paria: kaksi eri paria. 1-1-4-4-6 = 1+1 + 4+4 = 10 pistettä.{"\n"}
                            Kolmoisluku: kolme samaa silmälukua. 1-3-3-3-6 = 3+3+3 = 9 pistettä.{"\n"}
                            Neloisluku: neljä samaa silmälukua. 1-3-3-3-3 = 3+3+3+3 = 12 pistettä.{"\n"}
                            Pieni suora: numerot 1-2-3-4-5. 15 pistettä.{"\n"}
                            Suuri suora: numerot 2-3-4-5-6. 20 pistettä.{"\n"}
                            Täyskäsi eli mökki: kolmoisluku ja pari. 3-3-3-5-5 = 3+3+3+5+5 = 19 pistettä.{"\n"}
                            Sattuma: mitä tahansa. Tähän kelpaa mitä tahansa, pisteiksi lasketaan silmälukujen summa.{"\n"}
                            Yatzy: viisi samaa silmälukua. {BONUS_POINTS} pistettä.{"\n"}
                            Pelaajan peli on ohi, kun kaikki kohdat pöytäkirjasta on täytetty. Lopputulos saadaan laskemalla pelaajan pisteet yhteen.
                        </Text>
                        <Text style={{ color: "white", textAlign: "justify", paddingLeft: 15, paddingRight: 15 }} multiline="true">
                            PISTEYTYS: Pisteet voidaan laitta ylä- tai alapuoleen, kun on heittänyt noppia kolme kertaa. Pisteytys jakautuu yllä olevien ohjeiden mukaisesti.

                        </Text>

                        <Text style={{ color: "white", textAlign: "justify", paddingLeft: 15, paddingRight: 15 }} multiline="true">

                            TAVOITE: Saada mahdollisimman paljon pisteitä pelin aikana.
                            Yläosasta on mahdollista saada bonus pisteitä {BONUS_POINTS} , jos saa yläosasta yhteensä {BONUS_POINTS_LIMIT} pistettä tai enemmän.
                        </Text>


                        <Text style={{ color: "white" }}> Mukavia peli hetkiä sinulle , {playerName}</Text>
                        <Pressable onPress={() => navigation.navigate("Gameboard", { player: playerName })}>
                            <Text style={[Styles.splashText, { width: 150, textAlign: "center", backgroundColor: "#faa449" }]}>Yatzy</Text>
                        </Pressable>

                    </View>
                </ScrollView>
                </View>

            }

            <Footer />

        </View >
    )
}

export default Home