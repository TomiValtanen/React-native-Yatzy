import { View } from "react-native"
import { CustomDataTable, CustomText, PressableButton } from "./Components"
import { NBR_OF_SCOREBOARD } from "../constants/Game"






function ScoreTable({item}){
    return(
        <View style={item.stylesheet.scoreTableContainer}>

                <CustomText stylesheet={item.stylesheet} text={`Top ${NBR_OF_SCOREBOARD}:`} />
                <View style={{ flex: 4 }}>
                    {item.scoreData.length === 0 ?
                        <CustomText stylesheet={item.stylesheet} text={"Huippupisteitä ei ole vielä tehtynä."} />
                        :
                        <CustomDataTable
                            scoreData={item.scoreData}
                            titles={item.titles}
                            stylesheet={item.stylesheet}
                            checkIndex={item.checkIndex}
                        />
                    }
                </View>
                <PressableButton
                    handlePress={item.handlePress}
                    buttonText={"Resetoi pisteet"}
                    stylesheet={item.stylesheet}
                 
                />
            </View>
    )
}

export default ScoreTable