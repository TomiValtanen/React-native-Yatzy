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
    fontSize: getFontSize(TexSizes.normal)
  },
  textInput: {
    padding: 5,
    backgroundColor: ColorPalette.inputColor,
    width: "60%",
    fontSize: getFontSize(TexSizes.normal)
  },
  pressableContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  pressableButton: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: ColorPalette.colorOne,
    borderRadius: 5,
  },
  pressableText: {
    padding: 10,
    fontSize: getFontSize(TexSizes.normal)
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
    color: ColorPalette.darkTextColor,
    fontSize: getFontSize(TexSizes.normal)
  },
  flatlistContainer: {
    flex: 1,
    alignItems: "left",
    justifyContent: "flex-end"
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
    ...Styles.pressableText
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
    color: ColorPalette.darkTextColor,
    fontSize: getFontSize(TexSizes.normal)
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
    ...Styles.navigationText
  },
  pressableButton: {
    ...Styles.pressableButton,
    width: "100%",
    height: "100%"
  },
  pressableText: {
    ...Styles.pressableText,
    fontSize: getFontSize(TexSizes.large),
    color: ColorPalette.lightTextColor
  },

})







const GameboardStyles = StyleSheet.create({
  pressableContainer: {
    ...Styles.pressableContainer,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: ColorPalette.thirdColor,
    backgroundColor: ColorPalette.thirdColor,
    width: "100%",
    height: "100%"

  },
  pressableText: {
    padding: 10,
    fontSize: 20,
    color: ColorPalette.lightTextColor
  },
  selectionContainer: {
    flex: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 5
  },
  diceSelection: {
    flex: 1.25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorPalette.secondaryColor
  },
  throwSelectionContainer: {
    flex: 1,
    flexDirection: "row",

  },
  throwsLeftContainer: {
    flex: 1,
    flexDirection: "column"
  },
  throwsLeftText: {
    textAlign: "center",
    color: "black"
  },
  throwsLeftIconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  customTextContainer: {
    flex: 1,
    gap: 0,
    justifyContent: "flex-end"
  },
  customText: {
    ...Styles.customText,
  },

})

const ScoreboardStyles = StyleSheet.create({
  scoreTableContainer: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20
  },
  dataTableRow: {
    backgroundColor: "red"
  },
  dataTableTitleText: {
    color: "white",
    fontSize: getFontSize(TexSizes.normal)
  },
  dataTableCellText: {
    fontSize: getFontSize(TexSizes.normal)
  },
  pressableContainer: {
    ...Styles.pressableContainer,
    borderRadius: 5,
    borderWidth: 1,
    width: "60%",
    height: "60%"

  },
  pressableText: {
    padding: 10,
    fontSize: getFontSize(TexSizes.large),
    color: ColorPalette.lightTextColor
  },
  customTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center"
  },
  customText: {
    ...Styles.customText,
    fontSize: getFontSize(TexSizes.xxl)

  },
})

export { Styles, GameboardStyles, ScoreboardStyles, RulesStyles, ColorPalette, TexSizes, GiveNameStyles }