import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Pressable } from "react-native";
import { Text } from "react-native";
import { Styles } from "../styles/Styles"
import YatzyLogo from "../assets/Yatzy_logo1.png"
import { FlatList } from "react-native";
import { DataTable } from "react-native-paper";





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
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "stretch" }}>
            <TouchableOpacity style={stylesheet.pressableContainer} onPress={handlePress}>
                <Text style={stylesheet.pressableText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>

    )
}

function NavigationTextButton({ navigation, stylesheet, buttonText, text }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch", gap: 10 }}>

            <Text style={{ color: "black" }}>{text}</Text>


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



function CustomText({ text,stylesheet }) {
    return (
        <View style={stylesheet.customTextContainer}>
            <Text style={stylesheet.customText} multiline="true">{text}</Text>
        </View>
    )
}
function CustomFlatlist({ data, handleSelect, text, horizontal, dice }) {
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

                    />
                }

            />
        </>
    )
}
function Selection({ data, handleSelect, text, horizontal, dice ,stylesheet}) {
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
        </View>
    )
}
function Card({ dice, item, handlePress, index }) {
    return (
        <>
            {dice ? <Dice
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
            <View key={index} style={{ flex: 1, flexDirection: "row", borderWidth: 1,borderRadius:4, alignItems: "center", justifyContent: "space-between", padding: 5, marginBottom: 5, backgroundColor: item.used ? '#D36B00' : "#E6D2AA" }}>
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

function CustomDataTable({ scoreData, titles ,stylesheet ,checkIndex }) {
    return (
        
    <DataTable style={{ flex:1 }}>
        <DataTable.Header style={{ backgroundColor: "#D36B00" }}>
            {titles.map((title, index) =>
                <DataTable.Title key={index} style={{ flex: index !==2 && index!==1? 1 : 2 }}><Text style={stylesheet.dataTableTitleText}>{title}</Text></DataTable.Title>
            )}
        </DataTable.Header>
        <ScrollView>
        {scoreData.map((score, index) => (
            <DataTable.Row style={[stylesheet.dataTableRow, { backgroundColor: checkIndex(index) ? "#F1EFDC" : "#E6D2AA" }]} key={index}>
                <DataTable.Cell style={{ flex: 1 }}><Text style={stylesheet.dataTableCellText}>{index+1}.</Text></DataTable.Cell>
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

export { Dice, SectionCard, Logo, PressableButton, NavigationTextButton, CustomFlatlist, Selection, CustomTextInput, CustomText ,CustomDataTable}