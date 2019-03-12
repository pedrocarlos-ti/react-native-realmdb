import React, { Component, Fragment } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
    const { realm } = this.state;
    console.tron.log(typeof realm);
    return (
      <Fragment>
        <View style={styles.searchbox}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTitle}>OK</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {realm !== null ? <Text>Realmm</Text> : <Text>Tá Null</Text>}
          <Text style={styles.welcome}>OI</Text>
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
    backgroundColor: "#6c5ce7",
    alignContent: "flex-end"
  },
  button: {
    backgroundColor: "#6c5ce7",
    height: 45,
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
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
