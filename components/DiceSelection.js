import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View } from "react-native"
import { CustomFlatlist } from "./Components"
import { DiceSelectionStyles} from "../styles/Styles"
import { NBR_OF_THROWS } from "../constants/Game"





function DiceSelection({item}){
    return(
        <View style={DiceSelectionStyles.diceSelectionContainer}>
                {item.numberOfThrows === NBR_OF_THROWS ?
                    <View >
                        <MaterialCommunityIcons name="dice-multiple" size={DiceSelectionStyles.iconSize} color={DiceSelectionStyles.unSelected}/>
                    </View>
                    :
                    <CustomFlatlist
                        data={item.data}
                        handleSelect={item.handleSelect}
                        horizontal={item.horizontal}
                        dice={item.dice}
                        stylesheet={DiceSelectionStyles}
                    />
                }
            </View>
    )
}

export default DiceSelection