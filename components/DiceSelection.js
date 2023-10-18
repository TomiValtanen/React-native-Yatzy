import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View } from "react-native"
import { CustomFlatlist } from "./Components"
import { GameboardStyles } from "../styles/Styles"





function DiceSelection({item}){
    return(
        <View style={GameboardStyles.diceSelection}>
                {item.numberOfThrows === 3 ?
                    <View >
                        <MaterialCommunityIcons name="dice-multiple" size={60} color="black" />
                    </View>
                    :
                    <CustomFlatlist
                        data={item.data}
                        handleSelect={item.handleSelect}
                        horizontal={item.horizontal}
                        dice={item.dice}
                    />
                }
            </View>
    )
}

export default DiceSelection