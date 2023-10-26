import { Image, ImageBackground, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Pressable } from "react-native";
import { Text } from "react-native";
import { Styles} from "../styles/Styles"
import YatzyLogo from "../assets/Yatzy_logo1.png"
import { FlatList } from "react-native";
import { DataTable } from "react-native-paper";
import BackgroundImg from "../assets/background.png"




function BackgroundTemplate({ children}) {
    return (
        <View style={Styles.container}>
            <ImageBackground source={BackgroundImg} style={{ flex: 1 }}>
                {children}
            </ImageBackground>
        </View>
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



function PressableButton({ handlePress, buttonText, stylesheet }) {
    return (
        <View style={stylesheet.pressableContainer}>
            <TouchableOpacity style={stylesheet.pressableButton} onPress={handlePress}>
                <Text style={stylesheet.pressableText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>

    )
}

function NavigationTextButton({ navigation, stylesheet, buttonText, text }) {
    return (
        <View style={stylesheet.navigationTextContainer}>

            <Text style={stylesheet.navigationText}>{text}</Text>


            <PressableButton
                handlePress={navigation}
                buttonText={buttonText}
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



function CustomText({ text, stylesheet }) {
    return (
        <View style={stylesheet.customTextContainer}>
            <Text style={stylesheet.customText} multiline="true">{text}</Text>
        </View>
    )
}
function CustomFlatlist({ data, handleSelect, text, horizontal, dice,stylesheet }) {
    return (
        <>
            <FlatList
                contentContainerStyle={{ paddingBottom: dice ? 0 : 5 }}
                data={data}
                extraData={data}
                horizontal={horizontal}
                renderItem={({ item, index }) =>
                    <Card
                        dice={dice}
                        item={item}
                        handlePress={handleSelect}
                        index={`${text}${index}`}
                        stylesheet={stylesheet}

                    />
                }

            />
        </>
    )
}
function Selection({ data, handleSelect, text, horizontal, dice, stylesheet }) {
    return (
        <View style={stylesheet.flatlistContainer}>

            {!dice && <Text style={stylesheet.flatlistHeading}>{text}</Text>}
            <CustomFlatlist
                data={data}
                handleSelect={handleSelect}
                text={text}
                horizontal={horizontal}
                dice={dice}
                stylesheet={stylesheet}
            />
        </View>
    )
}
function Card({ dice, item, handlePress, index,stylesheet }) {
    return (
        <>
            {dice ? <Dice
                item={item}
                handlePress={handlePress}
                stylesheet={stylesheet}
            />
                :
                <SectionCard
                    item={item}
                    handlePress={handlePress}
                    index={index}
                    stylesheet={stylesheet}
                />}
        </>
    )
}
function SectionCard({ item, handlePress, index ,stylesheet }) {
    return (
        <Pressable onPress={() => handlePress(item)}>
            <View key={index} style={[stylesheet.sectionCardContainer,{ backgroundColor: item.used ? stylesheet.selected : stylesheet.unSelected }]}>
                <MaterialCommunityIcons name={item.icon} size={stylesheet.iconSize} color={stylesheet.iconColor} />
                <Text style={stylesheet.sectionCardText}>{item.name}</Text>
                <Text style={stylesheet.sectionCardText}>{item.score}</Text>
            </View>
        </Pressable>
    )
}

function Dice({ item, handlePress ,stylesheet}) {
    return (
        <Pressable onPress={() => handlePress(item.key)}>
            <View style={stylesheet.diceContainer} key={item.key}>
                <MaterialCommunityIcons name={`dice-${item.value}`} size={stylesheet.iconSize} color={item.selected ? stylesheet.selected : stylesheet.unSelected} />
            </View>
        </Pressable>


    )
}

function CustomDataTable({ scoreData, titles, stylesheet, checkIndex }) {
    return (

        <DataTable style={stylesheet.dataTableContainer}>
            <DataTable.Header style={stylesheet.dataTableHeader}>
                {titles.map((title, index) =>
                    <DataTable.Title key={index} style={{ flex: index !== 2 && index !== 1 ? 1 : 2 }}><Text style={stylesheet.dataTableTitleText}>{title}</Text></DataTable.Title>
                )}
            </DataTable.Header>
            <ScrollView>
                {scoreData.map((score, index) => (
                    <DataTable.Row style={ { backgroundColor: checkIndex(index) ? stylesheet.dataTableRowColorDark: stylesheet.dataTableRowColorLight }} key={index}>
                        <DataTable.Cell style={{ flex: 1 }}><Text style={stylesheet.dataTableCellText}>{index + 1}.</Text></DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }}><Text style={stylesheet.dataTableCellText}>{score.name}</Text></DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }}><Text style={stylesheet.dataTableCellText}>{score.date}</Text></DataTable.Cell>
                        <DataTable.Cell style={{ flex: 1 }}><Text style={stylesheet.dataTableCellText}>{score.time}</Text></DataTable.Cell>
                        <DataTable.Cell style={{ flex: 1 }} numeric><Text style={stylesheet.dataTableCellText}>{score.score}</Text></DataTable.Cell>
                    </DataTable.Row>

                ))}
            </ScrollView>
        </DataTable>

    )
}

export { Dice, SectionCard, Logo, PressableButton, NavigationTextButton, CustomFlatlist, Selection, CustomTextInput, CustomText, CustomDataTable ,BackgroundTemplate}