import { View } from "react-native"
import { CustomDataTable, CustomText, PressableButton } from "./Components"






function ScoreTable({item}){
    return(
        <View style={item.stylesheet.scoreTableContainer}>

                <CustomText stylesheet={item.stylesheet} text={item.cusText1} />
                <View style={{ flex: 4 }}>
                    {item.scoreData.length === 0 ?
                        <CustomText stylesheet={item.stylesheet} text={item.cusText2} />
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
                    buttonText={item.buttonText}
                    stylesheet={item.stylesheet}
                    width={item.width}
                    height={item.height}
                />
            </View>
    )
}

export default ScoreTable