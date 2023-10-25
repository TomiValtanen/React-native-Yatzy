import { View } from "react-native"
import { CustomTextInput, PressableButton } from "./Components"
import { GiveNameStyles } from "../styles/Styles"




function GiveName({ setPlayerName, handlePress}) {
    return (
        
        <View style={GiveNameStyles.giveNameContainer}>
            <CustomTextInput
                text={"Anna nimesi pistetilastointia varten..."}
                setPlayerName={setPlayerName}
                maxLength={10}
                placeholder={"Nimi"}
               

            />


            <PressableButton
                handlePress={handlePress}
                buttonText={"OK"}
                stylesheet={GiveNameStyles}
            />

        </View>
    )
}

export default GiveName