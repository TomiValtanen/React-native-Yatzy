import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Pressable } from "react-native";
import { Text } from "react-native";
import { Styles } from "../styles/Styles"
import YatzyLogo from "../assets/Yatzy_logo11.png"
import { FlatList } from "react-native";





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


            <PressableButton
                handlePress={handlePress}
                buttonText={buttonText}
                width={"50%"}
                height={"30%"}
            />

        </View>
    )
}

function PressableButton({ handlePress, buttonText, width, height }) {
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "stretch" }}>
            <TouchableOpacity style={[Styles.pressableContainer, { width: width, height: height }]} onPress={handlePress}>
                <Text style={Styles.pressableText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>

    )
}

function NavigationTextButton({ navigation, buttonText, text, width, height }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch", gap: 10 }}>

            <Text style={{ color: "black" }}>{text}</Text>


            <PressableButton
                handlePress={navigation}
                buttonText={buttonText}
                width={width}
                height={height}
            />
        </View>
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

function Rules({ text, textParas, navigation, buttonText }) {
    return (
        <View style={{ flex: 5 }}>
            <ScrollView
                contentContainerStyle={{ justifyContent: "center", alignItems: "center", gap: 30 }}
                style={{ flexGrow: 1, marginBottom: 20, marginTop: 20 }}>
                <MaterialCommunityIcons
                    name="information"
                    size={90}
                    color={"#faa449"}
                />
                <View style={Styles.textContainer}>
                    {
                        textParas.map((para, index) => <CustomText key={index} text={para} />)
                    }
                </View>
                <NavigationTextButton
                    navigation={navigation}
                    text={text}
                    buttonText={buttonText}
                    width={"100%"}
                    height={"100%"}
                />
            </ScrollView>
        </View>
    )
}

function CustomText({ text }) {
    return (
        <View style={{ flex: 1 }}>
            <Text style={Styles.customText} multiline="true">{text}</Text>
        </View>
    )
}
function CustomFlatlist({ data, handleSelect, text, horizontal,dice }) {
    return (
        <>
            <FlatList
                data={data}
                extraData={data}
                horizontal={horizontal}
                renderItem={({ item, index }) =>
                    <Card
                        dice={dice}
                        item={item}
                        handlePress={handleSelect}
                        index={`${text}${index}`}

                    />
                }

            />
        </>
    )
}
function Selection({ data, handleSelect, text, textPara, horizontal,dice }) {
    return (
        <View style={Styles.flatlistContainer}>
            <Text style={{ textAlign: "center", color: "black" }}>{text}</Text>
            <CustomFlatlist
                data={data}
                handleSelect={handleSelect}
                text={text}
                horizontal={horizontal}
                dice={dice}
            />
            <View style={{ flexGrow: 1, marginTop: 2, position: "absolute", bottom: 0, width: "100%", backgroundColor: "#F1EFDC" }}>
                {textPara.map((text, index) => <CustomText key={index} text={text} />)}
            </View>
        </View>
    )
}
function Card({ dice ,item,handlePress,index}) {
    return (
        <>
            {dice ?<Dice
             item={item}
            handlePress={handlePress}
               />
            :
            <DownSectionCard
            item={item}
            handlePress={handlePress}
            index={index}
            />}
        </>
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

function Dice({ item, handlePress }) {
    return (
        <Pressable onPress={() => handlePress(item.key)}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} key={item.key}>
                <MaterialCommunityIcons name={`dice-${item.value}`} size={60} color={item.selected ? '#D36B00' : "#42032C"} />
            </View>
        </Pressable>


    )
}

export { Dice, DownSectionCard, Logo, GiveName, PressableButton, Rules, CustomFlatlist, Selection }