/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
const Realm = require("realm");
import "./src/config/ReactotronConfig";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({
      schema: [{ name: "Dog", properties: { name: "string" } }]
    }).then(realm => {
      realm.write(() => {
        realm.create("Dog", { name: "Rex" });
      });
      this.setState({ realm });
      // let data = JSON.stringify(realm.objects("Dog"));
      // data = JSON.parse(data);
      // console.log(data);
      console.tron.log(realm.objects("Dog"));
    });
  }

  render() {
    const info = this.state.realm
      ? this.state.realm.objects("Dog")
      : "Loading...";

    return (
      <ScrollView>
        <Text style={styles.welcome}>{JSON.stringify(info)}</Text>
      </ScrollView>
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
  }
});
