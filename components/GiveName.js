import { View } from "react-native"
import { CustomTextInput, PressableButton } from "./Components"
import { Styles } from "../styles/Styles"




function GiveName({ setPlayerName, stylesheet, handlePress}) {
    return (
        
        <View style={Styles.giveNameContainer}>
            <CustomTextInput
                text={"Anna nimesi pistetilastointia varten..."}
                setPlayerName={setPlayerName}
                maxLength={10}
                placeholder={"Nimi"}

            />


            <PressableButton
                handlePress={handlePress}
                buttonText={"OK"}
                stylesheet={stylesheet}
            />

        </View>
    )
}

export default GiveName