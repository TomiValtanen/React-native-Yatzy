import { ScrollView, View } from "react-native"
import { CustomText, NavigationTextButton, PressableButton } from "./Components"
import { RulesStyles, Styles } from "../styles/Styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"






function Rules({ text, textParas, navigation,handlePress }) {
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
                <View style={{flex:1 ,justifyContent:"center",alignItems:"stretch",gap:20}}>
                <NavigationTextButton
                    navigation={navigation}
                    text={text}
                    buttonText={"Siirry pelaamaan"}
                    stylesheet={RulesStyles}
                />
                <PressableButton
                handlePress={handlePress}
                buttonText={"Vaihda nimeä"}
                stylesheet={RulesStyles}
                
                />
                </View>
               
            </ScrollView>
        </View>
    )
}
export default Rules