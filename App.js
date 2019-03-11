import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
const Realm = require("realm");
import "./src/config/ReactotronConfig";

const clientSchema = {
  name: "Client",
  properties: {
    name: "string",
    age: "int",
    location: "string"
  }
};

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({
      schema: [clientSchema],
      deleteRealmIfMigrationNeeded: true,
      schemaVersion: 1
    })
      .then(realm => {
        console.tron.log("Ok até agora");
        realm.write(() => {
          const client = realm.create("Client", {
            name: "Pedro",
            age: 26,
            location: "Recife",
            street: "Santo Amaro"
          });
          console.tron.log(realm.objects("Client"));
          this.setState({ realm: client });
        });
        realm.close();
      })
      .catch(error => {
        console.tron.log(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.welcome}>Oi</Text>
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
