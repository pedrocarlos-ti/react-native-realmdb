import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import "./config/ReactotronConfig";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <View style={styles.searchbox}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTitle}>OK</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.welcome}>RealmDB</Text>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textInput: {
    width: "80%",
    height: 45,
    backgroundColor: "#d3d3d3",
    alignContent: "flex-end",
    borderRadius: 3
  },
  button: {
    backgroundColor: "#6c5ce7",
    height: 45,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
  },
  buttonTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 15
  }
});
