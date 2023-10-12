import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

const Styles = StyleSheet.create({
  splash: {
    marginTop: Constants.statusBarHeight + 5,
    flex: 1
  },
  splashText: {
    backgroundColor:"#ff00ff",
    fontSize:35,
    padding:10,
    borderRadius:8,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {

    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: '#faa449',
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#faa449',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    flex: 1,
    backgroundColor: "#6060c7",
    alignItems: "stretch",
    justifyContent: 'center'
  },
  gameinfo: {

    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: "#2B2B52",
    fontSize: 20
  }
});


export { Styles }