import { View } from "react-native"
import { CustomDataTable, CustomText, PressableButton } from "./Components"
import { NBR_OF_SCOREBOARD } from "../constants/Game"
import { ScoreTableStyles } from "../styles/Styles"






function ScoreTable({item}){
    return(
        <View style={ScoreTableStyles.scoreTableContainer}>

                <CustomText stylesheet={ScoreTableStyles} text={`Top ${NBR_OF_SCOREBOARD}:`} />
                <View style={ScoreTableStyles.dataContainer}>
                    {item.scoreData.length === 0 ?
                        <CustomText stylesheet={ScoreTableStyles} text={"Huippupisteitä ei ole vielä tehtynä."} />
                        :
                        <CustomDataTable
                            scoreData={item.scoreData}
                            titles={item.titles}
                            stylesheet={ScoreTableStyles}
                            checkIndex={item.checkIndex}
                        />
                    }
                </View>
                <PressableButton
                    handlePress={item.handlePress}
                    buttonText={"Resetoi pisteet"}
                    stylesheet={ScoreTableStyles}
                 
                />
            </View>
    )
}

export default ScoreTable