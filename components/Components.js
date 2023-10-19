import { Image, TextInput, TouchableOpacity, View } from "react-native";
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



function PressableButton({ handlePress, buttonText, width, height ,stylesheet}) {
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "stretch" }}>
            <TouchableOpacity style={[stylesheet.pressableContainer, { width: width, height: height }]} onPress={handlePress}>
                <Text style={stylesheet.pressableText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>

    )
}

function NavigationTextButton({ navigation,stylesheet, buttonText, text, width, height }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch", gap: 10 }}>

            <Text style={{ color: "black" }}>{text}</Text>


            <PressableButton
                handlePress={navigation}
                buttonText={buttonText}
                width={width}
                height={height}
                stylesheet={stylesheet}
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
                contentContainerStyle={{ paddingBottom: dice? 0: 20 }}
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
            {!dice && <Text style={{ textAlign: "center", color: "black" }}>{text}</Text>}
            <CustomFlatlist
                data={data}
                handleSelect={handleSelect}
                text={text}
                horizontal={horizontal}
                dice={dice}
            />
            <View style={{ flexGrow: 1,position:"absolute",bottom:0, marginTop: 2, width: "100%", backgroundColor: "#F1EFDC" }}>
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
            <SectionCard
            item={item}
            handlePress={handlePress}
            index={index}
            />}
        </>
    )
}
function SectionCard({ item, handlePress, index }) {
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

export { Dice, SectionCard, Logo, PressableButton, NavigationTextButton, CustomFlatlist, Selection ,CustomTextInput,CustomText}