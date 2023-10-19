import { View } from "react-native"
import { GameboardStyles } from "../styles/Styles"
import { Selection } from "./Components"





function YatzySelection({item}){
    
    return(
        
        <View style={GameboardStyles.selectionContainer}>
        
       {item.map((selection,index) => 
       
        <Selection 
        key={index}
        data={selection.data}
        handleSelect={selection.handleSelect}
        horizontal={selection.horizontal}
        dice={selection.dice}
        text={selection.text}
        textPara={selection.textPara}
        stylesheet={selection.stylesheet}
        />
       )}
       
        
    </View>
    )
}

export default YatzySelection