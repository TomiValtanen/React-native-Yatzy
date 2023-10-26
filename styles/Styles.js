import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale()
const getFontSize = size => size / fontScale

const ColorPalette = StyleSheet.create({
  backgroundColor: "#F1EFDC",
  colorOne: "#D36B00",
  secondaryColor: "#E6D2AA",
  thirdColor: "#42032C",
  lightTextColor: "#ffffff",
  darkTextColor: "#000000",
  inputColor: "#ffffff"
})

const TexSizes = StyleSheet.create({
  small: 12,
  normal: 15,
  medium: 18,
  large: 20,
  xl: 25,
  xxl: 30
})
const Shadows=StyleSheet.create({
  card:{
    shadowColor:"#000000",  
    elevation: 5,
  },
  textDarkShadow:{
    textShadowColor: "#000000",
    textShadowOffset: {width: 1, height:0 },
    textShadowRadius: 1
  },
  textLightShadow:{
    textShadowColor: "#ffffff",
    textShadowOffset: {width: 1, height:0 },
    textShadowRadius: 1
  }
 
})


const Styles = StyleSheet.create({

  container: {
    marginTop: Constants.statusBarHeight + 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "strech",
    backgroundColor: ColorPalette.backgroundColor,

  },
  logoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"

  },
  nameInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
    height: "40%"
  },
  nameText: {
    color: ColorPalette.darkTextColor,
    fontSize: getFontSize(TexSizes.normal),
    ...Shadows.textLightShadow
  },
  textInput: {
    padding: 5,
    backgroundColor: ColorPalette.inputColor,
    width: "60%",
    fontSize: getFontSize(TexSizes.normal),
    
  },
  pressableContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    
  },
  pressableButton: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: ColorPalette.colorOne,
    borderRadius: 5,
    ...Shadows.card
  },
  pressableText: {
    padding: 10,
    fontSize: getFontSize(TexSizes.normal),
   
  },
  header: {
    backgroundColor: ColorPalette.colorOne,
    flexDirection: 'row',
    padding: 5,
    alignItems: "center"
  },
  footer: {
    backgroundColor: ColorPalette.colorOne,
    flexDirection: 'row',
    padding: 5,
    alignItems: "center"
  },
  title: {
    color: ColorPalette.lightTextColor,
    fontWeight: 'bold',
    flex: 1,
    fontSize: getFontSize(TexSizes.medium),
    textAlign: 'center',
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: getFontSize(TexSizes.medium),
    textAlign: 'center',

  },
  customTextContainer: {
    flex: 1
  },
  customText: {
    textAlign: "left",
    paddingLeft: 15,
    paddingRight: 15,

  },
  navigationTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    gap: 10
  },
  navigationText: {
    ...Shadows.textLightShadow,
    color: ColorPalette.darkTextColor,
    fontSize: getFontSize(TexSizes.normal),
    fontWeight:"500",
  },

});


const GiveNameStyles = StyleSheet.create({
  giveNameContainer: {
    flex: 5,
    alignItems: "stretch",
    justifyContent: "center"
  },
  pressableContainer: {
    ...Styles.pressableContainer,

  },
  pressableButton: {
    ...Styles.pressableButton,
    width: "50%",
    height: "30%"
  },
  pressableText: {
    ...Styles.pressableText,
    color:ColorPalette.lightTextColor,
    ...Shadows.textDarkShadow
  }
})


const RulesStyles = StyleSheet.create({
  iconColor: ColorPalette.colorOne,
  iconSize: getFontSize(90),
  rulesContainer: {
    flex: 5
  },
  scrollViewContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30
  },
  scrollViewContainer: {
    flexGrow: 1,
    marginBottom: 20,
    marginTop: 20
  },
  pressableContainer: {
    ...Styles.pressableContainer,

  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20
  },
  customTextContainer: {
    ...Styles.customTextContainer
  },
  customText: {
    ...Styles.customText,
    ...Shadows.textLightShadow,
    color: ColorPalette.darkTextColor,
    fontSize: getFontSize(TexSizes.normal),
    fontWeight:"500",
    textAlign:"center"
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20
  },
  navigationTextContainer: {
    ...Styles.navigationTextContainer
  },
  navigationText: {
    ...Styles.navigationText,
  },
  pressableButton: {
    ...Styles.pressableButton,
    width: "100%",
    height: "100%"
  },
  pressableText: {
    ...Styles.pressableText,
    ...Shadows.textDarkShadow,
    fontSize: getFontSize(TexSizes.large),
    color: ColorPalette.lightTextColor,

  },

})

const YatzySelectionStyles = StyleSheet.create({
  unSelected: ColorPalette.secondaryColor,
  selected: ColorPalette.colorOne,
  iconColor: ColorPalette.thirdColor,
  iconSize: getFontSize(30),
  selectionContainer: {
    flex: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 5
  },
  flatlistContainer: {
    flex: 1,
    alignItems: "left",
    justifyContent: "flex-end"
  },
  flatlistHeading: {
    ...Shadows.textLightShadow,
    textAlign: "center",
    color: ColorPalette.darkTextColor,
    fontWeight:"400",
    fontSize: getFontSize(TexSizes.medium),
    marginBottom: 4
  },
  sectionCardContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginBottom: 5,
    ...Shadows.card

  },
  sectionCardText: {
    fontWeight:"400",
    fontSize: getFontSize(TexSizes.normal),

  }

})

const PlayerStatsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 5
  },
  text: {
    ...Shadows.textLightShadow,
    fontSize: getFontSize(TexSizes.normal),
    color: ColorPalette.darkTextColor,
    fontWeight:"400",

  }
})

const DiceSelectionStyles = StyleSheet.create({
  unSelected: ColorPalette.thirdColor,
  selected: ColorPalette.colorOne,
  iconSize: getFontSize(60),
  diceSelectionContainer: {
    flex: 1.25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorPalette.secondaryColor
  },
  diceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const ThrowSelectionStyles = StyleSheet.create({
  iconColorOne: ColorPalette.colorOne,
  iconColorTwo: ColorPalette.thirdColor,
  iconSize: getFontSize(30),
  throwSelectionContainer: {
    flex: 1.10,
    flexDirection: "row",


  },
  pressableContainer: {
    ...Styles.pressableContainer,
  },
  pressableButton: {
    ...Styles.pressableButton,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: ColorPalette.thirdColor,
    backgroundColor: ColorPalette.thirdColor,
    width: "100%",
    height: "100%"
  },
  pressableText: {
    ...Shadows.textDarkShadow,
    padding: 10,
    fontSize:getFontSize(TexSizes.large),
    color: ColorPalette.lightTextColor,
    fontWeight:"400",

  },
  throwsLeftContainer: {
    flex: 1,
    flexDirection: "column",
  },
  throwsLeftText: {
    ...Shadows.textLightShadow,
    textAlign: "center",
    color: "black",
    fontSize: getFontSize(TexSizes.normal),
    fontWeight:"400",

  },
  throwsLeftIconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
})

const ScoreTableStyles = StyleSheet.create({
  dataTableRowColorLight: ColorPalette.backgroundColor,
  dataTableRowColorDark: ColorPalette.secondaryColor,
  scoreTableContainer: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20
  },
  dataContainer: {
    flex: 4
  },
  dataTableContainer: {
    flex: 1
  },
  dataTableHeader: {
    backgroundColor: ColorPalette.colorOne,
  },
  dataTableTitleText: {
    ...Shadows.textDarkShadow,
    color: ColorPalette.lightTextColor,
    fontSize: getFontSize(TexSizes.normal),
    fontWeight:"400",
  },
  dataTableCellText: {
    ...Shadows.textLightShadow,
    fontSize: getFontSize(TexSizes.normal),
    fontWeight:"400",
  },
  pressableContainer: {
    ...Styles.pressableContainer,
  },
  pressableButton: {
    ...Styles.pressableButton,
    borderRadius: 5,
    width: "60%",
    height: "60%"
  },
  pressableText: {
    ...Styles.pressableText,
    fontSize: getFontSize(TexSizes.large),
    color: ColorPalette.lightTextColor,
    ...Shadows.textDarkShadow
  },
  customTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center"
  },
  customText: {
    ...Styles.customText,
    ...Shadows.textLightShadow,
    fontWeight:"400",
    fontSize: getFontSize(TexSizes.xxl)

  },
})

export { Styles, ScoreTableStyles, RulesStyles, ColorPalette, TexSizes, GiveNameStyles, YatzySelectionStyles, PlayerStatsStyles, DiceSelectionStyles, ThrowSelectionStyles,Shadows }