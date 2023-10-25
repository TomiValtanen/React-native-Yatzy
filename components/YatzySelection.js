import { View } from "react-native"
import {  YatzySelectionStyles } from "../styles/Styles"
import { Selection } from "./Components"





function YatzySelection({item}){
    
    return(
        
        <View style={YatzySelectionStyles.selectionContainer}>
        
       {item.map((selection,index) => 
       
        <Selection 
        key={index}
        data={selection.data}
        handleSelect={selection.handleSelect}
        horizontal={selection.horizontal}
        dice={selection.dice}
        text={selection.text}
        stylesheet={YatzySelectionStyles}
        />
       )}
       
        
    </View>
    )
}

export default YatzySelection