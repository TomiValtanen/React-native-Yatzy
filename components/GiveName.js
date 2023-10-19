import { View } from "react-native"
import { CustomTextInput, PressableButton } from "./Components"
import { Styles } from "../styles/Styles"




function GiveName({ setPlayerName, text, placeholder, maxLength, stylesheet, handlePress, buttonText }) {
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
                stylesheet={stylesheet}
            />

        </View>
    )
}

export default GiveName