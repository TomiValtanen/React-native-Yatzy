import { ScrollView, View } from "react-native"
import { CustomText, NavigationTextButton } from "./Components"
import { Styles } from "../styles/Styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"






function Rules({ text, textParas, navigation, buttonText,stylesheet }) {
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
                        textParas.map((para, index) => <CustomText key={index} text={para} stylesheet={Styles}/>)
                    }
                </View>
                <NavigationTextButton
                    navigation={navigation}
                    text={text}
                    buttonText={buttonText}
                    width={"100%"}
                    height={"100%"}
                    stylesheet={stylesheet}
                />
            </ScrollView>
        </View>
    )
}
export default Rules