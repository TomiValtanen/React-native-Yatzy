import { Text, View } from "react-native"
import { PressableButton } from "./Components"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"





function ThrowSelection({item}) {
    return (
        
        <View style={item.stylesheet.throwSelectionContainer}>

            <PressableButton
                handlePress={item.numberOfThrows === 0 ? () => null : item.handlePress}
                buttonText={item.buttonText}
                width={"100%"}
                height={"100%"}
                stylesheet={item.stylesheet}
            />
            <View style={item.stylesheet.throwsLeftContainer}>
                <Text style={item.stylesheet.throwsLeftText}>Heittoja jäljellä:</Text>
                <View style={item.stylesheet.throwsLeftIconContainer}>

                    <View >
                        {item.numberOfThrows >= 1 ?
                            <MaterialCommunityIcons name="numeric-1-circle" size={30} color="#D36B00" /> :
                            <FontAwesome name="circle" size={30} color="#42032C" />}
                    </View>

                    <View>
                        {item.numberOfThrows >= 2 ?
                            <MaterialCommunityIcons name="numeric-2-circle" size={30} color="#D36B00" /> :
                            <FontAwesome name="circle" size={30} color="#42032C" />}
                    </View>

                    <View>
                        {item.numberOfThrows === 3 ?
                            <MaterialCommunityIcons name="numeric-3-circle" size={30} color="#D36B00" /> :
                            <FontAwesome name="circle" size={30} color="#42032C" />}
                    </View>

                </View>
            </View>
        </View>
    )
}

export default ThrowSelection