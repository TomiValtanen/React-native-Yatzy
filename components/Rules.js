import { ScrollView, View } from "react-native"
import { CustomText, NavigationTextButton, PressableButton } from "./Components"
import { RulesStyles } from "../styles/Styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"






function Rules({ playerName, textParas, navigation,handlePress}) {
    return (
        
        <View style={RulesStyles.rulesContainer}>
            <ScrollView
                contentContainerStyle={RulesStyles.scrollViewContentContainer}
                style={RulesStyles.scrollViewContainer}>
                <MaterialCommunityIcons
                    name="information"
                    size={RulesStyles.iconSize}
                    color={RulesStyles.iconColor}
                />
                <View style={RulesStyles.textContainer}>
                    {
                        textParas.map((para, index) => <CustomText key={index} text={para} stylesheet={RulesStyles} />)
                    }
                </View>
                <View style={RulesStyles.buttonsContainer}>
                <NavigationTextButton
                    navigation={navigation}
                    text={` Mukavia peli hetkiä sinulle , ${playerName}`}
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