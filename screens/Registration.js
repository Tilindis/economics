import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert } from "react-native";
import Button from "../components/Button";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
// );

let emailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
const imageBack = require("../images/registrationcover.jpg");

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      emailError: "",
      firstNameError: "",
      lastNameError: "",  
    };
  }

  firstNameErrorChange = (text) => {
    this.setState({firstNameError: text});
  };
  
  lastNameErrorChange = (text) => {
    this.setState({lastNameError: text});
  };

  emailErrorChange = (text) => {
    this.setState({emailError: text});
  };

  emailChange(email) {
    if (email.length <= 0 || !emailRegex.test(this.state.email)) {
      this.setState({email});
      this.emailErrorChange('Negalimas Emailas');
    } else {
      this.setState({email});
      this.emailErrorChange(false);
    }
  }

  firstNameChange(firstName) {
    if (firstName.length < 3) {
      this.setState({firstName});
      this.firstNameErrorChange('Vardas turi būti netrupesnis nei 3 siboliai!');
    } else {
      this.setState({firstName});
      this.firstNameErrorChange(false);
    }
  }

  lastNameChange(lastName) {
    if (lastName.length < 2) {
      this.setState({lastName});
      this.lastNameErrorChange('Pavardė turi būti netrupesnė nei 2 siboliai!');
    } else {
      this.setState({lastName});
      this.lastNameErrorChange(false);
    }
  }

  clearData = () => {
    this.setState({firstName: ""});
    this.setState({lastName: ""});
    this.setState({email: ""});
  };

  goToStart = () => {
    this.clearData();
    this.props.navigation.navigate('wellcome');
  }

  goToLeaders = () => {
    this.clearData();
    //this.props.navigation.navigate('leadersData');
  }


  /////////////////////

  registrerNewGamer = () => {
    if (
      this.state.firstNameError !== false ||
      this.state.emailError !== false ||
      this.state.lastNameError !== false ||
      this.state.firstName.length < 1 ||
      this.state.lastName.length < 1
    ) {
      Alert.alert('Laukai užpildyti netinkamai');
    } else {

      Alert.alert('Regsitracija sėkminga.');
      //this.props.navigation.navigate('leadersData');
      this.clearData();
    }
  };
  /////////////////////



  render() {
    return (
      <ImageBackground
        source={imageBack}
        style={styles.image}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.wellcome}>
            <Text style={styles.wellcomeText}>
              Sveikiname įveikus šį žaidimą! 
            </Text>
            <Text style={styles.wellcomeText}> Jūs galite užsiregistruoti</Text>
          </View>
          <View style={styles.register}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Vardas</Text>
                <TextInput style={styles.input}
                    value={this.state.firstName}
                    placeholder="Jonas"
                    onChangeText={(text) => this.firstNameChange(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Pavardė</Text>
                <TextInput style={styles.input}
                title="Pavardė:"
                value={this.state.lastName}
                placeholder="Jonaitis"
                onChangeText={(text) => this.lastNameChange(text)}
                />
            </View>
            


            <View style={styles.inputContainer}>
                <Text style={styles.title}>El. Paštas</Text>
                <TextInput style={styles.input}
                title="El. paštas:"
                value={this.state.email}
                placeholder="jonas.jonaitis@example.lt"
                onChangeText={(text) => this.emailChange(text)}
                />
            </View>

            <View>
              <View>
              <Button
                color="rgba(1,48,90,0.8)"
                title="Registruotis"
                W={160}
                H={60}
                onPress={() => {
                  this.registrerNewGamer();
                }}
              />
              <Text>   </Text>
              </View>
              
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              
              <Button
                color="rgba(1,48,90,0.8)"
                title="Lyderiai"
                W={160}
                H={60}
                onPress={() => {
                  this.goToLeaders();
                }}
              />  
              <Button
                color="rgba(1,48,90,0.8)"
                title="Pradėti iš naujo"
                W={160}
                H={60}
                onPress={() => {
                  this.goToStart();
                }}
              />
              </View>
            </View>
            
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  wellcome: {
    paddingTop: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  register: {
    flex: 2,
  },
  wellcomeText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'column',
    height: 80,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default Registration;