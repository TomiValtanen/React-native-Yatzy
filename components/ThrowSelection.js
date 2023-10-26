import { Text, View } from "react-native"
import { PressableButton } from "./Components"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import { ThrowSelectionStyles } from "../styles/Styles"





function ThrowSelection({item}) {
    return (
        
        <View style={ThrowSelectionStyles.throwSelectionContainer}>

            <PressableButton
                handlePress={item.numberOfThrows === 0 ? () => null : item.handlePress}
                buttonText={item.buttonText}
                stylesheet={ThrowSelectionStyles}
            />
            <View style={ThrowSelectionStyles.throwsLeftContainer}>
                <Text style={ThrowSelectionStyles.throwsLeftText}>Heittoja jäljellä:</Text>
                <View style={ThrowSelectionStyles.throwsLeftIconContainer}>

                    <View >
                        {item.numberOfThrows >= 1 ?
                            <MaterialCommunityIcons name="numeric-1-circle" size={ThrowSelectionStyles.iconSize} color={ThrowSelectionStyles.iconColorOne} /> :
                            <FontAwesome name="circle" size={ThrowSelectionStyles.iconSize} color={ThrowSelectionStyles.iconColorTwo} />}
                    </View>

                    <View>
                        {item.numberOfThrows >= 2 ?
                            <MaterialCommunityIcons name="numeric-2-circle" size={ThrowSelectionStyles.iconSize} color={ThrowSelectionStyles.iconColorOne}/> :
                            <FontAwesome name="circle" size={ThrowSelectionStyles.iconSize} color={ThrowSelectionStyles.iconColorTwo} />}
                    </View>

                    <View>
                        {item.numberOfThrows === 3 ?
                            <MaterialCommunityIcons name="numeric-3-circle" size={ThrowSelectionStyles.iconSize} color={ThrowSelectionStyles.iconColorOne}/> :
                            <FontAwesome name="circle" size={ThrowSelectionStyles.iconSize} color={ThrowSelectionStyles.iconColorTwo} />}
                    </View>

                </View>
            </View>
        </View>
    )
}

export default ThrowSelection