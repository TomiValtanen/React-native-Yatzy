import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Pressable } from "react-native";
import { Text } from "react-native";
import { Styles } from "../styles/Styles"
import YatzyLogo from "../assets/Yatzy_logo11.png"



function Dice({ item, handlePress, throws }) {
    return (
        <Pressable onPress={() => handlePress(item.key)}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", display: throws === 3 ? "none" : "flex" }} key={item.key}>
                <MaterialCommunityIcons name={`dice-${item.value}`} size={60} color={item.selected ? '#D36B00' : "#42032C"} />
            </View>
        </Pressable>


    )
}

function Logo() {
    return (

        <View style={Styles.logoContainer}>
            <Image
                source={YatzyLogo}
                resizeMode="contain"
                style={{ flex: 1 }}
            />
        </View>

    )
}

function GiveName({ setPlayerName, text, placeholder, maxLength, playerName, handlePress, buttonText }) {
    return (
        <View style={Styles.giveNameContainer}>
            <CustomTextInput
                text={text}
                setPlayerName={setPlayerName}
                maxLength={maxLength}
                placeholder={placeholder}
            />

            <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "stretch" }}>
                <PressableButton
                    handlePress={handlePress}
                    playerName={playerName}
                    buttonText={buttonText}
                />
            </View>
        </View>
    )
}

function PressableButton({ handlePress, playerName, buttonText }) {
    return (
        <TouchableOpacity style={Styles.pressableContainer} onPress={() => handlePress(playerName)}>
            <Text style={Styles.pressableText}>{buttonText}</Text>
        </TouchableOpacity>

    )
}

function CustomTextInput({ text, setPlayerName, maxLength, placeholder }) {
    return (
        <View style={Styles.nameInputContainer}>
            <Text style={Styles.nameText}>{text}</Text>
            <TextInput
                style={Styles.textInput}
                onChangeText={setPlayerName}
                autoFocus={true}
                inputMode="text"
                keyboardType="default"
                maxLength={maxLength}
                placeholder={placeholder}
                textAlign="center"

            />


        </View>
    )
}

function Rules({ playerName, RULES, POINTS, AIM ,navigation}) {
    return (
        <View style={{ flex: 5 }}>
            <ScrollView
                contentContainerStyle={{ justifyContent: "center", alignItems: "center",gap:30 }}
                style={{ flexGrow: 1, marginBottom: 20, marginTop: 20 }}>
                <MaterialCommunityIcons
                    name="information"
                    size={90}
                    color={"#faa449"}
                />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch", gap: 20 }}>

                    <CustomText
                        text={RULES}
                    />
                    <CustomText
                        text={POINTS}
                    />
                    <CustomText
                        text={AIM}
                    />

                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:10}}>
                <Text style={{ color: "black" }}> Mukavia peli hetkiä sinulle , {playerName}</Text>
                <Pressable onPress={() => navigation.navigate("Gameboard", { player: playerName })}>
                    <Text style={[Styles.splashText, { width: 150, textAlign: "center", backgroundColor: "#D36B00" }]}>Yatzy</Text>
                </Pressable>
                </View>
               


            </ScrollView>
        </View>
    )
}

function CustomText({ text }) {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color: "black", textAlign: "left", paddingLeft: 15, paddingRight: 15 }} multiline="true">{text}</Text>

        </View>
    )
}


function UpperSectionCard({ item, handlePress }) {
    return (
        <Pressable onPress={() => handlePress(item)}>
            <View key={item.rightValue} style={{ flex: 1, flexDirection: "row", borderWidth: 1, alignItems: "center", justifyContent: "space-between", padding: 5, marginTop: 5, marginBottom: 5, backgroundColor: item.used ? '#D36B00' : "#E6D2AA" }}>
                <MaterialCommunityIcons name={`dice-${item.rightValue}`} size={30} color="#42032C" />
                <Text>{item.name}</Text>
                <Text>{item.score}</Text>
            </View>
        </Pressable>
    )
}

function DownSectionCard({ item, handlePress, index }) {
    return (
        <Pressable onPress={() => handlePress(item)}>
            <View key={index} style={{ flex: 1, flexDirection: "row", borderWidth: 1, alignItems: "center", justifyContent: "space-between", padding: 5, marginTop: 5, marginBottom: 5, backgroundColor: item.used ? '#D36B00' : "#E6D2AA" }}>
                <MaterialCommunityIcons name={item.icon} size={30} color="#42032C" />
                <Text>{item.name}</Text>
                <Text>{item.score}</Text>
            </View>
        </Pressable>
    )
}

export { Dice, UpperSectionCard, DownSectionCard, Logo, GiveName, PressableButton, Rules }